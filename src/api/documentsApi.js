import { axiosInstance } from './axios.config'; // axiosInstance를 가져옴

// 문서 생성 API 함수 추가
export const createDocument = async (documentData, accessToken) => {
  const response = await axiosInstance.post('/documents/', documentData, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

// 문서 수정 API 함수 추가
export const updateDocument = async (documentId, prompt) => {
  const response = await axiosInstance.put(`/documents/${documentId}/`, { prompt });
  return response.data;
};




/* 문서 목록 가져오기
export const getDocuments = async () => {
  const response = await jsonAxios.get('/documents/');
  return response.data;
} */