import axios from 'axios';
import { getToken } from '../utils/cookies';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * [Request Interceptor]
 * 요청을 보내기 전, 쿠키에 있는 깃허브 액세스 토큰을 Authorization 헤더에 붙입니다.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken('github_access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 예: 토큰 만료 시, 쿠키 삭제/로그인 페이지 이동 등 처리
      // removeToken('github_access_token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export const jsonAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 공통(일반) Axios 인스턴스
 */
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

export default {
  jsonAxios,
  axiosInstance,
};
