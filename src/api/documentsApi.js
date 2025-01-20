import { axiosInstance } from './axios.config'; // axiosInstance를 가져옴

export const getDocuments = async (token) => {
  const response = await axiosInstance.get('/documents/', {
    headers: {
      Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
    },
  });
  return response.data;
};

export const createDocument = async (documentData, token) => {
  const response = await axiosInstance.post('/documents/', documentData, {
    headers: {
      Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
    },
  });
  return response.data;
};