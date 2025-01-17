import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import FrontStep from '../components/FrontStep/FrontStep';

import javascript from '../assets/image/javascript.svg';
import typescript from '../assets/image/typescript.svg';

const FrontFramework = () => {
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
    <div className="flex h-full w-full flex-col justify-start bg-black">
      <div className="w-full py-6">
        <div className="ml-auto mr-auto max-w-2xl px-6">
          <FrontStep />
        </div>
      </div>

      <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
        <div className="mb-0 w-full">
          <div className="mt-6 flex w-full max-w-2xl justify-center gap-8">
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
          </div>
        </div>
      </div>

      {/* 버튼을 독립적으로 분리 */}
      <div className="w-full py-6">
        <div className="ml-auto mr-auto mt-auto flex w-full max-w-2xl justify-end pt-10">
          <SettingButton text="다음" onClick={GoFrontLanguage} />
        </div>
      </div>
    </div>
  );
};

// 버튼 컴포넌트
const SettingButton = ({ text, onClick }) => {
  return (
    <button
      className="h-[3rem] w-[10rem] rounded-[0.7rem] bg-[#1488FC] text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FrontFramework;
