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

  directoryName: '', // 디렉터리 이름
  setDirectoryName: (dirName) => set({ directoryName: dirName }), // 디렉터리 이름 설정

  setProjectDir: (project_dir) => set({ project_dir: project_dir }),
  // techStackSetupApi의 response body 중 project_dir을 저장
}));

export default useSettingStore;
