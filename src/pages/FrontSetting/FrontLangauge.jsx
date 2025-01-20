import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FrontStacksContext } from '../../context/frontStacksContext'; // Context 임포트
import { SelectedPositionsContext } from '../../context/selectedPositionsContext'; // Context 임포트

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';

import javascript from '../../assets/image/javascript.svg';
import typescript from '../../assets/image/typescript.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

const FrontLanguage = () => {
  const navigate = useNavigate();
  const { front, addFront, removeFront } = useContext(FrontStacksContext); // 전역 상태 사용
  const { selectedPositions } = useContext(SelectedPositionsContext); // 전역 상태 사용
  const [selectedLanguage, setSelectedLanguage] = useState(null); // 선택된 언어

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 이미 선택된 언어가 있다면 selectedLanguage 상태를 설정
    const language = front.find((item) =>
      ['JavaScript', 'TypeScript'].includes(item),
    );
    if (language) {
      setSelectedLanguage(language); // 선택된 언어 설정
    }
  }, [front]);

  // front 배열이 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('Front Stacks:', front); // 전체 front 배열 출력
  }, [front]);

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (language) => {
    if (selectedLanguage === language) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedLanguage(null);
      removeFront(language); // 전역 상태에서 제거
    } else {
      // 새로운 항목 선택
      setSelectedLanguage(language);

      // 기존 언어를 제거하고 새로운 언어 추가
      const existingLanguage = front.find((item) =>
        ['JavaScript', 'TypeScript'].includes(item),
      );
      if (existingLanguage) {
        removeFront(existingLanguage); // 기존 언어 제거
      }
      addFront(language); // 새로운 언어 추가
    }
  };

  // rightArrow 클릭 시 호출되는 함수
  const handleRightArrowClick = () => {
    if (!selectedLanguage) {
      // 언어가 선택되지 않은 경우 아무 동작도 하지 않음
      alert('언어를 선택해주세요.');
      return;
    }

    // selectedPositions 배열에 'Backend'가 포함되어 있는지 확인
    if (selectedPositions.includes('Backend')) {
      // 'Backend'가 포함된 경우 /backframework로 이동
      navigate('/backframework');
    } else {
      // 'Backend'가 포함되지 않은 경우, 완료 페이지로 이동
      navigate('/settingcheck');
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

              {/* JavaScript */}
              <ChooseBox
                label="JavaScript"
                imageUrl={javascript}
                isSelected={selectedLanguage === 'JavaScript'}
                onClick={() => handleChooseBoxClick('JavaScript')}
                description={
                  '웹과 서버에서 사용하는 동적 타이핑 기반의 유연한 스크립트 언어'
                }
              />
              {/* TypeScript */}
              <ChooseBox
                label="TypeScript"
                imageUrl={typescript}
                isSelected={selectedLanguage === 'TypeScript'}
                onClick={() => handleChooseBoxClick('TypeScript')}
                description={
                  '정적 타이핑과 추가 기능으로 코드 안정성을 강화한 JavaScript의 확장 언어'
                }
              />
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className={`h-12 w-12 cursor-pointer ${
                  !selectedLanguage ? 'opacity-50' : 'opacity-100'
                }`}
                onClick={handleRightArrowClick}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FrontLanguage;
