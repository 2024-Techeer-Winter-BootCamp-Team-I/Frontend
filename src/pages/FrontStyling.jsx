import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox';
import Frame from '../components/Frame';
import FrontendStepper from '../components/FrontendStepper';

import styledComponents from '../assets/image/styledComponents.svg';
import tailwindcss from '../assets/image/tailwindcss.svg';

const FrontendSetting1 = () => {
  const navigate = useNavigate();

  const handleSettingButtonClick = () => {
    navigate('/next-page');
  };

  return (
    <div className="relative flex min-h-screen w-full justify-end bg-black-background">
      <div className="mt-0 flex w-full flex-1 flex-col justify-center p-8 pt-0">
        <Frame className="m-0 mb-auto h-full w-full p-0 pb-0" />

        {/* FrontSettingStep을 컨테이너 내부에 배치 */}
        <div className="mb-auto ml-auto mt-auto flex w-3/4 items-center justify-center">
          <FrontendStepper />
        </div>

        {/* ChooseBox를 일렬로 배열 */}
        <div className="ml-96 mr-60 flex w-full max-w-2xl justify-center gap-8">
          <ChooseBox
            className="min-w-0 flex-1"
            title="TailwindCSS"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={tailwindcss}
            description="클래스 기반 유틸리티 스타일을 통해 빠르게 반응형 웹을 개발할 수 있는 CSS 프레임워크"
          />

          <ChooseBox
            className="min-w-0 flex-1 whitespace-pre-line"
            title={'Styled - Components'}
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={styledComponents}
            description="CSS-in-JS 방식으로 컴포넌트와 스타일을 결합하여 유지보수와 코드 재사용성을 높이는 css 라이브러리"
          />
        </div>

        {/* 설정하기 버튼 */}
        <div className="ml-auto mt-auto flex w-full max-w-2xl justify-end">
          <SettingButton
            text="완료"
            onClick={handleSettingButtonClick}
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

export default FrontendSetting1;
