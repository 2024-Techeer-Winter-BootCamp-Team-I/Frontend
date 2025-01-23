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
 * 문서 상세 조회 (GET /api/v1/documents/:id)
 */
export const getDocumentById = async (id) => {
  if (!id) {
    console.error('문서 ID가 제공되지 않았습니다.');
    throw new Error('문서 ID가 제공되지 않았습니다.');
  }
  const response = await axiosInstance.get(`/documents/${id}/`);
  return response.data; // 성공 시 데이터 반환
};

/**
 * 문서 수정 (PUT /api/v1/documents/:id)
 * - JSON Body를 전송해야 하므로 jsonAxios 사용
 */
export const updateDocument = async (id, documentData) => {
  if (!id) {
    console.error('문서 ID가 제공되지 않았습니다.');
    throw new Error('문서 ID가 제공되지 않았습니다.');
  }
  const response = await jsonAxios.put(`/documents/${id}/`, documentData);
  return response.data; // 성공 시 데이터 반환
};

/**
 * 문서 삭제 (DELETE /api/v1/documents/:id)
 */
export const deleteDocument = async (id) => {
  const response = await axiosInstance.delete(`/api/v1/documents/${id}/`);
  return response.data;
};