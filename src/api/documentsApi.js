import { jsonAxios } from './axios.config';

/**
 * 문서 생성 (POST /documents)
 * - JSON Body 전송 및 Stream 처리 포함
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

    // 3. Stream 데이터 처리 (SSE 방식)
    const streamUrl = `/documents/${documentId}/stream`;
    const eventSource = new EventSource(streamUrl);

    eventSource.onmessage = (event) => {
      const streamData = JSON.parse(event.data); // Stream 데이터 파싱
      console.log('Stream Data:', streamData);

      // 필요한 로직 추가
    };

    eventSource.onerror = (error) => {
      console.error('Stream Error:', error);
      eventSource.close();
    };

    return { documentId, streamUrl }; // document_id와 Stream URL 반환
  } catch (error) {
    console.error('문서 생성 실패:', error);
    throw error;
  }
};

/**
 * 문서 수정 (PUT /documents/{document_id})
 * - 단순 JSON Body 전송
 */
export const putDocument = async ({ documentId, prompt }) => {
  try {
    const response = await jsonAxios.put(`/documents/${documentId}`, {
      prompt,
    });

    console.log('문서 수정 응답:', response.data);
    return response.data; // 단순 응답 반환
  } catch (error) {
    console.error('문서 수정 실패:', error);
    throw error;
  }
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
