import React, { useState } from 'react'; // useState 추가
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox';
import Frame from '../components/Frame';
import FrontendStepper from '../components/FrontendStepper';

import javascript from '../assets/image/javascript.svg';
import typescript from '../assets/image/typescript.svg';

const FrontendSetting1 = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null); // selectedBox 상태 추가

  // 이후 경로 수정 예정
  const handleSettingButtonClick = () => {
    navigate('/next-page');
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
          <FrontendStepper />
        </div>

        {/* ChooseBox를 일렬로 배열 */}
        <div className="ml-96 mr-60 flex w-full max-w-2xl justify-center gap-8">
          <ChooseBox
            className="min-w-0 flex-1"
            title="Javascript"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={javascript}
            isSelected={selectedBox === 'Javascript'} // 선택 상태 전달
            onClick={() => handleBoxClick('Javascript')} // 클릭 핸들러 전달
            description="웹과 서버에서 사용하는 동적 타이핑 기반의 유연한 스크립트 언어"
          />

          <ChooseBox
            className="min-w-0 flex-1 whitespace-pre-line"
            title="Typescript"
            color="border-green-main"
            backColor="bg-black-background"
            imageUrl={typescript}
            isSelected={selectedBox === 'Typescript'} // 선택 상태 전달
            onClick={() => handleBoxClick('Typescript')} // 클릭 핸들러 전달
            description="정적 타이핑과 추가 기능으로 코드 안정성을 강화한 JavaScript의 확장 언어"
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
