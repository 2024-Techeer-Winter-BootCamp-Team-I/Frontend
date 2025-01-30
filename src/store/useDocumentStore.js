import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useDocumentStore = create(
  persist(
    (set) => ({
      documentId: null,
      erdCode: '', // ERD 코드 상태
      diagramCode: '', // Diagram 코드 상태
      apiCode: '', // API 코드 상태
      setDocumentId: (document_id) => set({ documentId: document_id }),
      setErdCode: (erdCode) => set({ erdCode }),
      setDiagramCode: (diagramCode) => set({ diagramCode }),
      setApiCode: (apiCode) => set({ apiCode }),
      clearDocumentId: () =>
        set({ documentId: null, erdCode: '', diagramCode: '', apiCode: '' }),
    }),
    {
      name: 'document-store',
      getStorage: () => localStorage,
    },
  ),
);

export default useDocumentStore;
