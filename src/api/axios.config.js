import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 고정된 토큰
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM3NDQ4ODMyLCJpYXQiOjE3Mzc0NDcwMzIsImp0aSI6IjNhNmM5MGQ1ZmFiMDRkY2Q5ZjNjMzBmMTJmZjgwMzNkIiwidXNlcl9pZCI6MX0.C33HFAYVPLLwiKBi_xHk_1YdsLQ-KoI6-ndRhxS3eUE';

// jsonAxios 인스턴스 설정
export const jsonAxios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`, // 고정된 토큰 추가
  },
});

// 공통 Axios 인스턴스
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${accessToken}`, // 고정된 토큰 추가
  },
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default {
  jsonAxios,
  axiosInstance,
};
