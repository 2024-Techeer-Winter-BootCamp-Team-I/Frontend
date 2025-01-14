import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/chooseBox';
import Navbar from '../components/Navbar';

import FrontendStepper from '../components/frontendStepper';
import greenSnake from '../assets/image/greenSnake.svg';

import react from '../assets/image/react.svg';
import vue from '../assets/image/vue.svg';
import svelt from '../assets/image/svelt.svg';

const FrontendSetting1 = () => {
  const navigate = useNavigate();

  const handleSettingButtonClick = () => {
    navigate('/next-page');
  };

  return (
    <div className="flex min-h-screen bg-black-background">
      <div className="flex flex-1 flex-col justify-center p-8">
        <Navbar />

        {/* Step 컨테이너 */}
        <div className="relative mb-8 w-full max-w-2xl">
          {/* greenSnake을 FrontSettingStep의 컨테이너로 구성 */}
          <div className="relative">
            <img
              src={greenSnake}
              alt="Green Snake"
              className="absolute left-1/2 top-0 h-16 w-16 -translate-x-1/2"
            />
            {/* FrontSettingStep을 컨테이너 내부에 배치 */}
            <div className="mt-12 flex items-center justify-center">
              <FrontendStepper />
            </div>
          </div>
        </div>

        {/* ChooseBox를 일렬로 배열 */}
        <div className="mt-4 flex w-full max-w-2xl justify-between">
          <div className="ml-10">
            <ChooseBox
              title="React"
              color="border-green-main"
              backColor="bg-black-background"
              imageUrl={react}
              description="Facebook에서 개발한 UI 라이브러리로, 컴포넌트 기반 아키텍처와 상태 관리가 뛰어나며 대규모 애플리케이션 개발에 적합"
            />
          </div>
          <div className="ml-10">
            <ChooseBox
              title="Vue"
              color="border-green-main"
              backColor="bg-black-background"
              imageUrl={vue}
              description="사용자 친화적인 문법과 데이터 바인딩을 통해 간단한 프로젝트부터 복잡한 애플리케이션까지 쉽게 개발할 수 있는 프레임워크"
            />
          </div>
          <div className="ml-10">
            <ChooseBox
              title="Svelt"
              color="border-green-main"
              backColor="bg-black-background"
              imageUrl={svelt}
              description="컴파일 단계에서 DOM 업데이트 코드를 생성하여 빠르고 간결한 개발 경험을 제공하는 차세대 UI 프레임워크"
            />
          </div>
        </div>

        {/* 설정하기 버튼 */}
        <div className="mt-8 flex w-full max-w-2xl justify-end">
          <SettingButton text="완료" onClick={handleSettingButtonClick} />
        </div>
      </div>
    </div>
  );
};

// 버튼 컴포넌트
const SettingButton = ({ text, onClick }) => {
  return (
    <button
      className="h-[3rem] w-[10rem] rounded-[0.7rem] bg-blue-main text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FrontendSetting1;
