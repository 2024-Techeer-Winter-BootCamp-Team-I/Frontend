import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';
import useFrontStore from '../../store/useFrontStore'; // zustand 스토어 import

import npm from '../../assets/image/npm.svg';
import yarn from '../../assets/image/yarn.svg';
import pnpm from '../../assets/image/pnpm.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const FrontPackage = () => {
  const navigate = useNavigate();
  const { selectedPackage, setSelectedPackage } = useFrontStore(); // zustand 스토어에서 상태와 함수 가져오기
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트되면 애니메이션 시작
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // selectedPackage가 변경될 때마다 전체 상태를 콘솔에 출력
  useEffect(() => {
    const currentState = useFrontStore.getState(); // 스토어의 전체 상태 가져오기
    console.log('Current State:', currentState);
  }, [selectedPackage]);

  const GoFrontBuild = () => {
    // 선택된 패키지가 없으면 경고 메시지 표시
    if (!selectedPackage) {
      alert('패키지 매니저를 선택해주세요.');
      return;
    }

    // 다음 페이지로 이동
    navigate('/frontbuild');
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

              {/* npm 선택 박스 */}
              <ChooseBox
                label="npm"
                imageUrl={npm}
                isSelected={selectedPackage === 'npm'}
                onClick={() => setSelectedPackage('npm')} // zustand 스토어의 setSelectedPackage 사용
                description={
                  <>
                    Node.js와 함께 <span className="font-semibold">기본</span>
                    으로 제공되며,{' '}
                    <span className="font-semibold">
                      가장 널리 사용되는
                    </span>{' '}
                    패키지 매니저
                  </>
                }
              />

              {/* yarn 선택 박스 */}
              <ChooseBox
                label="yarn"
                imageUrl={yarn}
                isSelected={selectedPackage === 'yarn'}
                onClick={() => setSelectedPackage('yarn')} // zustand 스토어의 setSelectedPackage 사용
                description={
                  <>
                    <span className="font-semibold">빠른 속도</span>와{' '}
                    <span className="font-semibold">효율적인 캐싱으로 </span>
                    성능을 개선한 Facebook에서 개발한 패키지 매니저
                  </>
                }
              />

              {/* pnpm 선택 박스 */}
              <ChooseBox
                label="pnpm"
                imageUrl={pnpm}
                isSelected={selectedPackage === 'pnpm'}
                onClick={() => setSelectedPackage('pnpm')} // zustand 스토어의 setSelectedPackage 사용
                description={
                  <>
                    <span className="font-semibold">디스크 공간</span>을{' '}
                    <span className="font-semibold">절약</span>
                    하고 <span className="font-semibold">빠른 설치</span>를
                    제공하며{' '}
                    <span className="font-semibold">모노레포 프로젝트</span>에
                    최적화된 패키지 매니저
                  </>
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
