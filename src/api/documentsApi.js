import { jsonAxios } from './axios.config'; // jsonAxios를 명시적으로 가져옴

export const getDocuments = async () => {
  const response = await jsonAxios.get('/documents/');
  return response.data;
};

export const createDocument = async (documentData) => {
  const response = await jsonAxios.post('/documents/', documentData);
  return response.data;
};