// axios.config.js

import axios from 'axios';
import { getToken /*, removeToken */ } from '../utils/cookies';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * 공통(일반) Axios 인스턴스
 */
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true, // 쿠키를 전송하려면 true
});

/**
 * JSON 전송용 Axios 인스턴스
 */
export const jsonAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // 쿠키 전송
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * [Request Interceptor for axiosInstance]
 * - 요청을 보내기 전, 쿠키에 있는 깃허브 액세스 토큰(github_access_token)을 Authorization 헤더에 붙임
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

/**
 * [Response Interceptor for axiosInstance]
 * - 401 에러 시 로그아웃 처리, 페이지 이동 등 로직을 넣을 수 있음
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // 예: 토큰 만료 시, 쿠키 삭제/로그인 페이지 이동 등 처리
      // removeToken('github_access_token');
      // window.location.href = '/login';
      console.error('401 Unauthorized - need to re-authenticate');
    }
    return Promise.reject(error);
  },
);

/**
 * [Request Interceptor for jsonAxios]
 * - JSON 요청에서도 동일하게 쿠키 토큰을 Authorization 헤더로
 */
jsonAxios.interceptors.request.use(
  (config) => {
    const token = getToken('github_access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * [Response Interceptor for jsonAxios]
 * - 필요 시 401 등 에러 처리
 */
jsonAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // removeToken('github_access_token');
      // window.location.href = '/login';
      console.error('401 Unauthorized (jsonAxios) - need to re-authenticate');
    }
    return Promise.reject(error);
  },
);

export default {
  jsonAxios,
  axiosInstance,
};
