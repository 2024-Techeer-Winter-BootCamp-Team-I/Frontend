import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox';

import Frame from '../components/Frame';

import FrontendStepper from '../components/FrontendStepper';

import greenSnake from '../assets/image/greenSnake.svg';

import react from '../assets/image/react.svg';
import vue from '../assets/image/vue.svg';
import svelt from '../assets/image/svelt.svg';

const FrontFramework = () => {
  const navigate = useNavigate();

  const GoLanguage = () => {
    navigate('/frontlanguage');
  };

  return (
    <div className="relative flex min-h-screen w-full justify-end bg-black-background">
      <div className="mt-0 flex w-full flex-1 flex-col justify-center p-8 pt-0">
        <Frame className="m-0 mb-auto h-full w-full p-0 pb-0" />

        {/* Step 컨테이너 */}

        {/* FrontSettingStep을 컨테이너 내부에 배치 */}
        <div className="mb-auto ml-auto mt-auto flex w-3/4 items-center justify-center">
          <FrontendStepper />
        </div>

        {/* ChooseBox를 일렬로 배열 */}
        <div className="ml-96 mr-60 flex w-full max-w-2xl justify-center gap-8">
          <ChooseBox
            className="min-w-0 flex-1"
            title="React"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={react}
            description="Facebook에서 개발한 UI 라이브러리로, 컴포넌트 기반 아키텍처와 상태 관리가 뛰어나며 대규모 애플리케이션 개발에 적합"
          />

          <ChooseBox
            className="min-w-0 flex-1"
            title="Vue"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={vue}
            description="사용자 친화적인 문법과 데이터 바인딩을 통해 간단한 프로젝트부터 복잡한 애플리케이션까지 쉽게 개발할 수 있는 프레임워크"
          />

          <ChooseBox
            className="min-w-0 flex-1"
            title="Svelt"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={svelt}
            description="컴파일 단계에서 DOM 업데이트 코드를 생성하여 빠르고 간결한 개발 경험을 제공하는 차세대 UI 프레임워크"
          />
        </div>

        {/* 설정하기 버튼 */}
        <div className="ml-auto mt-auto flex w-full max-w-2xl justify-end">
          <SettingButton
            text="완료"
            onClick={GoLanguage}
            className="justify-end"
          />
        </div>
      </div>
    </div>
  );
};

// 버튼 컴포넌트
const SettingButton = ({ text, onClick }) => {
  return (
    <button
      className="ml-auto h-[3rem] w-[10rem] rounded-[1rem] bg-blue-main text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FrontFramework;
