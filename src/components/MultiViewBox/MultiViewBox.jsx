import { useState } from 'react';
import line from '../../assets/image/line.svg';

const MultiViewBox = () => {
  const [Tab, setTab] = useState('image'); // 기본 활성화 탭: 'image'

  const TabClick = (tab) => {
    setTab(tab);
  };

  return (
    <div className="relative ml-[7rem] flex h-screen w-full items-center justify-center">
      {/* 아래에 깔린 그라데이션 사각형 */}
      <div className="relative top-[-9rem] h-[28rem] w-[52rem] flex-shrink-0 rounded-[1.875rem] bg-[linear-gradient(310deg,_rgba(255,_255,_255,_0.55)_55%,_#7885E9_76%,_#485CF3_100%)]">
        <img src={line} alt="line" className="ml-20 mt-0" />

        {/* 위에 올려진 내부 상자 */}
        <div className="absolute left-[0.125rem] top-[0.125rem] z-[20] h-[27.75rem] w-[51.8rem] rounded-[1.875rem] bg-[#141414]" />
      </div>

      {/* 이미지보기 버튼 */}
      <div
        onClick={() => TabClick('image')}
        className={`absolute left-[55rem] top-[-1.8rem] z-[30] flex h-[2rem] w-[6rem] cursor-pointer flex-col items-center justify-center rounded-t-lg transition-all duration-300 ease-in-out ${Tab === 'image' ? 'bg-[#141414] text-white' : 'bg-[#1488FC] text-black'} `}
      >
        <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
          이미지보기
        </span>
      </div>

      {/* 코드보기 버튼 */}
      <div
        onClick={() => TabClick('code')}
        className={`absolute left-[61rem] top-[-1.8rem] z-[30] flex h-[2rem] w-[6rem] cursor-pointer flex-col items-center justify-center rounded-t-lg transition-all duration-300 ease-in-out ${Tab === 'code' ? 'bg-[#141414] text-white' : 'bg-[#1488FC] text-black'} `}
      >
        <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
          코드보기
        </span>
      </div>
    </div>
  );
};

export default MultiViewBox;
