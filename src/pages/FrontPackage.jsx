import Layout from '../components/Layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';
import FrontendStepper from '../components/FrontendStepper';
import npm from '../assets/image/npm.svg';
import yarn from '../assets/image/yarn.svg';
import pnpm from '../assets/image/pnpm.svg';

const InputPage = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const GoFrontBuild = () => {
    console.log('Navigating to /frontbuild');
    navigate('/frontbuild');
  };

  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  return (
    <Layout>
      <div className="flex h-full flex-col justify-start p-5">
        {/* 그리드 레이아웃 */}
        <div className="mx-auto grid w-full grid-cols-[250px_auto] gap-8">
          {/* 왼쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-center">
            {/* 왼쪽 컨테이너에 추가할 내용이 있다면 여기에 배치 */}
          </div>

          {/* 오른쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-start rounded-lg p-6">
            <div className="mb-8 w-full">
              <FrontendStepper currentPage={0} />
            </div>

            <div className="flex w-full max-w-2xl justify-center gap-8">
              <ChooseBox
                className="min-w-0 flex-1"
                title="npm"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={npm}
                isSelected={selectedBox === 'npm'}
                onClick={() => handleBoxClick('npm')}
                description="Node.js와 함께 기본으로 제공되며, 가장 널리 사용되는 패키지 매니저"
              />

              <ChooseBox
                className="min-w-0 flex-1"
                title="yarn"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={yarn}
                isSelected={selectedBox === 'yarn'}
                onClick={() => handleBoxClick('yarn')}
                description="빠른 속도와 효율적인 캐싱으로 성능을 개선한 Facebook에서 개발한 패키지 매니저"
              />

              <ChooseBox
                className="min-w-0 flex-1"
                title="pnpm"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={pnpm}
                isSelected={selectedBox === 'pnpm'}
                onClick={() => handleBoxClick('pnpm')}
                description="디스크 공간을 절약하고 빠른 설치를 제공하며 모노레포 프로젝트에 최적화된 패키지 매니저"
              />
            </div>

            <div className="mt-8 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="완료"
                onClick={GoFrontBuild}
                className="justify-end"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// 버튼 컴포넌트
const SettingButton = ({ text, onClick }) => {
  return (
    <button
      className="h-[3rem] w-[10rem] rounded-[1rem] bg-blue-main text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default InputPage;
