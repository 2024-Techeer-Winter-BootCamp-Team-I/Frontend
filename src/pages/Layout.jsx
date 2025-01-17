import { useState } from 'react';
import Background from '../components/Background';
import Navbar from '../components/Navbar/Navbar';
import Leftbar from '../components/LeftBar'; // Leftbar 컴포넌트 추가

const Layout = ({ children }) => {
  const [isLeftbarVisible, setIsLeftbarVisible] = useState(false); // Leftbar의 표시 여부 상태 관리

  return (
    <Background>
      {/* Navbar */}
      <Navbar />

      {/* Leftbar는 화면 왼쪽에 고정되며, 마우스를 호버했을 때 오른쪽으로 슬라이드 */}
      <div
        className={`fixed top-0 z-20 h-screen transition-all duration-300 ease-in-out ${
          isLeftbarVisible ? 'w-[15rem] translate-x-0' : 'w-[2rem] -translate-x-[13rem] opacity-0'
        }`}
        onMouseEnter={() => setIsLeftbarVisible(true)} // 마우스 호버 시 Leftbar 표시
        onMouseLeave={() => setIsLeftbarVisible(false)} // 마우스 떠날 때 Leftbar 숨김
      >
        <div className="h-full transition-transform duration-300 ease-in-out">
          <Leftbar /> {/* Leftbar 항상 렌더링 */}
        </div>
      </div>

      {/* 자식 컴포넌트들 */}
      <div className="relative z-10 mt-16">{children}</div>
    </Background>
  );
};

export default Layout;
