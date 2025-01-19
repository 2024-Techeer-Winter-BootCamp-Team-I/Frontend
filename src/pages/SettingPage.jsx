import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox/ChooseBox';

import Layout from './Layout';

import front from '../assets/image/front.svg';
import back from '../assets/image/back.svg';

const SettingPage = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (position) => {
    setSelectedPosition(position);

    // 선택된 포지션에 따라 페이지 이동
    if (position === 'Frontend') {
      navigate('/frontpackage'); // 프론트엔드 선택 시 이동
    } else if (position === 'Backend') {
      navigate('/backframework'); // 백엔드 선택 시 이동
    }
  };

  return (
    <Layout>
      <div className="mt-0 flex h-full w-full flex-col">
        {/* 오른쪽 컨테이너 */}
        <div className="ml-auto mr-auto flex h-full flex-col rounded-lg p-6">
          <div className="w-full">
            <p className="mb-3 font-sans text-lg text-white">프로젝트 입력창</p>
            <input
              className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-800 bg-opacity-50 p-3 text-white"
              placeholder="Ex. DevSketch"
            />

            <p className="mt-10 font-sans text-lg text-white">
              프로젝트 세팅할 포지션(중복불가)
            </p>

            <div className="mt-3 flex w-full max-w-2xl justify-center gap-8">
              {/* 프론트엔드 선택 박스 */}
              <ChooseBox
                label="Frontend"
                imageUrl={front}
                isSelected={selectedPosition === 'Frontend'}
                onClick={() => handleChooseBoxClick('Frontend')}
              />

              {/* 백엔드 선택 박스 */}
              <ChooseBox
                label="Backend"
                imageUrl={back}
                isSelected={selectedPosition === 'Backend'}
                onClick={() => handleChooseBoxClick('Backend')}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingPage;
