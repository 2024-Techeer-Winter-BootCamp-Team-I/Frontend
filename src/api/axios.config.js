// src/api/axios.config.js
import axios from 'axios';

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
 * 액세스 토큰 갱신 함수
 * httpOnly 쿠키를 사용하기 때문에 클라이언트에서 토큰을 직접 다루지 않습니다.
 */
const refreshAccessToken = async () => {
  try {
    const response = await jsonAxios.post(
      '/login/refresh',
      {}, // 요청 본문 비워둠
      {
        withCredentials: true, // httpOnly 쿠키 포함
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      console.log('새 액세스 토큰 발급 완료');
      return response.data; // 필요 시 추가 데이터 반환
    } else {
      console.error('리프레시 토큰 응답 상태 이상:', response.status);
      throw new Error('리프레시 토큰 응답 상태 이상');
    }
  } catch (error) {
    console.error('리프레시 토큰 요청 실패:', error);
    throw error;
  }
};

// 토큰 갱신 상태 및 대기열 관리
let isRefreshing = false;
const failedQueue = [];

/**
 * 대기 중인 요청들을 처리하는 함수
 */
const processQueue = (error = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve();
  });
  failedQueue.length = 0; // 대기열 초기화
};

/**
 * 응답 인터셉터: 401 오류 시 토큰 갱신 후 재요청
 */
jsonAxios.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  (error) => {
    const originalRequest = error.config;

    // 401 오류이고, 재시도하지 않은 요청일 경우
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        // 이미 토큰 갱신 중이라면 대기열에 요청 추가
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => jsonAxios(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return refreshAccessToken()
        .then(() => {
          processQueue(); // 대기열 처리
          return jsonAxios(originalRequest); // 원래 요청 재시도
        })
        .catch((refreshError) => {
          processQueue(refreshError); // 실패 시 대기열 처리
          return Promise.reject(refreshError); // 에러 전달
        })
        .finally(() => {
          isRefreshing = false; // 갱신 상태 초기화
        });
    }

    return Promise.reject(error); // 다른 오류는 그대로 반환
  },
);

/**
 * export default - 인스턴스들을 모아서 내보냄
 */
export default {
  axiosInstance,
  jsonAxios,
};
