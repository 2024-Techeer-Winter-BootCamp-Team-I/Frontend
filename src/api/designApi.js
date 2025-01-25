import { jsonAxios } from './axios.config';
import { useDocumentIdStore } from '../store/useIdStore';

// Zustand 스토어에서 document_id 가져오기
const storedDocId = useDocumentIdStore.getState().document_id;

export const designApi = async (docId = storedDocId) => {
  try {
    const response = await jsonAxios.post(`/documents/${docId}/design`, {
      document_id: docId,
    });

    if (response.data.status === 'success') {
      const { diagram, erd, api } = response.data.data;

      // 각각의 변수에 저장
      const sequenceDiagramCode = diagram;
      const erdCode = erd;
      const apiSpecCode = api;

      console.log('Diagram Code:', sequenceDiagramCode);
      console.log('ERD Code:', erdCode);
      console.log('API Spec Code:', apiSpecCode);

      // 여기서 추가적인 로직을 처리할 수 있습니다.
      // 예: 상태 업데이트, UI 렌더링 등

      return { sequenceDiagramCode, erdCode, apiSpecCode };
    } else {
      console.error('API request failed:', response.data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching document design:', error);
    return null;
  }
};
