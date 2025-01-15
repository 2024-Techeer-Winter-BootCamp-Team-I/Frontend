import React, { useState } from 'react'; // useState 추가
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox';
import Frame from '../components/Frame';
import FrontendStepper from '../components/FrontendStepper';

import npm from '../assets/image/npm.svg';
import yarn from '../assets/image/yarn.svg';
import pnpm from '../assets/image/pnpm.svg';

const FrontPackage = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // selectedBox 상태 추가

  const GoFrontBuild = () => {
    console.log('Navigating to /frontbuild');
    navigate('/frontbuild');
  };

  // ChooseBox 클릭 시 선택 상태 업데이트
  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  return (
    <div className="relative flex min-h-screen w-full justify-end bg-black-background">
      <div className="mt-0 flex w-full flex-1 flex-col justify-center p-8 pt-0">
        <Frame className="m-0 mb-auto h-full w-full p-0 pb-0" />

        {/* FrontSettingStep을 컨테이너 내부에 배치 */}
        <div className="mb-auto ml-auto mt-auto flex w-3/4 items-center justify-center">
          <FrontendStepper currentPage={0} />
        </div>

        {/* ChooseBox를 일렬로 배열 */}
        <div className="ml-96 mr-60 flex w-full max-w-2xl justify-center gap-8">
          <ChooseBox
            className="min-w-0 flex-1"
            title="npm"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={npm}
            isSelected={selectedBox === 'npm'} // 선택 상태 전달
            onClick={() => handleBoxClick('npm')} // 클릭 핸들러 전달
            description="Node.js와 함께 기본으로 제공되며, 가장 널리 사용되는 패키지 매니저"
          />

          <ChooseBox
            className="min-w-0 flex-1"
            title="yarn"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={yarn}
            isSelected={selectedBox === 'yarn'} // 선택 상태 전달
            onClick={() => handleBoxClick('yarn')} // 클릭 핸들러 전달
            description="빠른 속도와 효율적인 캐싱으로 성능을 개선한 Facebook에서 개발한 패키지 매니저"
          />

          <ChooseBox
            className="min-w-0 flex-1"
            title="pnpm"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={pnpm}
            isSelected={selectedBox === 'pnpm'} // 선택 상태 전달
            onClick={() => handleBoxClick('pnpm')} // 클릭 핸들러 전달
            description="디스크 공간을 절약하고 빠른 설치를 제공하며 모노레포 프로젝트에 최적화된 패키지 매니저"
          />
        </div>

        {/* 설정하기 버튼 */}
        <div className="ml-auto mt-auto flex w-full max-w-2xl justify-end">
          <SettingButton
            text="완료"
            onClick={GoFrontBuild}
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

export default FrontPackage;
