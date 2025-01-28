import { jsonAxios, axiosInstance } from './axios.config';

/**
 * 문서 상세 조회 (GET /documents/:id)
 */
/**
 * document_id를 기반으로 문서 상세 정보를 가져오는 함수
 */
export const getDocumentById = async (documentId) => {
  try {
    const response = await axiosInstance.get(`/login/profile/${documentId}`);
    const { title, erd_code, diagram_code, api_code } = response.data;
    console.log('getDocumentById에서 Id:', documentId); // document_id 확인
    console.log('getDocumentById의 response:', response.data); // 응답 데이터 확인
    return { title, erd_code, diagram_code, api_code };
  } catch (error) {
    console.error('Error fetching document details:', error);
    throw error; // 에러를 다시 throw하여 호출한 곳에서 처리할 수 있도록 함
  }
};

// 프로젝트 삭제 API 추가
export const deleteProfileDoc = async (documentId) => {
  try {
    console.log('Deleting document with ID:', documentId); // docId 확인
    const response = await jsonAxios.delete(`/login/profile/${documentId}`);
    const message = response.data.message;

    // 삭제 성공 메시지 반환
    console.log('Delete Message:', message); // 메시지 확인
    return message;
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};
