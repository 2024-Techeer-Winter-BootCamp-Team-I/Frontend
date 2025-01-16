import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';
import Frame from '../components/Frame';
import BackendStepper from '../components/BackendStepper';
import django from '../assets/image/django.svg';
import springboot from '../assets/image/springboot.svg';
import Layout from '../components/Layout';

const BackFramework = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const GoBackDatabase = () => {
    navigate('/backdatabase');
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
          <div className="flex flex-col items-center justify-center rounded-lg p-4">
            {/* 왼쪽 컨테이너에 추가할 내용이 있다면 여기에 배치 */}
          </div>

          {/* 오른쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-start rounded-lg p-6">
            <div className="mb-8 w-full">
              <BackendStepper PcurrentPage={0} />{' '}
              {/* 현재 페이지 번호를 0으로 설정 */}
            </div>

            <div className="flex w-full max-w-2xl flex-wrap justify-center gap-8">
              <ChooseBox
                className="min-w-0 flex-1"
                title="Django"
                color="border-blue-main"
                backColor="bg-black-background"
                imageUrl={django}
                isSelected={selectedBox === 'Django'}
                onClick={() => handleBoxClick('Django')}
                description="Python 기반 웹 프레임워크로, 빠른 개발과 단순함을 지향하며 ORM, 인증, 관리자 패널 등 다양한 기능을 기본 제공"
              />

              <ChooseBox
                className="min-w-0 flex-1 whitespace-pre-line"
                title="springboot"
                color="border-blue-main"
                backColor="bg-black-background"
                imageUrl={springboot}
                isSelected={selectedBox === 'springboot'}
                onClick={() => handleBoxClick('springboot')}
                description="Java 기반 프레임워크 Spring의 확장판으로, 설정을 간소화하고 빠른 애플리케이션 개발을 지원하며 REST API, 마이크로서비스 등에 적합"
              />
            </div>

            <div className="mt-8 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="완료"
                onClick={GoBackDatabase}
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

export default BackFramework;
