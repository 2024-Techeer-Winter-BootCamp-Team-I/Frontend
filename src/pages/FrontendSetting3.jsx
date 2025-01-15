import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/chooseBox';
import Frame from '../components/Frame';
import FrontendStepper from '../components/frontendStepper';

import npm from '../assets/image/npm.svg';
import yarn from '../assets/image/yarn.svg';
import pnpm from '../assets/image/pnpm.svg';

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

            title="npm"

            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={npm}
            description="Node.js와 함께 기본으로 제공되며, 가장 널리 사용되는 패키지 매니저"
          />

          <ChooseBox
            className="min-w-0 flex-1"

            title="yarn"

            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={yarn}
            description="빠른 속도와 효율적인 캐싱으로 성능을 개선한 Facebook에서 개발한 패키지 매니저"
          />

          <ChooseBox
            className="min-w-0 flex-1"

            title="pnpm"

            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={pnpm}
            description="디스크 공간을 절약하고 빠른 설치를 제공하며 모노레포 프로젝트에 최적화된 패키지 매니저"
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
