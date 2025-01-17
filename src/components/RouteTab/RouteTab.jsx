import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가

const RouteTab = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로를 가져오기

  // 현재 경로에 따라 활성화 상태 결정
  const isActive = (path) => location.pathname === `/${path}`;

  const tabStyle =
    "w-[9rem] h-[2rem] bg-[#0A0A0A] text-white font-bold text-[0.8rem] rounded-[0.3rem] cursor-pointer block z-30";
  const activeStyle = "bg-[#1488FC]";

  return (
    <div className="absolute right-[5rem] top-[5rem] z-[100]">
      <button
        className={`${tabStyle} ${isActive('api') ? activeStyle : ''}`}
        onClick={() => navigate('/api')}
      >
        API
      </button>
      <button
        className={`${tabStyle} ${isActive('erd') ? activeStyle : ''}`}
        onClick={() => navigate('/erd')}
      >
        ERD
      </button>
      <button
        className={`${tabStyle} ${isActive('diagram') ? activeStyle : ''}`}
        onClick={() => navigate('/diagram')}
      >
        DIAGRAM
      </button>
    </div>
  );
};

export default RouteTab;
