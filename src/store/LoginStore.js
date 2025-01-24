import { create } from 'zustand';

// 로그인 상태 관리 Store
const useLoginStore = create((set) => ({
  loginStatus: false,
  userName: '',
  userEmail: '', // userName 대신 userEmail 사용
  profileImage: '',

  setLoginStatus: (status) => set(() => ({ loginStatus: status })),
  setUserInfo: (name, image,) =>
    set(() => ({ userName: name, profileImage: image })),
  resetUserInfo: () =>
    set(() => ({ loginStatus: false, userName: '', profileImage: '' })),
}));

export default useLoginStore;
