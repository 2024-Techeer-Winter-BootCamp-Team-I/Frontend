import React from 'react';
import { useLocation } from 'react-router-dom';

const BackStep = () => {
  const location = useLocation();

  const getTextForPath = (path) => {
    switch (path) {
      case '/back-framework':
        return 'Framework';
      case '/back-database':
        return 'Database';
      default:
        return '';
    }
  };

  // 현재 경로에 따라 원의 배경색을 결정하는 함수
  const getCircleBackground = (path) => {
    return location.pathname === path ? 'bg-blue-main' : 'bg-black';
  };

  return (
    <div className="relative flex h-[130px] w-full items-center justify-center">
      {/* Background line */}
      <div className="absolute left-1/2 top-1/2 h-[5px] w-[80%] -translate-x-1/2 -translate-y-1/2 transform bg-gray-800"></div>

      {/* 첫 번째 원 */}
      <div
        className={`absolute top-1/2 flex h-[70px] w-[70px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/back-framework')}`}
        style={{ left: '10%' }}
      >
        <p className="-translate-y-[2px] text-[1.2rem] text-white">1</p>
        {location.pathname === '/back-framework' && (
          <p
            className="absolute top-full mt-2 text-[1rem] text-white"
            style={{ left: '0%', transform: 'translateX(0%)' }}
          >
            {getTextForPath('/back-framework')}
          </p>
        )}
      </div>

      {/* 두 번째 원 */}
      <div
        className={`absolute top-1/2 flex h-[70px] w-[70px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/back-database')}`}
        style={{ left: '90%' }}
      >
        <p className="-translate-y-[2px] text-[1.2rem] text-white">2</p>
        {location.pathname === '/back-database' && (
          <p
            className="absolute top-full mt-2 text-[1rem] text-white"
            style={{ left: '0%', transform: 'translateX(0%)' }}
          >
            {getTextForPath('/back-database')}
          </p>
        )}
      </div>
    </div>
  );
};

export default BackStep;
