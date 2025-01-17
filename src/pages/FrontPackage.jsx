import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import FrontStep from '../components/FrontStep/FrontStep';

import npm from '../assets/image/npm.svg';
import yarn from '../assets/image/yarn.svg';
import pnpm from '../assets/image/pnpm.svg';

const FrontPackage = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoFrontBuild = () => {
    navigate('/front-build');
  };

  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      setSelectedPosition(null);
    } else {
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

      <div className="ml-auto mr-auto flex h-full max-w-2xl flex-col items-center justify-center rounded-lg p-6">
        <div className="mb-0 w-full">
          <div className="mt-6 flex w-full justify-center gap-8">
            <ChooseBox
              label="npm"
              imageUrl={npm}
              isSelected={selectedPosition === 'npm'}
              onClick={() => handleChooseBoxClick('npm')}
              description={
                'Node.js와 함께 기본으로 제공되며, 가장 널리 사용되는 패키지 매니저'
              }
            />

            <ChooseBox
              label="yarn"
              imageUrl={yarn}
              isSelected={selectedPosition === 'yarn'}
              onClick={() => handleChooseBoxClick('yarn')}
              description={
                '빠른 속도와 효율적인 캐싱으로 성능을 개선한 Facebook에서 개발한 패키지 매니저'
              }
            />

            <ChooseBox
              label="pnpm"
              imageUrl={pnpm}
              isSelected={selectedPosition === 'pnpm'}
              onClick={() => handleChooseBoxClick('pnpm')}
              description={
                '디스크 공간을 절약하고 빠른 설치를 제공하며 모노레포 프로젝트에 최적화된 패키지 매니저'
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full py-6">
        <div className="ml-auto mr-auto mt-auto flex w-full max-w-2xl justify-end pt-10">
          <SettingButton text="다음" onClick={GoFrontBuild} />
        </div>
      </div>
    </div>
  );
};

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

export default FrontPackage;
