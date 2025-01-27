import { jsonAxios, axiosInstance } from './axios.config';
import { setDocumentId } from '../stores/documentIdStore';

/**
 * 문서 생성 (POST /documents)
 * - JSON Body를 전송해야 하므로 jsonAxios 사용
 */
export const postDocument = async ({ title, content, requirements }) => {
  if (!title || !content || !requirements) {
    throw new Error('모든 필드가 필요합니다.');
  }
  try {
    // 1. 기본 JSON 요청 전송
    const response = await jsonAxios.post('/documents/', {
      title,
      content,
      requirements,
    });
    // 2. 응답 헤더에서 document_id 추출
    const documentId = response.headers['x-document-id'];
    console.log(response.headers);

    if (!documentId) {
      throw new Error('문서 생성 실패: X-DOCUMENT-ID 헤더가 없습니다.');
    }
    console.log('Document ID:', documentId);
    return documentId;
  } catch (error) {
    console.error('문서 생성 중 오류 발생:', error);
    throw error;
  }
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
