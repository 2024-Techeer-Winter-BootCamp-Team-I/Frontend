// axios.config.js

import axios from 'axios';
import { getToken } from '../utils/cookies';

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
 * export default - 인스턴스들을 모아서 내보냄
 */
export default {
  axiosInstance,
  jsonAxios,
};
