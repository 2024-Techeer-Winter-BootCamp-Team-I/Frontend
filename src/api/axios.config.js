import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import decamelizeKeys from 'decamelize-keys';
import { handleAPIError } from './interceptor.ts';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// JSON 요청 전용 Axios 인스턴스
export const jsonAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // 필요에 따라 true/false로 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

// 공통 Axios 인스턴스
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 네트워크 타임아웃 설정 (ms)
  withCredentials: true, // CORS 정책에 따라 설정
});

// 요청 인터셉터 설정: 데이터 키 변환
axiosInstance.interceptors.request.use(
  (config) => {
    if (config.data) {
      config.data = decamelizeKeys(config.data); // 요청 데이터를 snake_case로 변환
    }
    const token = localStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // 인증 토큰 추가
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터 설정: 데이터 키 변환 및 에러 처리
axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = camelcaseKeys(response.data, { deep: true }); // 응답 데이터를 camelCase로 변환
    }
    return response;
  },
  (error) => handleAPIError(error), // 에러 처리
);

export default {
  jsonAxios,
  axiosInstance,
};
