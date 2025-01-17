import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import FrontStep from '../components/FrontStep/FrontStep';

import react from '../assets/image/react.svg';
import vue from '../assets/image/vue.svg';
import svelt from '../assets/image/svelt.svg';

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
            {/* React */}
            <ChooseBox
              label="React"
              imageUrl={react}
              isSelected={selectedPosition === 'React'}
              onClick={() => handleChooseBoxClick('React')}
              description={
                'Facebook에서 개발한 UI 라이브러리로, 컴포넌트 기반 아키텍처와 상태 관리가 뛰어나며 대규모 애플리케이션 개발에 적합'
              }
            />
            {/* Vue */}
            <ChooseBox
              label="Vue"
              imageUrl={vue}
              isSelected={selectedPosition === 'Vue'}
              onClick={() => handleChooseBoxClick('Vue')}
              description={
                '사용자 친화적인 문법과 데이터 바인딩을 통해 간단한 프로젝트부터 복잡한 애플리케이션까지 쉽게 개발할 수 있는 프레임워크'
              }
            />
            {/* Svelt */}
            <ChooseBox
              label="Svelt"
              imageUrl={svelt}
              isSelected={selectedPosition === 'Svelt'}
              onClick={() => handleChooseBoxClick('Svelt')}
              description={
                '컴파일 단계에서 DOM 업데이트 코드를 생성하여 빠르고 간결한 개발 경험을 제공하는 차세대 UI 프레임워크'
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
