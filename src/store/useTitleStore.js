import { create } from 'zustand';

const useIdStore = create((set) => ({
  documentTitles: [], // { documentId, title } 형태로 관리

  // 문서 제목 설정
  setDocumentTitles: (documentTitles) =>
    set(() => ({
      documentTitles: documentTitles.map((doc) => ({
        documentId: doc.documentId, // documentId로 저장
        title: doc.title,
      })),
    })),

  // 문서 제목 추가
  addDocumentTitle: (newDocumentTitle) =>
    set((state) => ({
      documentTitles: [
        ...state.documentTitles,
        {
          documentId: newDocumentTitle.documentId, // documentId로 저장
          title: newDocumentTitle.title,
        },
      ],
    })),

  // 문서 제목 삭제
  removeDocumentTitle: (documentId) =>
    set((state) => ({
      documentTitles: state.documentTitles.filter(
        (doc) => doc.documentId !== documentId, // documentId로 필터링
      ),
    })),
}));

export default useIdStore;
