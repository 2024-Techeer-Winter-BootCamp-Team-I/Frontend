import create from 'zustand';

export const useDocumentIdStore = create((set) => ({
  documentId: null,
  setDocumentId: (id) => set({ documentId: id }),
}));
