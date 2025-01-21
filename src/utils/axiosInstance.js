import axios from 'axios';
import { getToken } from './cookies';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true, // CORS 설정에 따라 필요할 수 있음
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken('github_access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 (필요하다면)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // 예: 토큰 만료 시 로직
    if (error.response && error.response.status === 401) {
      // 로그아웃 처리 혹은 토큰 재발급 로직
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
