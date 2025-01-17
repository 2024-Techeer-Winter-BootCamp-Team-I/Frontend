import React from 'react';
import { useLocation } from 'react-router-dom';

const FrontStep = () => {
  const location = useLocation();

  const getTextForPath = (path) => {
    switch (path) {
      case '/front-package':
        return 'Package Manager';
      case '/front-build':
        return 'Build';
      case '/front-framework':
        return 'Framework';
      case '/front-language':
        return 'Language';
      default:
        return '';
    }
  };

  // 현재 경로에 따라 원의 배경색을 결정하는 함수
  const getCircleBackground = (path) => {
    return location.pathname === path ? 'bg-blue-main' : 'bg-black';
  };

  return (
    <div className="relative mb-10 ml-0 flex h-[130px] w-full items-center justify-center">
      {/* Background line */}
      <div className="absolute left-1/2 top-1/2 h-[5px] w-full -translate-x-1/2 -translate-y-1/2 transform bg-gray-800"></div>

      {/* 첫 번째 원 */}
      <div
        className={`absolute top-1/2 flex h-[70px] w-[70px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/front-package')}`}
        style={{ left: '0%' }}
      >
        <p className="-translate-y-[2px] text-[1.2rem] text-white">1</p>
        {location.pathname === '/front-package' && (
          <p
            className="absolute top-full mt-2 text-[1rem] text-white"
            style={{ left: '0%', transform: 'translateX(0%)' }}
          >
            {getTextForPath('/front-package')}
          </p>
        )}
      </div>

      {/* 두 번째 원 */}
      <div
        className={`absolute top-1/2 flex h-[70px] w-[70px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/front-build')}`}
        style={{ left: '30%' }}
      >
        <p className="-translate-y-[2px] text-[1.2rem] text-white">2</p>
        {location.pathname === '/front-build' && (
          <p
            className="absolute top-full mt-2 text-[1rem] text-white"
            style={{ left: '0%', transform: 'translateX(50%)' }}
          >
            {getTextForPath('/front-build')}
          </p>
        )}
      </div>

      {/* 세 번째 원 */}
      <div
        className={`absolute top-1/2 flex h-[70px] w-[70px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/front-framework')}`}
        style={{ left: '60%' }}
      >
        <p className="-translate-y-[2px] text-[1.2rem] text-white">3</p>
        {location.pathname === '/front-framework' && (
          <p
            className="absolute top-full mt-2 text-[1rem] text-white"
            style={{ left: '0%', transform: 'translateX(-10%)' }}
          >
            {getTextForPath('/front-framework')}
          </p>
        )}
      </div>

      {/* 네 번째 원 */}
      <div
        className={`absolute top-1/2 flex h-[70px] w-[70px] -translate-y-1/2 transform items-center justify-center rounded-full border border-gray-700 ${getCircleBackground('/front-language')}`}
        style={{ left: '90%' }}
      >
        <p className="-translate-y-[2px] text-[1.2rem] text-white">4</p>
        {location.pathname === '/front-language' && (
          <p
            className="absolute top-full mt-2 text-[1rem] text-white"
            style={{ left: '0%', transform: 'translateX(-10%)' }}
          >
            {getTextForPath('/front-language')}
          </p>
        )}
      </div>
    </div>
  );
};

export default FrontStep;
