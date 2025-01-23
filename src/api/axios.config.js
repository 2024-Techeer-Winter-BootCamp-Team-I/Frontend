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
  withCredentials: true, // 쿠키 전송 허용
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 액세스 토큰 갱신 함수
 * httpOnly 쿠키를 사용하기 때문에 클라이언트에서 토큰을 직접 다루지 않습니다.
 */
const refreshAccessToken = async () => {
  try {
    const response = await jsonAxios.post('/login/refresh');

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
    // 필요 시 사용자 로그아웃 또는 로그인 페이지로 리다이렉트
    throw error;
  }
};

/**
 * 토큰 갱신 상태 및 대기열 관리
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
 */
jsonAxios.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (tokenRefreshManager.getRefreshingStatus()) {
        try {
          await tokenRefreshManager.enqueue();
          return jsonAxios(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      originalRequest._retry = true;
      tokenRefreshManager.onRefreshStart();

      try {
        const newToken = await refreshAccessToken();
        tokenRefreshManager.onRefreshEnd(null, newToken);
        return jsonAxios(originalRequest);
      } catch (refreshError) {
        tokenRefreshManager.onRefreshEnd(refreshError, null);
        // 필요 시 사용자 로그아웃 또는 로그인 페이지로 리다이렉트
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error); // 다른 오류는 그대로 반환
  },
);

/**
 * export default - 인스턴스들을 모아서 내보냄
 */
export default {
  axiosInstance,
  jsonAxios,
};
