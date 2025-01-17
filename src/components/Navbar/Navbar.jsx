import { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';

const Navbar = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false); // LoginModal 표시 상태

  // 로그인 버튼 클릭 시 모달 토글
  const handleLoginClick = () => {
    setIsLoginModalVisible((prevState) => !prevState); // 현재 상태의 반대로 설정
  };

  return (
    <nav className="flex items-center justify-between p-6">
      {/* DevSketch 로고 */}
      <div className="bg-gradient-to-r from-[#FFFFFF] via-[#9BB6CC] to-[#01457E] bg-clip-text text-[2rem] font-bold text-transparent">
        DevSketch
      </div>
      <div
        className="cursor-pointer text-[1rem] font-medium text-[#FFFFFF]"
        onClick={handleLoginClick} // 로그인 버튼 클릭 시 모달 토글
      >
        로그인
      </div>
      {/* LoginModal 조건부 렌더링 */}
      {isLoginModalVisible && (
        <LoginModal onClose={() => setIsLoginModalVisible(false)} /> // 모달 닫기 함수 전달
      )}
    </nav>
  );
};

export default Navbar;
