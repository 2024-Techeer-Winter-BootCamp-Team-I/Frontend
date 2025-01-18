import { useState } from 'react';

const MultiViewBox = () => {
  const [activeTab, setActiveTab] = useState('image'); // 기본 활성화 탭: 'image'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative ml-48 mt-14 flex flex-col">
      {/* 아래에 깔린 그라데이션 사각형 */}
      <div className="relative h-[28rem] w-3/4 rounded-[1.875rem] bg-gradient-to-br from-[rgba(255,255,255,0.55)] via-[#7885E9] to-[#485CF3]">
        {/* 위에 올려진 내부 상자 */}
        <div className="absolute left-[0.125rem] top-[0.125rem] h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[1.875rem] bg-[#141414]" />

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
      </div>
    </div>
  );
};

export default MultiViewBox;
