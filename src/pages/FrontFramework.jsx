import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';

import FrontendStepper from '../components/FrontendStepper';
import greenSnake from '../assets/image/greenSnake.svg';
import react from '../assets/image/react.svg';
import vue from '../assets/image/vue.svg';
import svelt from '../assets/image/svelt.svg';
import Layout from '../components/Layout';

const FrontFramework = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const GoLanguage = () => {
    navigate('/frontlanguage');
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
          <div className="flex flex-col items-center justify-center"></div>

          {/* 오른쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-start rounded-lg p-6">
            <div className="mb-8 w-full">
              <FrontendStepper currentPage={2} />{' '}
              {/* 현재 페이지 번호를 2로 설정 */}
            </div>

            <div className="flex w-full max-w-2xl justify-center gap-8">
              <ChooseBox
                className="min-w-0 flex-1"
                title="React"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={react}
                isSelected={selectedBox === 'React'}
                onClick={() => handleBoxClick('React')}
                description="Facebook에서 개발한 UI 라이브러리로, 컴포넌트 기반 아키텍처와 상태 관리가 뛰어나며 대규모 애플리케이션 개발에 적합"
              />

              <ChooseBox
                className="min-w-0 flex-1"
                title="Vue"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={vue}
                isSelected={selectedBox === 'Vue'}
                onClick={() => handleBoxClick('Vue')}
                description="사용자 친화적인 문법과 데이터 바인딩을 통해 간단한 프로젝트부터 복잡한 애플리케이션까지 쉽게 개발할 수 있는 프레임워크"
              />

              <ChooseBox
                className="min-w-0 flex-1"
                title="Svelt"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={svelt}
                isSelected={selectedBox === 'Svelt'}
                onClick={() => handleBoxClick('Svelt')}
                description="컴파일 단계에서 DOM 업데이트 코드를 생성하여 빠르고 간결한 개발 경험을 제공하는 차세대 UI 프레임워크"
              />
            </div>

            <div className="mt-8 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="완료"
                onClick={GoLanguage}
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

export default FrontFramework;
