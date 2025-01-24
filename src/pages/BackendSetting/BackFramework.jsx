import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import BackStep from '../../components/BackStep/BackStep';
import Layout from '../Layout';
import useBackStore from '../../store/useBackStore'; // Zustand 스토어 import

import django from '../../assets/image/django.svg';
import nodeJs from '../../assets/image/nodeJs.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const BackFramework = () => {
  const navigate = useNavigate();
  const { selectedFramework, setSelectedFramework } = useBackStore(); // Zustand 스토어에서 상태와 함수 가져오기
  const [isVisible, setIsVisible] = useState(false);

  // 컴포넌트가 마운트되면 애니메이션 시작
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // selectedFramework가 변경될 때마다 전체 상태를 콘솔에 출력
  useEffect(() => {
    const currentState = useBackStore.getState(); // 스토어의 전체 상태 가져오기
    console.log('Current State:', currentState);
  }, [selectedFramework]);

  const GoBackDatabase = () => {
    // 선택된 프레임워크가 없으면 경고 메시지 표시
    if (!selectedFramework) {
      alert('프레임워크를 선택해주세요.');
      return;
    }

    // 다음 페이지로 이동
    navigate('/backdatabase');
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

              {/* Django 선택 박스 */}
              <ChooseBox
                label="Django"
                imageUrl={django}
                isSelected={selectedFramework === 'Django'}
                onClick={() => setSelectedFramework('Django')} // Zustand 스토어의 setSelectedFramework 사용
                description={
                  'Python 기반 웹 프레임워크로, 빠른 개발과 단순함을 지향하며 ORM, 인증, 관리자 패널 등 다양한 기능을 기본 제공'
                }
              />

              {/* Node.js 선택 박스 */}
              <ChooseBox
                label="Node.js"
                imageUrl={nodeJs}
                isSelected={selectedFramework === 'Node.js'}
                onClick={() => setSelectedFramework('Node.js')} // Zustand 스토어의 setSelectedFramework 사용
                description={
                  '비동기 이벤트 기반 JavaScript 런타임으로, 서버 사이드 애플리케이션 개발에 주로 사용'
                }
              />

              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="h-12 w-12 cursor-pointer"
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
