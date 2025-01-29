import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';
import useFrontStore from '../../store/useFrontStore'; // zustand 스토어 import

import vite from '../../assets/image/vite.svg';
import webpack from '../../assets/image/webpack.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

const FrontBuild = () => {
  const navigate = useNavigate();
  const { selectedBuildTool, setSelectedBuildTool } = useFrontStore(); // zustand 스토어에서 상태와 함수 가져오기

  // selectedBuildTool이 변경될 때마다 전체 상태를 콘솔에 출력
  useEffect(() => {
    const currentState = useFrontStore.getState(); // 스토어의 전체 상태 가져오기
    console.log('Current State:', currentState);
  }, [selectedBuildTool]);

  const GoFrontFramework = () => {
    // 선택된 빌드 도구가 없으면 경고 메시지 표시
    if (!selectedBuildTool) {
      alert('빌드 도구를 선택해주세요.');
      return;
    }

    // 다음 페이지로 이동
    navigate('/frontframework');
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

              {/* Vite 선택 박스 */}
              <ChooseBox
                label="Vite"
                imageUrl={vite}
                isSelected={selectedBuildTool === 'Vite'}
                onClick={() => setSelectedBuildTool('Vite')} // zustand 스토어의 setSelectedBuildTool 사용
                description={
                  <>
                    <span className="font-semibold">빠른 개발 서버</span>와{' '}
                    <span className="font-semibold">모듈 번들링</span>을
                    제공하며,{' '}
                    <span className="font-semibold">최신 브라우저 기능</span>을
                    활용해 효율적으로 동작
                  </>
                }
              />

              {/* Webpack 선택 박스 */}
              <ChooseBox
                label="Webpack"
                imageUrl={webpack}
                isSelected={selectedBuildTool === 'Webpack'}
                onClick={() => setSelectedBuildTool('Webpack')} // zustand 스토어의 setSelectedBuildTool 사용
                description={
                  <>
                    <span className="font-semibold">다양한 플러그인</span>과
                    설정으로{' '}
                    <span className="font-semibold">유연한 번들링 옵션</span>을
                    제공하는 강력한 빌드 도구
                  </>
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
