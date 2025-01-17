import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox/ChooseBox';

import front from '../assets/image/front.svg';
import back from '../assets/image/back.svg';

const SettingPage = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  // 세팅 페이지로 이동하는 함수
  const GoSetting = () => {
    if (selectedPosition === 'Frontend') {
      navigate('/front-package'); // 프론트엔드 선택 시 이동
    } else if (selectedPosition === 'Backend') {
      navigate('/back-framework'); // 백엔드 선택 시 이동
    } else {
      alert('프론트엔드 또는 백엔드를 선택해주세요.'); // 선택되지 않은 경우 경고
    }
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
    } else {
      // 새로운 항목 선택
      setSelectedPosition(position);
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-start bg-black">
      {/* 오른쪽 컨테이너 */}
      <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
        <div className="mb-0 w-full">
          <p className="font-sans text-lg text-white">프로젝트 입력창</p>
          <input
            className="flex h-12 w-full items-center justify-center rounded-sm bg-gray-800 bg-opacity-50 text-white"
            placeholder="Ex. DevSketch"
          />

          <p className="mt-10 font-sans text-lg text-white">
            프로젝트 세팅할 포지션(중복불가)
          </p>

          <div className="mt-6 flex w-full max-w-2xl justify-center gap-8">
            {/* 프론트엔드 선택 박스 */}
            <ChooseBox
              label="Frontend"
              imageUrl={front}
              isSelected={selectedPosition === 'Frontend'}
              onClick={() => handleChooseBoxClick('Frontend')}
            />

            {/* 백엔드 선택 박스 */}
            <ChooseBox
              label="Backend"
              imageUrl={back}
              isSelected={selectedPosition === 'Backend'}
              onClick={() => handleChooseBoxClick('Backend')}
            />
          </div>
        </div>
      </div>
      <div className="w-full py-6">
        <div className="ml-auto mr-auto mt-auto flex w-full max-w-2xl justify-end pt-10">
          <SettingButton text="다음" onClick={GoSetting} />
        </div>
      </div>
    </div>
  );
};

// 버튼 컴포넌트
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

export default SettingPage;
