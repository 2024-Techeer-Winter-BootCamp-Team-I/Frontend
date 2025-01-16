import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';
import greenSnake from '../assets/image/greenSnake.svg';
import blueSnake from '../assets/image/blueSnake.svg';

import Layout from '../components/Layout';

const SettingPage = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoSetting = () => {
    if (selectedPosition === 'Frontend') {
      navigate('/frontpackage');
    } else if (selectedPosition === 'Backend') {
      navigate('/backframework');
    } else {
      alert('프론트엔드 또는 백엔드를 선택해주세요.');
    }
  };

  const handleChooseBoxClick = (position) => {
    setSelectedPosition(position);
  };

  return (
    <Layout>
      <div className="flex h-full flex-col justify-start p-5">
        {/* 그리드 레이아웃 */}
        <div className="mx-auto grid w-full grid-cols-[250px_auto] gap-8">
          {/* 왼쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-center rounded-lg p-4">
            {/* 왼쪽 컨테이너에 추가할 내용이 있다면 여기에 배치 */}
          </div>

          {/* 오른쪽 컨테이너 */}
          <div className="flex h-full flex-col items-center justify-center rounded-lg p-6">
            <div className="mb-0 w-full">
              <p className="font-sans text-lg text-white">프로젝트 입력창</p>
              <input className="flex h-12 w-3/4 items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 text-white"></input>

              <p className="mt-10 font-sans text-lg text-white">
                프로젝트 세팅할 포지션(중복가능)
              </p>

              <div className="mt-6 flex w-full max-w-2xl justify-center gap-8">
                <ChooseBox
                  title="Frontend"
                  color="border-green-main"
                  backColor="bg-black-background"
                  imageUrl={greenSnake}
                  isSelected={selectedPosition === 'Frontend'}
                  onClick={() => handleChooseBoxClick('Frontend')}
                />

                <ChooseBox
                  title="Backend"
                  color="border-blue-main"
                  backColor="bg-black-background"
                  imageUrl={blueSnake}
                  isSelected={selectedPosition === 'Backend'}
                  onClick={() => handleChooseBoxClick('Backend')}
                />
              </div>
            </div>

            <div className="mt-0 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="세팅하러가기"
                onClick={GoSetting}
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
      className="h-[3rem] w-[10rem] rounded-[0.7rem] bg-blue-main text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SettingPage;
