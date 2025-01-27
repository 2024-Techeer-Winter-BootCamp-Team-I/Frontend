import { create } from 'zustand';

const useDocumentStore = create((set) => ({
  currentDocumentId: null, // 현재 선택된 document_id
  currentDocument: null, // 현재 선택된 문서의 데이터 (getDocumentById 형식과 동일)

  // 현재 문서 데이터 설정
  setDocument: (docId, documentData) => {
    set({
      currentDocumentId: docId,
      currentDocument: {
        title: documentData.title,
        erd_code: documentData.erd_code, // API 응답에 맞게 erd_code를 설정
        diagram_code: documentData.diagram_code,
        api_code: documentData.api_code,
      },
    });
  },

  // 현재 문서 데이터 초기화
  clearDocument: () => {
    set({
      currentDocumentId: null,
      currentDocument: null,
    });
  },
}));

export default useDocumentStore;
