import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * 공통(일반) Axios 인스턴스
 */
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true, // 쿠키 전송 허용
});

/**
 * JSON 전송용 Axios 인스턴스
 */
export const jsonAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // 인증 정보를 요청에 포함
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 액세스 토큰 갱신 함수
 * - 리프레시 토큰은 쿠키에서 전송되며, 새 액세스 토큰을 응답으로 받습니다.
 */
const refreshAccessToken = async () => {
  try {
    const response = await jsonAxios.post('/login/refresh'); // 쿠키 기반으로 리프레시 요청

    if (response.status === 200) {
      const { access_token: newAccessToken } = response.data;
      console.log('새 액세스 토큰 발급 완료:', newAccessToken);

      // 새 토큰을 Axios 기본 헤더에 설정
      axiosInstance.defaults.headers.common['Authorization'] =
        `Bearer ${newAccessToken}`;
      jsonAxios.defaults.headers.common['Authorization'] =
        `Bearer ${newAccessToken}`;

      return newAccessToken; // 새 토큰 반환
    } else {
      console.error('리프레시 토큰 응답 상태 이상:', response.status);
      throw new Error('리프레시 토큰 응답 상태 이상');
    }
  } catch (error) {
    console.error('리프레시 토큰 요청 실패:', error);
    throw error;
  }
};

/**
 * 토큰 갱신 상태 및 대기열 관리
 * - 중복된 토큰 갱신 요청을 방지하고, 대기 중인 요청을 처리합니다.
 */
const createTokenRefreshManager = () => {
  let isRefreshing = false;
  const failedQueue = [];

  const processQueue = (error = null, token = null) => {
    failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
    failedQueue.length = 0; // 대기열 초기화
  };

  return {
    enqueue: () =>
      new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }),
    onRefreshStart: () => {
      isRefreshing = true;
    },
    onRefreshEnd: (error, token) => {
      isRefreshing = false;
      processQueue(error, token);
    },
    getRefreshingStatus: () => isRefreshing,
  };
};

const tokenRefreshManager = createTokenRefreshManager();

/**
 * 응답 인터셉터: 401 오류 시 토큰 갱신 후 재요청
 * - 모든 401 에러에서 새 토큰 발급을 시도하고, 성공 시 요청을 재시도합니다.
 */
jsonAxios.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (tokenRefreshManager.getRefreshingStatus()) {
        try {
          await tokenRefreshManager.enqueue();
          return jsonAxios(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      tokenRefreshManager.onRefreshStart();

      try {
        const newToken = await refreshAccessToken();
        tokenRefreshManager.onRefreshEnd(null, newToken);

        // 재시도 요청에 새 토큰 반영
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return jsonAxios(originalRequest);
      } catch (refreshError) {
        tokenRefreshManager.onRefreshEnd(refreshError, null);
        console.error('토큰 갱신 실패. 사용자 로그아웃 필요.');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // 다른 오류는 그대로 반환
  },
);
