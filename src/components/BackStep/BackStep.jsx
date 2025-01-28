import React from 'react';
import { useLocation } from 'react-router-dom';

const BackStep = () => {
  const location = useLocation();

  const paths = ['/backframework', '/backdatabase'];

  // 현재 경로에 따라 텍스트 반환
  const getTextForPath = (path) => {
    switch (path) {
      case '/backframework':
        return 'Framework';
      case '/backdatabase':
        return 'Database';
      default:
        return '';
    }
  };

  // 현재 경로와 이전 경로들에 따라 색상 반환
  const getCircleBackground = (path) => {
    const currentIndex = paths.indexOf(location.pathname);
    const targetIndex = paths.indexOf(path);

    return targetIndex <= currentIndex ? 'bg-[#1488FC] border-[#1488FC]' : 'bg-black border-gray-700';
  };

  const getLineColor = (index) => {
    const currentIndex = paths.indexOf(location.pathname);

    return index < currentIndex ? 'border-[#1488FC]' : 'border-[#cecece]';
  };

  return (
    <div className="relative mb-5 flex h-[130px] w-full items-center justify-center">
      <div className="relative flex items-center" style={{ width: '23rem' }}>
        {paths.map((path, index) => (
          <React.Fragment key={path}>
            {/* 원 */}
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${getCircleBackground(
                path
              )}`}
            >
              {/* 숫자 */}
              <p className="text-white">{index + 1}</p>
            </div>

            {/* 텍스트 */}
            {location.pathname === path && (
              <p
                className="absolute top-[3rem] text-center text-[0.9rem] text-white"
                style={{
                  left: `calc(${(index * 100) / (paths.length - 1)}% - ${index === 0 ? '1rem' : '2.8rem'})`, // 각 원에 따라 다른 left 값 적용
                }}
              >
                {getTextForPath(path)}
              </p>
            )}

            {/* 점선 (마지막 원 뒤에는 점선 추가 X) */}
            {index < paths.length - 1 && (
              <div
                className={`h-[2px] w-[20rem] border-t border-dashed ${getLineColor(index)}`}
                style={{
                  marginLeft: '-4px',
                  marginRight: '-4px', // 점선과 원이 붙도록 마진 제거
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BackStep;