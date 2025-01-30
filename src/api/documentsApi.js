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
export const getDocumentStream = async (documentId, onMessage, onError) => {
  try {
    const response = await fetch(
      `https://devsketch.xyz/api/v1/documents/${documentId}/stream`,
      {
        method: 'GET',
        headers: {},
        mode: 'cors',
        credentials: 'include',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let accumulatedText = ''; // 데이터를 누적할 버퍼

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      accumulatedText += decoder.decode(value, { stream: true });

      // 데이터 단위로 분리 (SSE 형식 처리)
      const lines = accumulatedText.split('\n\n');
      accumulatedText = lines.pop(); // 처리되지 않은 남은 데이터 유지

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;

        const data = line.slice(6).trim(); // "data: " 제거

        if (data === '[DONE]') {
          console.log('✅ Streaming finished.');
          return;
        }

        try {
          // ✅ 한 글자씩 전송
          for (const char of data) {
            onMessage(char);
          }
        } catch (error) {
          console.error('🚨 SSE 데이터 파싱 오류:', error);
        }
      }
    }
  } catch (error) {
    console.error('🚨 SSE Fetch Error:', error);
    if (onError) onError(error);
  }
};

/**
 * 문서 업데이트 (PUT /documents/{document_id}/update) + SSE 구현
 */
export const updateDocumentStream = async (
  documentId,
  modifications,
  onMessage,
  onError,
) => {
  try {
    const response = await fetch(
      `https://devsketch.xyz/api/v1/documents/${documentId}/update`,
      {
        method: 'PUT',
        headers: {},
        body: JSON.stringify({ modifications }), // 요청 본문
        mode: 'cors',
        credentials: 'include',
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      if (chunk.includes('[DONE]')) {
        console.log('Streaming finished.');
        break;
      }

      // ✅ 한 글자씩 즉시 반영
      for (const char of chunk) {
        onMessage(char);
      }
    }
  } catch (error) {
    console.error('SSE Update Fetch Error:', error);
    if (onError) onError(error);
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

/**
 * 특정 문서에 데이터를 저장 (POST /documents/{document_id}/save)
 */
export const saveDocumentData = async (documentId, type) => {
  try {
    const response = await jsonAxios.post(`/documents/${documentId}/save`, {
      parts: [type],
    });
    console.log(`"${type}" 저장 완료:`, response.data);
    return response.data;
  } catch (error) {
    console.error(
      `"${type}" 저장 실패:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};
