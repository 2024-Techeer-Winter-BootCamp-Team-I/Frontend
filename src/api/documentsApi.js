import { jsonAxios } from './axios.config';



/**
 * 문서 생성 (POST /documents)
 */
export const postDocument = async ({ title, content, requirements }) => {
  if (!title || !content || !requirements) {
    throw new Error('모든 필드가 필요합니다.');
  }

  try {
    // 문서 생성 요청
    const response = await jsonAxios.post('/documents/', {
      title,
      content,
      requirements,
    });

    // 응답 데이터에서 document_id 추출
    const documentId = response.data.document_id; // response body에서 id 추출
    if (!documentId) {
      throw new Error('문서 생성 실패: document_id를 찾을 수 없습니다.');
    }

    return { documentId }; // document_id 반환
  } catch (error) {
    console.error('문서 생성 실패:', error);
    throw error;
  }
};

/**
 * 문서 스트림 가져오기 (GET /documents/{document_id}/stream)
 */
export const getDocumentStream = (documentId) => {
  if (!documentId || typeof documentId !== 'string') {
    throw new Error('유효한 documentId가 필요합니다.');
  }

  const streamUrl = `http://localhost:8000/api/v1/documents/${documentId}/stream?cacheBuster=${Date.now()}`;

  // Fetch API로 SSE 요청
  const eventSource = new EventSource(streamUrl, {
    headers: {
      Accept: 'text/event-stream; charset=utf-8', // 헤더 설정
    },
  });

  eventSource.onmessage = (event) => {
    console.log('Received message:', event.data); // 수신한 데이터 출력
  };

  eventSource.onerror = (error) => {
    console.error('Stream error:', error); // 에러 처리
  };

  return eventSource;
};

/**
 * 문서 수정 (PUT /documents/{document_id})
 */
export const putDocument = async ({ documentId, prompt }) => {
  try {
    const response = await jsonAxios.put(`/documents/${documentId}`, {
      prompt,
    });
    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error('문서 수정 실패:', error);
    throw error;
  }
};

export const postDesign = async (documentId) => {
  try {
    console.log('postDesign 요청 데이터:', { documentId });
    const response = await jsonAxios.post(`/documents/${documentId}/design`);
    console.log('postDesign 응답 데이터:', response.data);
    return response.data; // 전체 데이터를 반환
  } catch (error) {
    console.error(
      'postDesign 요청 실패:',
      error.response?.data || error.message,
    );
    throw error; // 에러를 호출한 곳으로 전달
  }
};
