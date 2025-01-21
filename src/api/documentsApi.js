import jsonAxios from './axios.config';

export const getDocuments = async () => {
  const response = await jsonAxios.get('/documents');
  return response.data;
};
