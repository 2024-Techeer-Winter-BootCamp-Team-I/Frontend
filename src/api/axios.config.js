import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const jsonAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 공통 Axios 인스턴스
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true, // 필요에 따라 설정
});

// 요청 인터셉터: 인증 토큰 자동 첨부
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const response = await jsonAxios.get('/api/v1/login/code/view'); // 토큰 요청
      const accessToken = response.data.code;
      if (accessToken && config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error('Error fetching access token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default {
  jsonAxios,
  axiosInstance,
};
