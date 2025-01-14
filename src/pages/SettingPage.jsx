import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/chooseBox';
import greenSnake from '../assets/image/greenSnake.svg';
import blueSnake from '../assets/image/blueSnake.svg';

const SettingPage = () => {
  const navigate = useNavigate();

  const handleSettingButtonClick = () => {
    navigate('/next-page');
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-black-background">
      {/* 왼쪽 1/4 공간 (빈 공간) */}
      <div className="w-1/4"></div>

      {/* 오른쪽 3/4 컨테이너 */}
      <div className="relative z-20 flex w-3/4 flex-1">
        {/* 오른쪽 메인 컨텐츠 */}
        <div className="flex flex-1 flex-col">
          {/* 모든 컴포넌트를 감싸는 부모 컨테이너 (왼쪽 정렬) */}
          <div className="ml-auto flex w-full max-w-2xl flex-1 flex-col items-start justify-center p-8">
            {/* 프로젝트 입력창 (왼쪽 정렬) */}
            <span className="font-sans text-sm text-white">
              프로젝트 입력창
            </span>
            <div className="flex h-12 w-full items-center justify-center rounded-lg bg-green-main bg-opacity-50"></div>

            {/* 프로젝트 세팅할 포지션 (왼쪽 정렬) */}
            <span className="mt-4 font-sans text-sm text-white">
              프로젝트 세팅할 포지션(중복가능)
            </span>

            {/* ChooseBox를 일렬로 배열 (Frontend와 Backend 박스 사이에 여백 추가) */}
            <div className="mt-4 flex w-full justify-between">
              <div className="ml-10">
                <ChooseBox
                  title="Frontend"
                  color="border-green-main"
                  backColor="bg-black-background"
                  imageUrl={greenSnake}
                />
              </div>
              <div className="mr-10">
                <ChooseBox
                  title="Backend"
                  color="border-blue-main"
                  backColor="bg-black-background"
                  imageUrl={blueSnake}
                />
              </div>
            </div>

            {/* 설정하기 버튼을 오른쪽 아래에 배치 */}
            <div className="mt-8 flex w-full justify-end">
              <SettingButton
                text="세팅하러가기"
                onClick={handleSettingButtonClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
