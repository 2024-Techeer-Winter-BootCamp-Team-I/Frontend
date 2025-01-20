import axios from 'axios';

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
  timeout: 10000,
  withCredentials: true,
});

export default {
  jsonAxios,
  axiosInstance,
};
