import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import useLoginStore from '../../store/LoginStore';
import { getUserDetails, postLogout } from '../../api/auth';

const Navbar = () => {
  const navigate = useNavigate();
  const {
    loginStatus,
    userName,
    profileImage,
    setLoginStatus,
    setUserInfo,
    resetUserInfo,
  } = useLoginStore();

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  // 사용자 인증 상태 확인
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        setLoginStatus(true);
        setUserInfo(userDetails.userName, userDetails.profileImage);
      } catch (error) {
        console.error('사용자 정보 로드 실패:', error);
        setLoginStatus(false);
      }
    };

    fetchUserDetails();
  }, [setLoginStatus, setUserInfo]);

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      await postLogout();
      resetUserInfo();
      navigate('/'); // 로그아웃 후 메인 페이지로 이동
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  // 로그인 모달 열기/닫기
  const toggleLoginModal = () => {
    setIsLoginModalVisible((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-6">
      {/* 로고 */}
      <div
        className="cursor-pointer bg-gradient-to-r from-[#FFFFFF] via-[#9BB6CC] to-[#01457E] bg-clip-text text-[2rem] font-bold text-transparent"
        onClick={() => navigate('/')}
      >
        DevSketch
      </div>

      {/* 사용자 상태 */}
      <div className="flex items-center">
        {loginStatus ? (
          <>
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="mr-2 h-10 w-10 cursor-pointer rounded-full"
                onClick={() => navigate('/mypage')}
              />
            )}
            {userName && (
              <span
                className="mr-4 cursor-pointer text-sm text-white"
                onClick={() => navigate('/mypage')}
              >
                {userName}
              </span>
            )}
            <button
              className="rounded bg-[#3C2221] px-4 py-2 text-[#D0524C] hover:bg-red-600"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        ) : (
          <button
            className="rounded w-[6rem] h-[2.3rem] bg-[#135CA4] px-4 py-2 text-white hover:bg-[#113C67]"
            onClick={toggleLoginModal}
          >
            Log in
          </button>
        )}
      </div>

      {/* 로그인 모달 */}
      {isLoginModalVisible && (
        <LoginModal onClose={() => setIsLoginModalVisible(false)} />
      )}
    </nav>
  );
};

export default Navbar;
