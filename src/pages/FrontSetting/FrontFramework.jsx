import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FrontStacksContext } from '../../context/frontStacksContext'; // Context 임포트

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';

import react from '../../assets/image/react.svg';
import vue from '../../assets/image/vue.svg';
import svelt from '../../assets/image/svelt.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

const FrontFramework = () => {
  const navigate = useNavigate();
  const { front, addFront, removeFront } = useContext(FrontStacksContext); // 전역 상태 사용
  const [selectedPosition, setSelectedPosition] = useState(null); // 선택된 프레임워크

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 이미 선택된 프레임워크가 있다면 selectedPosition 상태를 설정
    const framework = front.find((item) =>
      ['React', 'Vue', 'Svelt'].includes(item),
    );
    if (framework) {
      setSelectedPosition(framework); // 선택된 프레임워크 설정
    }
  }, [front]);

  // front 배열이 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('Front Stacks (Framework):', front);
  }, [front]);

  const GoFrontLanguage = () => {
    if (!selectedPosition) {
      alert('프레임워크를 선택해주세요.');
      return;
    }
    navigate('/frontlanguage');
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
      removeFront(position); // 전역 상태에서 제거
    } else {
      // 새로운 항목 선택
      setSelectedPosition(position);

      // 기존 프레임워크를 제거하고 새로운 프레임워크 추가
      const existingFramework = front.find((item) =>
        ['React', 'Vue', 'Svelt'].includes(item),
      );
      if (existingFramework) {
        removeFront(existingFramework); // 기존 프레임워크 제거
      }
      addFront(position); // 새로운 프레임워크 추가
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

        <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
          <div className="mb-0 w-full">
            <div className="mt-6 flex w-full max-w-2xl items-center justify-center gap-8">
              {/* 왼쪽 화살표 */}
              <img
                src={leftArrow}
                alt="Previous"
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate(-1)} // 이전 페이지로 이동
                title="Previous Page"
              />

              {/* React */}
              <ChooseBox
                label="React"
                imageUrl={react}
                isSelected={selectedPosition === 'React'}
                onClick={() => handleChooseBoxClick('React')}
                description={
                  'Facebook에서 개발한 UI 라이브러리로, 컴포넌트 기반 아키텍처와 상태 관리가 뛰어나며 대규모 애플리케이션 개발에 적합'
                }
              />
              {/* Vue */}
              <ChooseBox
                label="Vue"
                imageUrl={vue}
                isSelected={selectedPosition === 'Vue'}
                onClick={() => handleChooseBoxClick('Vue')}
                description={
                  '사용자 친화적인 문법과 데이터 바인딩을 통해 간단한 프로젝트부터 복잡한 애플리케이션까지 쉽게 개발할 수 있는 프레임워크'
                }
              />
              {/* Svelt */}
              <ChooseBox
                label="Svelt"
                imageUrl={svelt}
                isSelected={selectedPosition === 'Svelt'}
                onClick={() => handleChooseBoxClick('Svelt')}
                description={
                  '컴파일 단계에서 DOM 업데이트 코드를 생성하여 빠르고 간결한 개발 경험을 제공하는 차세대 UI 프레임워크'
                }
              />
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="h-12 w-12 cursor-pointer"
                onClick={GoFrontLanguage}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontFramework;
