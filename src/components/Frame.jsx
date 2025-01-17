import React, { useState } from "react";
import GithubIcon from "../assets/image/github.svg"; // GitHub 아이콘
import LeftBarIcon from "../assets/image/leftbar.svg"; // LeftBar 아이콘
import RouteTab from "./RouteTabs"; // RouteTab 컴포넌트 import
import LoginModal from "./LoginModal"; // LoginModal 컴포넌트 import

const Frame = ({ children }) => {
  const [isRouteTabVisible, setIsRouteTabVisible] = useState(false); // RouteTab 표시 상태
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false); // LoginModal 표시 상태

  return (
    <div className="flex flex-col h-screen w-full bg-[#000000] font-sfpro">
      {/* 상단 Navbar */}
      <nav className="flex justify-between items-center p-6">
        {/* DevSketch 로고 */}
        <div className="text-[1.5rem] text-[#FFFFFF] font-medium">DevSketch</div> {/* 40px -> 2.5rem */}
        {/* 로그인 버튼 */}
        <div
          className="text-[1rem] text-[#FFFFFF] font-medium cursor-pointer"
          onClick={() => setIsLoginModalVisible(true)} // 로그인 버튼 클릭 시 모달 표시
        >
          로그인
        </div>
      </nav>

      {/* 중간에 Layout 컴포넌트 렌더링 */}
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>

      {/* 왼쪽 하단 아이콘들 및 RouteTab */}
      <div
        className="flex flex-col justify-end items-start p-6 space-y-4 relative"
        onMouseEnter={() => setIsRouteTabVisible(true)} // 마우스 호버 시 RouteTab 표시
        onMouseLeave={() => setIsRouteTabVisible(false)} // 마우스 떠날 때 RouteTab 숨김
      >
        <img src={GithubIcon} alt="GitHub" className="w-[2.5rem] h-[2.5rem]" /> {/* GitHub 아이콘 */}
        <img src={LeftBarIcon} alt="LeftBar" className="w-[2.5rem] h-[2.5rem] cursor-pointer" /> {/* LeftBar 아이콘 */}

        {/* RouteTab 조건부 렌더링 */}
        {isRouteTabVisible && (
          <div className="absolute left-0 bottom-0 z-50"> {/* z-index 추가 및 위치 조정 */}
            <RouteTab />
          </div>
        )}
      </div>

      {/* LoginModal 조건부 렌더링 */}
      {isLoginModalVisible && (
        <LoginModal onClose={() => setIsLoginModalVisible(false)} /> // 모달 닫기 함수 전달
      )}
    </div>
  );
};

export default Frame;