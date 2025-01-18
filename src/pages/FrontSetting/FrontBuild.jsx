import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';

import vite from '../../assets/image/vite.svg';
import webpack from '../../assets/image/webpack.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

const FrontBuild = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoFrontFramework = () => {
    console.log('Navigating to /frontbuild');
    navigate('/frontframework');
  };

  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      setSelectedPosition(null);
    } else {
      setSelectedPosition(position);
    }
  };

  return (
    <Layout>
      <div className="mr-8 flex h-full w-full flex-col">
        <div className="w-full">
          <div className="ml-6 mr-6 px-6">
            <FrontStep />
          </div>
        </div>

        <div className="ml-auto mr-auto flex h-full max-w-2xl flex-col items-center justify-center rounded-lg p-6">
          <div className="mb-0 w-full">
            <div className="mt-6 flex w-full items-center justify-center gap-8">
              {/* 왼쪽 화살표 */}
              <img
                src={leftArrow}
                alt="Previous"
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate(-1)} // 이전 페이지로 이동
                title="Previous Page"
              />

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
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="h-12 w-12 cursor-pointer"
                onClick={GoFrontFramework}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontBuild;
