import { create } from 'zustand';

// 로그인 상태 관리 Store
const useLoginStore = create((set) => ({
  loginStatus: false,

  userName: '',
  profileImage: 'userImage',
  email: '',
  documentTitle: [],

  setLoginStatus: (status) => set(() => ({ loginStatus: status })),

  // 프로젝트네임 배열을 관리하는 함수
  addDocumentTitleName: (documentTitle) =>
    set((state) => ({
      documentTitle: [...state.documentTitle, documentTitle],
    })),

  // 이메일을 관리하는 함수
  setEmail: (email) => set(() => ({ email: email })),

  setUserInfo: (name, image) =>
    set(() => ({ userName: name, profileImage: image })),
  resetUserInfo: () =>
    set(() => ({ loginStatus: false, userName: '', profileImage: '' })),
}));

export default useLoginStore;
