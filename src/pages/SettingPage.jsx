import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/chooseBox';
import greenSnake from '../assets/image/greenSnake.svg';
import blueSnake from '../assets/image/blueSnake.svg';
import Frame from '../components/Frame';

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
    <div className="relative flex min-h-screen w-full justify-end bg-black-background">
      <div className="mt-0 flex w-full flex-1 flex-col justify-center p-8 pt-0">
        <Frame className="m-0 mb-auto h-full w-full p-0 pb-0" />

        <div className="relative z-20 ml-auto mt-auto flex w-3/4 flex-1 justify-start">
          <div className="flex flex-1 flex-col">
            <div className="flex w-full max-w-2xl flex-1 flex-col items-start justify-center p-8">
              <span className="font-sans text-sm text-white">
                프로젝트 입력창
              </span>
              <div className="flex h-12 w-full items-center justify-center rounded-lg bg-green-main bg-opacity-50"></div>

              <span className="mt-4 font-sans text-sm text-white">
                프로젝트 세팅할 포지션(중복가능)
              </span>

              <div className="mt-4 flex w-full justify-between">
                <div className="ml-10">
                  <ChooseBox
                    title="Frontend"
                    color="border-green-main"
                    backColor="bg-black-background"
                    imageUrl={greenSnake}
                    isSelected={selectedPosition === 'Frontend'}
                    onClick={() => handleChooseBoxClick('Frontend')}
                  />
                </div>
                <div className="mr-10">
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
            </div>
            <div className="mt-8 flex w-full justify-end">
              <SettingButton
                text="세팅하러가기"
                onClick={GoSetting}
                className="justify-end"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
