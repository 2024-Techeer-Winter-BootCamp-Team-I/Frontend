import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackStacksContext } from '../../context/backStacksContext'; // Context 임포트

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import BackStep from '../../components/BackStep/BackStep';
import Layout from '../Layout';

import django from '../../assets/image/django.svg';
import springboot from '../../assets/image/springboot.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const BackFramework = () => {
  const navigate = useNavigate();
  const { back, setBack, addBack, removeBack } = useContext(BackStacksContext); // setBackStacks -> setBack로 수정
  const [selectedPosition, setSelectedPosition] = useState(null); // 선택된 프레임워크
  const [isVisible, setIsVisible] = useState(false); // 애니메이션 상태

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 이미 선택된 프레임워크가 있다면 selectedPosition 상태를 설정
    if (back.length > 0) {
      setSelectedPosition(back[0]); // 예: 첫 번째 항목을 선택
    }
  }, [back]);

  useEffect(() => {
    // 컴포넌트가 마운트되면 100ms 후에 애니메이션 시작
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  // back 배열이 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('Back Stacks:', back);
  }, [back]);

  const GoBackDatabase = () => {
    if (!selectedPosition) {
      alert('프레임워크를 선택해주세요.');
      return;
    }
    navigate('/backdatabase');
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (framework) => {
    if (selectedPosition === framework) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
      removeBack(framework); // 전역 상태에서 제거
    } else {
      // 새로운 항목 선택
      setSelectedPosition(framework);

      // 기존 항목을 모두 제거하고 새로운 항목만 추가
      setBack([]); // 배열 비우기 (setBackStacks -> setBack로 수정)
      addBack(framework); // 새로운 항목 추가
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
        <div className="w-full">
          <div className="ml-6 mr-6 px-6">
            <BackStep />
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

              {/* Django */}
              <ChooseBox
                label="Django"
                imageUrl={django}
                isSelected={selectedPosition === 'Django'}
                onClick={() => handleChooseBoxClick('Django')}
                description={
                  'Python 기반 웹 프레임워크로, 빠른 개발과 단순함을 지향하며 ORM, 인증, 관리자 패널 등 다양한 기능을 기본 제공'
                }
              />

              {/* Springboot */}
              <ChooseBox
                label="Springboot"
                imageUrl={springboot}
                isSelected={selectedPosition === 'Springboot'}
                onClick={() => handleChooseBoxClick('Springboot')}
                description={
                  'Java 기반 프레임워크 Spring의 확장판으로, 설정을 간소화하고 빠른 애플리케이션 개발을 지원하며 REST API, 마이크로서비스 등에 적합'
                }
              />
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="ml-auto mr-auto h-12 w-12 cursor-pointer"
                onClick={GoBackDatabase}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BackFramework;
