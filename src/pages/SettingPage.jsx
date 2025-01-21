// SettingPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox/ChooseBox';
import useSettingStore from '../store/useSettingStore'; // zustand 스토어 import

import Layout from './Layout';

import front from '../assets/image/front.svg';
import back from '../assets/image/back.svg';
import leftArrow from '../assets/image/leftArrow.svg';
import rightArrow from '../assets/image/rightArrow.svg';

const SettingPage = () => {
  const navigate = useNavigate();
  const { selectedPositions, togglePosition } = useSettingStore();
  // zustand 스토어에서 상태와 함수 가져오기

  // selectedPositions가 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('Selected Positions:', selectedPositions);
  }, [selectedPositions]);

  // rightArrow 클릭 시 호출되는 함수
  const handleRightArrowClick = () => {
    if (selectedPositions.length === 0) {
      // 선택된 포지션이 없으면 경고 메시지 표시
      alert('포지션을 선택해주세요.');
      return;
    }

    // 선택된 포지션에 따라 페이지 이동
    if (selectedPositions.includes('Frontend')) {
      // 프론트엔드가 선택된 경우
      navigate('/frontpackage');
    } else if (selectedPositions.includes('Backend')) {
      // 백엔드만 선택된 경우
      navigate('/backframework');
    }
  };

  return (
    <Layout>
      <div className="mt-0 flex h-full w-full flex-col">
        {/* 오른쪽 컨테이너 */}
        <div className="ml-auto mr-auto flex h-full flex-col rounded-lg p-6">
          <div className="w-full">
            <p className="mb-3 font-sans text-lg text-white">
              디렉토리 이름 입력창
            </p>
            <input
              className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 p-3 text-white"
              placeholder="Ex. DevSketch"
            />

            <p className="mt-10 font-sans text-lg text-white">
              프로젝트 세팅할 포지션(중복가능)
            </p>

            <div className="mt-3 flex w-full max-w-2xl justify-center gap-8">
              <div className="opacity-0 focus:outline-none">
                <img src={leftArrow} alt="Left Arrow" className="h-12 w-12" />
              </div>
              {/* 프론트엔드 선택 박스 */}
              <ChooseBox
                label="Frontend"
                imageUrl={front}
                isSelected={selectedPositions.includes('Frontend')}
                onClick={() => togglePosition('Frontend')} // zustand 스토어의 togglePosition 사용
              />

              {/* 백엔드 선택 박스 */}
              <ChooseBox
                label="Backend"
                imageUrl={back}
                isSelected={selectedPositions.includes('Backend')}
                onClick={() => togglePosition('Backend')} // zustand 스토어의 togglePosition 사용
              />
              {/* rightArrow */}
              <button
                onClick={handleRightArrowClick}
                className="focus:outline-none"
              >
                <img src={rightArrow} alt="Right Arrow" className="h-12 w-12" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingPage;
