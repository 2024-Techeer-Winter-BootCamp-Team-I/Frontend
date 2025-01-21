// store/useSettingStore.js
import { create } from 'zustand';

const useSettingStore = create((set) => ({
  selectedPositions: [], // 선택된 포지션 (Frontend, Backend)
  togglePosition: (position) =>
    set((state) => {
      const isSelected = state.selectedPositions.includes(position);
      return {
        selectedPositions: isSelected
          ? state.selectedPositions.filter((p) => p !== position)
          : [...state.selectedPositions, position],
      };
    }),
  clearPositions: () => set({ selectedPositions: [] }), // 선택 초기화
}));

export default useSettingStore;
