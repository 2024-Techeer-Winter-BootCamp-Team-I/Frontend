import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';
import FrontendStepper from '../components/FrontendStepper';
import javascript from '../assets/image/javascript.svg';
import typescript from '../assets/image/typescript.svg';
import Layout from '../components/Layout';

const FrontLanguage = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleSettingButtonClick = () => {
    navigate('/next-page');
  };

  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  return (
    <Layout>
      <div className="flex h-full flex-col justify-start p-5">
        {/* 그리드 레이아웃 */}
        <div className="mx-auto grid w-full grid-cols-[250px_1fr] gap-8">
          {/* 왼쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-center rounded-lg p-4">
            {/* 왼쪽 컨테이너에 추가할 내용이 있다면 여기에 배치 */}
          </div>

          {/* 오른쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-start rounded-lg p-6">
            <div className="mb-8 w-full">
              <FrontendStepper currentPage={3} />
            </div>

            <div className="flex w-full max-w-2xl flex-wrap justify-center gap-8">
              <ChooseBox
                className="min-w-0 flex-1"
                title="Javascript"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={javascript}
                isSelected={selectedBox === 'Javascript'}
                onClick={() => handleBoxClick('Javascript')}
                description="웹과 서버에서 사용하는 동적 타이핑 기반의 유연한 스크립트 언어"
              />

              <ChooseBox
                className="min-w-0 flex-1 whitespace-pre-line"
                title="Typescript"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={typescript}
                isSelected={selectedBox === 'Typescript'}
                onClick={() => handleBoxClick('Typescript')}
                description="정적 타이핑과 추가 기능으로 코드 안정성을 강화한 JavaScript의 확장 언어"
              />
            </div>

            <div className="mt-8 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="완료"
                onClick={handleSettingButtonClick}
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

export default FrontLanguage;
