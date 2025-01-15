import React from 'react';
import { useLocation } from 'react-router-dom';
import greenSnake from '../assets/image/greenSnake.svg';

const FrontendStepper = () => {
  const location = useLocation();

  const getTextForPath = (path) => {
    switch (path) {
      case '/frontpackage':
        return 'Package';
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

  return (
    <div className="flex h-10 w-full items-center justify-between px-4">
      {/* Start */}
      <div className="ml-4 flex items-center">
        <div className="relative ml-4 flex items-center">
          <span className="absolute -left-10 top-1/2 -translate-y-1/2 transform text-[1rem] text-blue-main">
            Start
          </span>
        </div>
      </div>

      {/* 점선 (부모 컨테이너 역할) */}
      <div className="relative mx-4 flex flex-1 items-center">
        {/* 점선 */}
        <div className="h-1 w-full border-t-2 border-dashed border-green-main"></div>

        {/* 중간 점 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '0%' }}
        >
          <div className="h-4 w-4 rounded-full bg-blue-main"></div>
        </div>

        {/* 첫 번째 단계 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '20%' }}
        >
          {/* 큰 원 */}
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          {/* 중간 점 */}
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
          {/* 그림 */}
          {location.pathname === '/frontpackage' && (
            <img
              src={greenSnake}
              alt="greenSnake"
              className="absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 transform"
            />
          )}
          {/* 텍스트 */}
          {location.pathname === '/frontpackage' && (
            <span
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
              {getTextForPath('/frontpackage')}
            </span>
          )}
        </div>

        {/* 두 번째 단계*/}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '40%' }}
        >
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
          {/* 그림 */}
          {location.pathname === '/frontbuild' && (
            <img
              src={greenSnake}
              alt="greenSnake"
              className="absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 transform"
            />
          )}
          {/* 텍스트 */}
          {location.pathname === '/frontbuild' && (
            <span
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
              {getTextForPath('/frontbuild')}
            </span>
          )}
        </div>

        {/* 세 번째 단계 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '60%' }}
        >
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
          {/* 그림 */}
          {location.pathname === '/frontframework' && (
            <img
              src={greenSnake}
              alt="greenSnake"
              className="absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 transform"
            />
          )}
          {/* 텍스트 */}
          {location.pathname === '/frontframework' && (
            <span
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
              {getTextForPath('/frontframework')}
            </span>
          )}
        </div>

        {/* 네 번째 단계 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ left: '80%' }}
        >
          <div className="absolute -inset-1 rounded-full bg-green-main opacity-50"></div>
          <div className="h-4 w-4 rounded-full bg-green-main"></div>
          {/* 그림 */}
          {location.pathname === '/frontlanguage' && (
            <img
              src={greenSnake}
              alt="greenSnake"
              className="absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 transform"
            />
          )}
          {/* 텍스트 */}
          {location.pathname === '/frontlanguage' && (
            <span
              className="absolute top-full mt-2 text-[1rem] text-white"
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
              {getTextForPath('/frontlanguage')}
            </span>
          )}
        </div>

        {/* 화살표 */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transform"
          style={{ right: '0%' }}
        >
          <div className="h-4 w-4 rotate-45 transform border-r-2 border-t-2 border-green-main"></div>
        </div>
      </div>

      {/* End (점선 컨테이너 외부) */}
      <div className="ml-0 flex items-center">
        <span className="text-[1rem] text-green-main">End</span>
      </div>
    </div>
  );
};

export default FrontendStepper;
