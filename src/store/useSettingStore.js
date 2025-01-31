// store/useSettingStore.js
import { create } from 'zustand';

const useSettingStore = create((set) => ({
  // 포지션 관리 함수
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

  // 디렉토리 관리 함수
  directoryName: '', // 디렉터리 이름
  setDirectoryName: (dirName) => set({ directoryName: dirName }), // 디렉터리 이름 설정
  setProjectDir: (project_dir) => set({ project_dir: project_dir }),
  // techStackSetupApi의 response body 중 project_dir을 저장

  // repoAPI 연동 후 Response body에서 "repo_url"을 관리할 함수
  repoUrl: '', // 레포지토리 URL
  setRepoUrl: (repoUrl) => set({ repoUrl: repoUrl }), // 올바른 키 사용

  dockerUrl: 'http://hwanhee02.api.devsketch.xyz/swagger/',
  setDockerUrl: (dockerUrl) => set({ dockerUrl: dockerUrl }),
}));

export default useSettingStore;
