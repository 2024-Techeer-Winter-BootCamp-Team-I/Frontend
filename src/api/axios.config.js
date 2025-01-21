import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const accessToken = '';

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
      // 1. code 값을 가져오기
      const codeResponse = await jsonAxios.get('/api/v1/login/code/view');
      const code = codeResponse.data.code;

      // 2. code를 사용해 access 토큰 가져오기
      const tokenResponse = await jsonAxios.get(
        `/login/github/callback?code=${code}`,
      );
      const accessToken = tokenResponse.data.access;

      // 3. Authorization 헤더에 access 토큰 추가
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
