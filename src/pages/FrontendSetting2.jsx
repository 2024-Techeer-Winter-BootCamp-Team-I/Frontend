import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/chooseBox';
import Frame from '../components/Frame';
import FrontendStepper from '../components/frontendStepper';

import vite from '../assets/image/vite.svg';
import webpack from '../assets/image/webpack.svg';

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
            title="Vite"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={vite}
            description="빠른 개발 서버와 모듈 번들링을 제공하며, 최신 브라우저 기능을 활용해 효율적으로 동작"
          />

          <ChooseBox
            className="min-w-0 flex-1"
            title="WebPack"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={webpack}
            description="다양한 플러그인과 설정으로 유연한 번들링 옵션을 제공하는 강력한 빌드 도구"
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
