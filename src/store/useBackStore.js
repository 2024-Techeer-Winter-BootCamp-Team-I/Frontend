// store/useBackStore.js
import { create } from 'zustand';

const useBackStore = create((set) => ({
  // 각 단계별 선택된 기술 스택

  selectedFramework: null, // 프레임워크 (1단계)
  selectedDatabase: null, // 데이터베이스 (2단계)

  // 프레임워크 선택
  setSelectedFramework: (framework) => set({ selectedFramework: framework }),

  // 데이터베이스 선택
  setSelectedDatabase: (database) => set({ selectedDatabase: database }),

  // 모든 선택 초기화
  clearAll: () =>
    set({
      selectedFramework: null,
      selectedDatabase: null,
    }),
}));

export default useBackStore;
