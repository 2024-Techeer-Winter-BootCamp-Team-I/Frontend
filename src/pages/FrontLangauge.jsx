import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import FrontStep from '../components/FrontStep/FrontStep';
import Layout from './Layout';

import javascript from '../assets/image/javascript.svg';
import typescript from '../assets/image/typescript.svg';

import leftArrow from '../assets/image/leftArrow.svg';
import rightArrow from '../assets/image/rightArrow.svg';

const FrontMODIFIED = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoFrontLanguage = () => {
    navigate('/front-language');
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
    } else {
      // 새로운 항목 선택
      setSelectedPosition(position);
    }
  };

  return (
    <Layout>
      <div className="flex h-full w-full flex-col justify-start">
        <div className="w-full">
          <div className="ml-auto mr-auto max-w-2xl px-6">
            <FrontStep />
          </div>
        </div>

        <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
          <div className="mb-0 w-full">
            <div className="mt-6 flex w-full max-w-2xl items-center justify-center gap-8">
              {/* 왼쪽 화살표 */}
              <img
                src={leftArrow}
                alt="Previous"
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate(-1)} // 이전 페이지로 이동
                title="Previous Page"
              />

              {/* JavaScript */}
              <ChooseBox
                label="JavaScript"
                imageUrl={javascript}
                isSelected={selectedPosition === 'JavaScript'}
                onClick={() => handleChooseBoxClick('JavaScript')}
                description={
                  '웹과 서버에서 사용하는 동적 타이핑 기반의 유연한 스크립트 언어'
                }
              />
              {/* TypeScript */}
              <ChooseBox
                label="TypeScript"
                imageUrl={typescript}
                isSelected={selectedPosition === 'TypeScript'}
                onClick={() => handleChooseBoxClick('TypeScript')}
                description={
                  '정적 타이핑과 추가 기능으로 코드 안정성을 강화한 JavaScript의 확장 언어'
                }
              />
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="ml-auto mr-auto h-12 w-12 cursor-pointer"
                onClick={GoFrontLanguage}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontMODIFIED;
