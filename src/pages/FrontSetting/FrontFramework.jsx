import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';
import useFrontStore from '../../store/useFrontStore'; // zustand 스토어 import

import react from '../../assets/image/react.svg';
import vue from '../../assets/image/vue.svg';
import svelt from '../../assets/image/svelt.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

const FrontFramework = () => {
  const navigate = useNavigate();
  const { selectedFramework, setSelectedFramework } = useFrontStore(); // zustand 스토어에서 상태와 함수 가져오기

  // selectedFramework가 변경될 때마다 전체 상태를 콘솔에 출력
  useEffect(() => {
    const currentState = useFrontStore.getState(); // 스토어의 전체 상태 가져오기
    console.log('Current State:', currentState);
  }, [selectedFramework]);

  const GoFrontLanguage = () => {
    // 선택된 프레임워크가 없으면 경고 메시지 표시
    if (!selectedFramework) {
      alert('프레임워크를 선택해주세요.');
      return;
    }

    // 다음 페이지로 이동
    navigate('/frontlanguage');
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

              {/* React 선택 박스 */}
              <ChooseBox
                label="React"
                imageUrl={react}
                isSelected={selectedFramework === 'React'}
                onClick={() => setSelectedFramework('React')} // zustand 스토어의 setSelectedFramework 사용
                description={
                  'Facebook에서 개발한 UI 라이브러리로, 컴포넌트 기반 아키텍처와 상태 관리가 뛰어나며 대규모 애플리케이션 개발에 적합'
                }
              />

              {/* Vue 선택 박스 */}
              <ChooseBox
                label="Vue"
                imageUrl={vue}
                isSelected={selectedFramework === 'Vue'}
                onClick={() => setSelectedFramework('Vue')} // zustand 스토어의 setSelectedFramework 사용
                description={
                  '사용자 친화적인 문법과 데이터 바인딩을 통해 간단한 프로젝트부터 복잡한 애플리케이션까지 쉽게 개발할 수 있는 프레임워크'
                }
              />

              {/* Svelt 선택 박스 */}
              <ChooseBox
                label="Svelte"
                imageUrl={svelt}
                isSelected={selectedFramework === 'Svelte'}
                onClick={() => setSelectedFramework('Svelte')} // zustand 스토어의 setSelectedFramework 사용
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
