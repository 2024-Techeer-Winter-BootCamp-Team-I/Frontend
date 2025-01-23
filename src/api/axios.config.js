import axios from 'axios';
import { getToken, setToken } from '../utils/cookies'; // 쿠키에서 토큰 가져오기/저장하기

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
 * [Request Interceptor] - axiosInstance
 * - 요청 보내기 전, 쿠키에서 'jwt_access' 가져와 Authorization 헤더로 설정
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken('jwt_access'); // 쿠키에서 jwt_access 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * [Request Interceptor] - jsonAxios
 * - JSON 요청에서도 동일하게 쿠키 'jwt_access'를 Bearer 헤더로 설정
 */
jsonAxios.interceptors.request.use(
  (config) => {
    const token = getToken('jwt_access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * [Response Interceptor] - axiosInstance & jsonAxios
 * - 응답이 401 (Unauthorized)일 경우, 리프레시 토큰을 사용해 새 액세스 토큰 요청
 * - 원래 요청을 새 토큰으로 다시 시도
 */
const handleResponseError = async (error) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true; // 무한 루프 방지

    try {
      // 리프레시 토큰으로 새 액세스 토큰 요청
      const newToken = await refreshAccessToken();

      // 새 토큰을 쿠키에 저장
      setToken('jwt_access', newToken);

      // Authorization 헤더에 새 토큰 설정
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      // 원래 요청 다시 시도
      return axios(originalRequest);
    } catch (refreshError) {
      console.error('토큰 갱신 실패:', refreshError);
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};

// Response Interceptor 추가
axiosInstance.interceptors.response.use(
  (response) => response,
  handleResponseError,
);

jsonAxios.interceptors.response.use(
  (response) => response,
  handleResponseError,
);

/**
 * 새 액세스 토큰 요청 함수
 */
const refreshAccessToken = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login/refresh`,
      {},
      { withCredentials: true },
    );
    return response.data.access_token; // 새 액세스 토큰 반환
  } catch (error) {
    console.error('리프레시 토큰 요청 실패:', error);
    throw error;
  }
};

/**
 * export default - 인스턴스들을 모아서 내보냄
 */
export default {
  axiosInstance,
  jsonAxios,
};