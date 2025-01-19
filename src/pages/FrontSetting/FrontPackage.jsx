import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';

import npm from '../../assets/image/npm.svg';
import yarn from '../../assets/image/yarn.svg';
import pnpm from '../../assets/image/pnpm.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const FrontPackage = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되면 애니메이션 시작
    setIsVisible(true);
  }, []);

  const GoFrontBuild = () => {
    navigate('/frontbuild');
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
      {/* 애니메이션 적용 */}
      <div
        className={`mr-8 flex h-full w-full transform flex-col transition-all duration-500 ease-out ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        {/* 상단 단계 표시 */}
        <div className="w-full">
          <div className="ml-6 mr-6 px-6">
            <FrontStep />
          </div>
        </div>

        <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
          <div className="mb-0 w-full">
            <div className="mt-6 flex w-full max-w-2xl items-center justify-center gap-8">
              <img
                src={leftArrow}
                alt="Previous"
                className="h-12 w-12 cursor-pointer opacity-0"
              />

              <ChooseBox
                label="npm"
                imageUrl={npm}
                isSelected={selectedPosition === 'npm'}
                onClick={() => handleChooseBoxClick('npm')}
                description={
                  'Node.js와 함께 기본으로 제공되며, 가장 널리 사용되는 패키지 매니저'
                }
              />

              <ChooseBox
                label="yarn"
                imageUrl={yarn}
                isSelected={selectedPosition === 'yarn'}
                onClick={() => handleChooseBoxClick('yarn')}
                description={
                  '빠른 속도와 효율적인 캐싱으로 성능을 개선한 Facebook에서 개발한 패키지 매니저'
                }
              />

              <ChooseBox
                label="pnpm"
                imageUrl={pnpm}
                isSelected={selectedPosition === 'pnpm'}
                onClick={() => handleChooseBoxClick('pnpm')}
                description={
                  '디스크 공간을 절약하고 빠른 설치를 제공하며 모노레포 프로젝트에 최적화된 패키지 매니저'
                }
              />
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="h-12 w-12 cursor-pointer"
                onClick={GoFrontBuild}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontPackage;
