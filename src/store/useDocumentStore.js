import { create } from 'zustand';

const useDocumentStore = create((set) => ({
  documentId: null, // 전역 document_id
  setDocumentId: (document_id) => set({ documentId: document_id }), // document_id 설정
}));

export default useDocumentStore;
