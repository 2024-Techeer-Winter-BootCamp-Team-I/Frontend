import { useState } from 'react';
import Background from '../components/Background';
import Navbar from '../components/Navbar/Navbar';
import Leftbar from '../components/LeftBar'; // Leftbar 컴포넌트 추가

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [isLeftbarVisible, setIsLeftbarVisible] = useState(false); // Leftbar의 표시 여부 상태 관리

  return (
    <Background>
      {/* Navbar */}
      <Navbar />

      {/* Leftbar는 화면 왼쪽에 고정되며, 마우스를 호버했을 때 오른쪽으로 슬라이드 */}
      <div
        className="fixed left-0 top-0 z-20 h-screen w-[2rem] bg-transparent transition-all duration-300 ease-in-out hover:w-[15rem]"
        onMouseEnter={() => setIsLeftbarVisible(true)} // 마우스 호버 시 Leftbar 표시
        onMouseLeave={() => setIsLeftbarVisible(false)} // 마우스 떠날 때 Leftbar 숨김
      >
        {/* Leftbar 조건부 렌더링 */}
        {isLeftbarVisible && <Leftbar />}
      </div>

      {/* 자식 컴포넌트들 */}
      <div className="relative z-10 mt-16 min-h-screen">{children}</div>
    </Background>
  );
};

export default Layout;
