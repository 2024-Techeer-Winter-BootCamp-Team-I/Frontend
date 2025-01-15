import React from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox';
import Frame from '../components/Frame';
import BackendStepper from '../components/BackendStepper';

import django from '../assets/image/django.svg';
import springboot from '../assets/image/springboot.svg';

const BackendSetting1 = () => {
  const navigate = useNavigate();

  const handleSettingButtonClick = () => {
    navigate('/next-page');
  };

  return (
    <div className="relative flex min-h-screen w-full justify-end bg-black-background">
      <div className="mt-0 flex w-full flex-1 flex-col justify-center p-8 pt-0">
        <Frame className="m-0 mb-auto h-full w-full p-0 pb-0" />

        {/* BackSettingStep을 컨테이너 내부에 배치 */}
        <div className="mb-auto ml-auto mt-auto flex w-3/4 items-center justify-center">
          <BackendStepper />
        </div>

        {/* ChooseBox를 일렬로 배열 */}
        <div className="ml-96 mr-60 flex w-full max-w-2xl justify-center gap-8">
          <ChooseBox
            className="min-w-0 flex-1"
            title="Django"
            color="border-blue-main"
            backColor="bg-black-background"
            imageUrl={django}
            description="Python 기반 웹 프레임워크로, 빠른 개발과 단순함을 지향하며 ORM, 인증, 관리자 패널 등 다양한 기능을 기본 제공"
          />

          <ChooseBox
            className="min-w-0 flex-1 whitespace-pre-line"
            title="springboot"
            color="border-blue-main"
            backColor="bg-black-background"
            imageUrl={springboot}
            description="Java 기반 프레임워크 Spring의 확장판으로, 설정을 간소화하고 빠른 애플리케이션 개발을 지원하며 REST API, 마이크로서비스 등에 적합"
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

export default BackendSetting1;
