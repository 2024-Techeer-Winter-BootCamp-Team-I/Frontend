import { jsonAxios, axiosInstance } from './axios.config';

/**
 * 문서 생성 (POST /documents)
 * - JSON Body를 전송해야 하므로 jsonAxios 사용
 */
export const createDocument = async ({ title, content, requirements }) => {
  const response = await jsonAxios.post('/documents/', {
    title,
    content,
    requirements,
  });
  return response.data;
};

/**
 * 문서 목록 불러오기 (GET /documents)
 * - 단순 GET 요청이라 axiosInstance 사용 가능
 */
export const getDocuments = async () => {
  const response = await axiosInstance.get('/documents/');
  return response.data;
};

/**
 * 문서 상세 조회 (GET /documents/:id)
 */
export const getDocumentById = async (docId) => {
  const response = await axiosInstance.get(`/documents/${docId}/`);
  return response.data;
};

/**
 * 문서 삭제 (DELETE /documents/:id)
 */
export const deleteDocument = async (docId) => {
  const response = await axiosInstance.delete(`/documents/${docId}/`);
  return response.data;
};
