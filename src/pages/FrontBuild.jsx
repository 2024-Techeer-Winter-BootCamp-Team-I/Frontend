import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import FrontStep from '../components/FrontStep/FrontStep';

import vite from '../assets/image/vite.svg';
import webpack from '../assets/image/webpack.svg';

const FrontBuild = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoFrontFramework = () => {
    console.log('Navigating to /frontbuild');
    navigate('/front-framework');
  };

  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      setSelectedPosition(null);
    } else {
      setSelectedPosition(position);
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-start bg-black">
      <div className="w-full py-6">
        <div className="ml-auto mr-auto max-w-2xl px-6">
          <FrontStep />
        </div>
      </div>

      <div className="ml-auto mr-auto flex h-full max-w-2xl flex-col items-center justify-center rounded-lg p-6">
        <div className="mb-0 w-full">
          <div className="mt-6 flex w-full justify-center gap-8">
            <ChooseBox
              label="Vite"
              imageUrl={vite}
              isSelected={selectedPosition === 'Vite'}
              onClick={() => handleChooseBoxClick('Vite')}
              description={
                '빠른 개발 서버와 모듈 번들링을 제공하며, 최신 브라우저 기능을 활용해 효율적으로 동작'
              }
            />

            <ChooseBox
              label="Webpack"
              imageUrl={webpack}
              isSelected={selectedPosition === 'Webpack'}
              onClick={() => handleChooseBoxClick('Webpack')}
              description={
                '다양한 플러그인과 설정으로 유연한 번들링 옵션을 제공하는 강력한 빌드 도구'
              }
            />
          </div>
        </div>
      </div>

      {/* SettingButton 컨테이너를 독립적으로 분리 */}
      <div className="w-full py-6">
        <div className="ml-auto mr-auto mt-auto flex w-full max-w-2xl justify-end pt-10">
          <SettingButton text="다음" onClick={GoFrontFramework} />
        </div>
      </div>
    </div>
  );
};

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

export default FrontBuild;
