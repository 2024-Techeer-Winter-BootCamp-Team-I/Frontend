import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import BackStep from '../../components/BackStep/BackStep';
import Layout from '../Layout';

import django from '../../assets/image/django.svg';
import springboot from '../../assets/image/springboot.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const BackFramework = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  const GoBackDatabase = () => {
    console.log('To direct Navigating');
    navigate('/backdatabase');
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
    } else {
      // 새로운 항목 선택
      setSelectedPosition(position);
    }
  };

  return (
    <Layout>
      <div className="mr-8 flex h-full w-full flex-col">
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
