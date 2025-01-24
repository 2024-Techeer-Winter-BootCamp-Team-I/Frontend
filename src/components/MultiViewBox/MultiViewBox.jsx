import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import SaveIcon from '../../assets/image/save.svg'; // save.svg를 경로에 맞게 임포트

const MultiViewBox = () => {
  const [activeTab, setActiveTab] = useState('image'); // 기본 활성화 탭: 'image'
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSaveClick = () => {
    // 저장 로직 구현
    console.log('저장 클릭');
  };

  return (
    <div className="relative ml-48 mt-14 flex flex-col">
      {/* 아래에 깔린 그라데이션 사각형 */}
      <div className="relative h-[28rem] w-3/4 rounded-[1.875rem] bg-gradient-to-br from-[rgba(255,255,255,0.55)] via-[#7885E9] to-[#485CF3]">
        {/* 위에 올려진 내부 상자 */}
        <div className="absolute left-[0.125rem] top-[0.125rem] h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[1.875rem] bg-[#141414]" />

        {/* 오른쪽 상단 저장 아이콘 */}
        <div className="absolute right-4 top-4 cursor-pointer" onClick={handleSaveClick}>
          <img src={SaveIcon} alt="Save" className="w-6 h-6" />
        </div>

        {/* 버튼 컨테이너 */}
        <div className="absolute left-[0.125rem] top-[-2rem] z-[30] ml-5 flex gap-0">
          {/* 이미지보기 버튼 */}
          <div
            onClick={() => handleTabClick('image')}
            className={`flex h-[2rem] w-[6rem] cursor-pointer flex-col items-center justify-center rounded-t-lg transition-all duration-300 ease-in-out ${
              activeTab === 'image'
                ? 'bg-[#141414] text-white'
                : 'bg-[#1488FC] text-black'
            }`}
          >
            <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
              이미지보기
            </span>
          </div>

          {/* 코드보기 버튼 */}
          <div
            onClick={() => handleTabClick('code')}
            className={`flex h-[2rem] w-[6rem] cursor-pointer flex-col items-center justify-center rounded-t-lg transition-all duration-300 ease-in-out ${
              activeTab === 'code'
                ? 'bg-[#141414] text-white'
                : 'bg-[#1488FC] text-black'
            }`}
          >
            <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
              코드보기
            </span>
          </div>
        </div>

        {/* 이전으로 버튼 (왼쪽 끝) */}
        <div className="absolute left-0 top-[31rem] transform -translate-y-1/2 ml-4 z-20">
          <Button
            label="이전으로"
            size="small"
            color="primary"
            onClick={() => navigate('/specific')} // /specific 경로로 이동
          />
        </div>

        {/* 확인 버튼 (오른쪽 끝) */}
        <div className="absolute right-0 top-[31rem] transform -translate-y-1/2 mr-4 z-20">
          <Button
            label="세팅"
            size="small"
            color="primary"
            onClick={() => navigate('/setting')}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiViewBox;
