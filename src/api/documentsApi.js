import { axiosInstance } from './axios.config'; // axiosInstance를 가져옴

// 문서 생성하기
export const createDocument = async (documentData) => {
  const response = await axiosInstance.post('/documents/', documentData);
  return response.data;
};




/*// 문서 목록 가져오기
export const getDocuments = async () => {
  const response = await axiosInstance.get('/documents/');
  return response.data;
};*/