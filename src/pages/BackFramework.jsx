import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import BackStep from '../components/BackStep/BackStep';

import django from '../assets/image/django.svg';
import springboot from '../assets/image/springboot.svg';

const BackFramework = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoBackDatabase = () => {
    console.log('Navigating to /frontbuild');
    navigate('/back-database');
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
      <div className="w-full py-6">
        <div className="ml-auto mr-auto max-w-2xl px-6">
          <BackStep />
        </div>
      </div>
      <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
        <div className="mb-0 w-full">
          <div className="mt-6 flex w-full max-w-2xl justify-center gap-8">
            {/* Django */}
            <ChooseBox
              label="Django"
              imageUrl={django}
              isSelected={selectedPosition === 'Django'}
              onClick={() => handleChooseBoxClick('Django')}
              description={
                'Python 기반 웹 프레임워크로, 빠른 개발과 단순함을 지향하며 ORM, 인증, 관리자 패널 등 다양한 기능을 기본 제공'
              }
            />

            {/* Springboot */}
            <ChooseBox
              label="Springboot"
              imageUrl={springboot}
              isSelected={selectedPosition === 'Springboot'}
              onClick={() => handleChooseBoxClick('Springboot')}
              description={
                'Java 기반 프레임워크 Spring의 확장판으로, 설정을 간소화하고 빠른 애플리케이션 개발을 지원하며 REST API, 마이크로서비스 등에 적합'
              }
            />
          </div>
        </div>
      </div>
      {/* SettingButton 컨테이너를 독립적으로 분리 */}
      <div className="w-full py-6">
        <div className="ml-auto mr-auto mt-auto flex w-full max-w-2xl justify-end pt-10">
          <SettingButton text="다음" onClick={GoBackDatabase} />
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

export default BackFramework;
