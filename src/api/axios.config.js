import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// jsonAxios 인스턴스 설정
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
  withCredentials: true,
});

// 요청 인터셉터: 인증 토큰 자동 첨부
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      // 1. code를 백엔드에서 처리 후 accessToken을 가져옴
      const tokenResponse = await jsonAxios.get('/auth/github/token');
      const accessToken = tokenResponse.data.accessToken;

      // 2. accessToken을 Authorization 헤더에 추가
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

export default {
  jsonAxios,
  axiosInstance,
};
