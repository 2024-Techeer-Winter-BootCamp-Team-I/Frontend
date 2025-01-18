import React from 'react';
import { useLocation } from 'react-router-dom';

const FrontStep = () => {
  const location = useLocation();

  const getTextForPath = (path) => {
    switch (path) {
      case '/frontpackage':
        return 'Package Manager';
      case '/frontbuild':
        return 'Build';
      case '/frontframework':
        return 'Framework';
      case '/frontlanguage':
        return 'Language';
      default:
        return '';
    }
  };

  // 현재 경로에 따라 원의 배경색을 결정하는 함수
  const getCircleBackground = (path) => {
    return location.pathname === path ? 'bg-gray-800' : 'bg-black';
  };

  return (
    <div className="relative mb-5 ml-0 flex h-[130px] w-full items-center justify-center">
      {/* 선과 원들을 그룹으로 묶기 */}
      <div className="absolute left-1/2 top-1/2 h-[5px] w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-gray-800">
        {/* 첫 번째 원 */}
        <div
          className={`absolute top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/frontpackage')}`}
          style={{ left: '0%' }}
        >
          <p className="-translate-y-[2px] text-[1.2rem] text-white">1</p>
          {location.pathname === '/frontpackage' && (
            <p
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '0%', transform: 'translateX(-10%)' }}
            >
              {getTextForPath('/frontpackage')}
            </p>
          )}
        </div>

        {/* 두 번째 원 */}
        <div
          className={`absolute top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/frontbuild')}`}
          style={{ left: '35%' }}
        >
          <p className="-translate-y-[2px] text-[1.2rem] text-white">2</p>
          {location.pathname === '/frontbuild' && (
            <p
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '0%', transform: 'translateX(10%)' }}
            >
              {getTextForPath('/frontbuild')}
            </p>
          )}
        </div>

        {/* 세 번째 원 */}
        <div
          className={`absolute top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/frontframework')}`}
          style={{ left: '65%' }}
        >
          <p className="-translate-y-[2px] text-[1.2rem] text-white">3</p>
          {location.pathname === '/frontframework' && (
            <p
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '0%', transform: 'translateX(-10%)' }}
            >
              {getTextForPath('/frontframework')}
            </p>
          )}
        </div>

        {/* 네 번째 원 */}
        <div
          className={`absolute top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/frontlanguage')}`}
          style={{ left: '100%' }}
        >
          <p className="-translate-y-[2px] text-[1.2rem] text-white">4</p>
          {location.pathname === '/frontlanguage' && (
            <p
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '0%', transform: 'translateX(-10%)' }}
            >
              {getTextForPath('/frontlanguage')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontStep;
