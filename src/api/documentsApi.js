import { jsonAxios, axiosInstance } from './axios.config';

/**
 * 문서 생성 (POST /api/v1/documents)
 * - JSON Body를 전송해야 하므로 jsonAxios 사용
 */
export const createDocument = async ({ title, content, requirements }) => {
  try {
    const response = await jsonAxios.post('/documents/', {
      title,
      content,
      requirements,
    });
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error('문서 생성 실패:', error.response?.data || error.message);
    throw error; // 에러를 상위로 전달
  }
};

/**
 * 문서 목록 불러오기 (GET /api/v1/documents)
 * - 단순 GET 요청이라 axiosInstance 사용 가능
 */
export const getDocuments = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/documents/');
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error('문서 목록 조회 실패:', error.response?.data || error.message);
    throw error;
  }
};

/**
 * 문서 상세 조회 (GET /api/v1/documents/:id)
 */
export const getDocumentById = async (document_id) => {
  if (!document_id) {
    console.error('문서 ID가 제공되지 않았습니다.');
    throw new Error('문서 ID가 제공되지 않았습니다.');
  }
  
  try {
    const response = await axiosInstance.get(`/api/v1/documents/${document_id}/`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error(`문서 상세 조회 실패 (ID: ${document_id}):`, error.response?.data || error.message);
    throw error;
  }
};

/**
 * 문서 수정 (PUT /api/v1/documents/:id)
 * - JSON Body를 전송해야 하므로 jsonAxios 사용
 */
export const updateDocument = async (document_id, { title, content, requirements }) => {
  try {
    const response = await jsonAxios.put(`/api/v1/documents/${document_id}/`, {
      title,
      content,
      requirements,
    });
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error(`문서 수정 실패 (ID: ${document_id}):`, error.response?.data || error.message);
    throw error;
  }
};

/**
 * 문서 삭제 (DELETE /api/v1/documents/:id)
 */
export const deleteDocument = async (document_id) => {
  try {
    const response = await axiosInstance.delete(`/api/v1/documents/${document_id}/`);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    console.error(`문서 삭제 실패 (ID: ${document_id}):`, error.response?.data || error.message);
    throw error;
  }
};
