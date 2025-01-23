import { jsonAxios } from './axios.config';

/**
 * 문서 생성 (POST /documents)
 * - JSON Body를 전송해야 하므로 jsonAxios 사용
 */
export const postDocument = async ({ title, content, requirements }) => {
  const response = await jsonAxios.post('/documents/', {
    title,
    content,
    requirements,
  });
  return response.data;
};

export const postDesign = async (documentId) => {
  try {
    const response = await jsonAxios.post(
      `/documents/${documentId}/design`,
      {},
    );
    return response.data; // 전체 데이터를 반환
  } catch (error) {
    console.error('postDesign 요청 실패:', error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
