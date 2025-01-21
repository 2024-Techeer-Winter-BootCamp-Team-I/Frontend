// store/useFrontStore.js
import { create } from 'zustand';

const useFrontStore = create((set) => ({
  // 각 단계별 선택된 기술 스택
  selectedPackage: null, // 패키지 매니저 (1단계)
  selectedBuildTool: null, // 빌드 도구 (2단계)
  selectedFramework: null, // 프레임워크 (3단계)
  selectedLanguage: null, // 언어 (4단계)

  // 패키지 매니저 선택
  setSelectedPackage: (packageName) => set({ selectedPackage: packageName }),

  // 빌드 도구 선택
  setSelectedBuildTool: (buildTool) => set({ selectedBuildTool: buildTool }),

  // 프레임워크 선택
  setSelectedFramework: (framework) => set({ selectedFramework: framework }),

  // 언어 선택
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),

  // 모든 선택 초기화
  clearAll: () =>
    set({
      selectedPackage: null,
      selectedBuildTool: null,
      selectedFramework: null,
      selectedLanguage: null,
    }),
}));

export default useFrontStore;
