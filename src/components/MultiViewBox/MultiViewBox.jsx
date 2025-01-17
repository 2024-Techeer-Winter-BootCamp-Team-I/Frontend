import React, { useState } from 'react';
import line from '../../assets/image/line.svg';

const MultiViewBox = () => {
    const [Tab, setTab] = useState('image'); // 기본 활성화 탭: 'image'

    const TabClick = (tab) => {
        setTab(tab);
    };

    return (
        <div className="flex h-screen w-full items-center  ml-[16rem] relative">
            {/* 아래에 깔린 그라데이션 사각형 */}
            <div className="relative h-[28rem] w-[52rem] flex-shrink-0 rounded-[1.875rem] bg-[linear-gradient(310deg,_rgba(255,_255,_255,_0.55)_55%,_#7885E9_76%,_#485CF3_100%)] top-[-9rem]">
                <img src={line} alt="line" className="ml-20 mt-0" />

                {/* 위에 올려진 내부 상자 */}
                <div className="absolute left-[0.125rem] top-[0.125rem] z-[20] h-[27.75rem] w-[51.8rem] rounded-[1.875rem] bg-[#141414]" />
            </div>

            {/* 이미지보기 버튼 */}
            <div
                onClick={() => TabClick('image')}
                className={`
                    w-[6rem] h-[2rem] flex flex-col justify-center items-center 
                    absolute top-[-1.8rem] left-[3rem] rounded-t-lg cursor-pointer z-[30]
                    transition-all duration-300 ease-in-out
                    ${Tab === 'image' ? 'bg-[#141414] text-white' : 'bg-[#1488FC] text-black'}
                `}
            >
                <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
                    이미지보기
                </span>
            </div>

            {/* 코드보기 버튼 */}
            <div
                onClick={() => TabClick('code')}
                className={` 
                    w-[6rem] h-[2rem] flex flex-col justify-center items-center 
                    absolute top-[-1.8rem] left-[9rem] rounded-t-lg cursor-pointer z-[30]
                    transition-all duration-300 ease-in-out
                    ${Tab === 'code' ? 'bg-[#141414] text-white' : 'bg-[#1488FC] text-black'}
                `}
            >
                <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
                    코드보기
                </span>
            </div>
        </div>
    );
};

export default MultiViewBox;