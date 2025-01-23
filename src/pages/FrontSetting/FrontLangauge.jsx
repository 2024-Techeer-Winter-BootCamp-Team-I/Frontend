import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import FrontStep from '../../components/FrontStep/FrontStep';
import Layout from '../Layout';
import useFrontStore from '../../store/useFrontStore'; // zustand 스토어 import

import javascript from '../../assets/image/javascript.svg';
import typescript from '../../assets/image/typescript.svg';

import leftArrow from '../../assets/image/leftArrow.svg';
import rightArrow from '../../assets/image/rightArrow.svg';

import FrontSettingModal from '../../components/SettingModal/FrontSettingModal'; // 올바른 경로로 수정

const FrontLanguage = () => {
  const navigate = useNavigate();

  const { selectedLanguage, setSelectedLanguage } = useFrontStore(); // zustand 스토어에서 상태와 함수 가져오기

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // selectedLanguage가 변경될 때마다 전체 상태를 콘솔에 출력
  useEffect(() => {
    const currentState = useFrontStore.getState(); // 스토어의 전체 상태 가져오기
    console.log('Current State:', currentState);
  }, [selectedLanguage]);

  // 다음 페이지로 이동하는 함수
  const GoNextPage = () => {
    // 선택된 언어가 없으면 경고 메시지 표시
    if (!selectedLanguage) {
      alert('언어를 선택해주세요.');
      return;
    }

    // 무조건 모달창 띄우기
    setIsModalOpen(true);
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (language) => {
    if (selectedLanguage === language) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedLanguage(null);
    } else {
      // 새로운 항목 선택
      setSelectedLanguage(language);
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

              {/* JavaScript 선택 박스 */}
              <ChooseBox
                label="JavaScript"
                imageUrl={javascript}
                isSelected={selectedLanguage === 'JavaScript'}
                onClick={() => handleChooseBoxClick('JavaScript')} // zustand 스토어의 setSelectedLanguage 사용
                description={
                  '웹과 서버에서 사용하는 동적 타이핑 기반의 유연한 스크립트 언어'
                }
              />

              {/* TypeScript 선택 박스 */}
              <ChooseBox
                label="TypeScript"
                imageUrl={typescript}
                isSelected={selectedLanguage === 'TypeScript'}
                onClick={() => handleChooseBoxClick('TypeScript')} // zustand 스토어의 setSelectedLanguage 사용
                description={
                  '정적 타이핑과 추가 기능으로 코드 안정성을 강화한 JavaScript의 확장 언어'
                }
              />

              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="h-12 w-12 cursor-pointer"
                onClick={GoNextPage}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FrontStackModal 컴포넌트 */}
      <FrontSettingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Layout>
  );
};

export default FrontLanguage;
