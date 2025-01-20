import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FrontStacksContext } from '../../context/frontStacksContext'; // Context 임포트

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';

import vite from '../../assets/image/vite.svg';
import webpack from '../../assets/image/webpack.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

const FrontBuild = () => {
  const navigate = useNavigate();
  const { front, setFront, addFront, removeFront } =
    useContext(FrontStacksContext); // 전역 상태 사용
  const [selectedBuild, setSelectedBuild] = useState(null); // 선택된 빌드 도구

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 이미 선택된 빌드 도구가 있다면 selectedBuild 상태를 설정
    const buildTool = front.find(
      (item) => item === 'Vite' || item === 'Webpack',
    );
    if (buildTool) {
      setSelectedBuild(buildTool); // 빌드 도구만 선택
    }
  }, [front]);

  // front 배열이 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('Front Stacks:', front);
  }, [front]);

  const GoFrontFramework = () => {
    if (!selectedBuild) {
      alert('빌드 도구를 선택해주세요.');
      return;
    }
    navigate('/frontframework');
  };

  const handleChooseBoxClick = (buildTool) => {
    if (selectedBuild === buildTool) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedBuild(null);
      removeFront(buildTool); // 전역 상태에서 제거
    } else {
      // 새로운 항목 선택
      setSelectedBuild(buildTool);

      // 기존 빌드 도구를 제거하고 새로운 빌드 도구 추가
      const existingBuildTool = front.find(
        (item) => item === 'Vite' || item === 'Webpack',
      );
      if (existingBuildTool) {
        removeFront(existingBuildTool); // 기존 빌드 도구 제거
      }
      addFront(buildTool); // 새로운 빌드 도구 추가
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

              {/* Vite 선택 박스 */}
              <ChooseBox
                label="Vite"
                imageUrl={vite}
                isSelected={selectedBuild === 'Vite'} // 선택된 경우 true
                onClick={() => handleChooseBoxClick('Vite')}
                description={
                  '빠른 개발 서버와 모듈 번들링을 제공하며, 최신 브라우저 기능을 활용해 효율적으로 동작'
                }
              />

              {/* Webpack 선택 박스 */}
              <ChooseBox
                label="Webpack"
                imageUrl={webpack}
                isSelected={selectedBuild === 'Webpack'} // 선택된 경우 true
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
