import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';
import FrontendStepper from '../components/FrontendStepper';
import vite from '../assets/image/vite.svg';
import webpack from '../assets/image/webpack.svg';
import Layout from '../components/Layout';

const FrontBuild = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const GoFrontFramework = () => {
    navigate('/frontframework');
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
              <FrontendStepper currentPage={1} />{' '}
              {/* 현재 페이지 번호를 1로 설정 */}
            </div>

            <div className="flex w-full max-w-2xl justify-center gap-8">
              <ChooseBox
                className="min-w-0 flex-1"
                title="Vite"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={vite}
                isSelected={selectedBox === 'Vite'}
                onClick={() => handleBoxClick('Vite')}
                description="빠른 개발 서버와 모듈 번들링을 제공하며, 최신 브라우저 기능을 활용해 효율적으로 동작"
              />

              <ChooseBox
                className="min-w-0 flex-1"
                title="WebPack"
                color="border-green-main"
                backColor="bg-black-background"
                imageUrl={webpack}
                isSelected={selectedBox === 'WebPack'}
                onClick={() => handleBoxClick('WebPack')}
                description="다양한 플러그인과 설정으로 유연한 번들링 옵션을 제공하는 강력한 빌드 도구"
              />
            </div>

            <div className="mt-8 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="완료"
                onClick={GoFrontFramework}
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

export default FrontBuild;
