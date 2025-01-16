import React, { useState } from 'react';

const MultiViewBox = () => {
    const [Tab, setTab] = useState('image'); // 기본 활성화 탭: 'image'

    const TabClick = (tab) => {
        setTab(tab);
    };

    return (
        <div
            className="
                w-[50rem] h-[28rem] bg-[#D9D9D9] rounded-[1.875rem]
                absolute top-[13.2rem] left-[28.06rem] right-[30.6rem] flex-shrink-0 z-[20]  // Increase z-index to 20
            "
        >
            {/* 이미지보기 버튼 */}
            <div
                onClick={() => TabClick('image')}
                className={`
                    w-[6rem] h-[2rem] flex flex-col justify-center items-center absolute 
                    bottom-full right-[7.5rem] rounded-t-full cursor-pointer z-[30]  // Increase z-index to 30
                    flex-shrink-0
                    transition-all duration-300 ease-in-out
                    ${Tab === 'image' ? 'bg-[#D9D9D9] text-black' : 'bg-blue-main text-white'}
                `}
            >
                <span
                    className="text-center font-sans text-[0.7rem] font-bold leading-normal"
                >
                    이미지보기
                </span>
            </div>

            {/* 코드보기 버튼 */}
            <div
                onClick={() => TabClick('code')}
                className={`
                    w-[6rem] h-[2rem] flex flex-col justify-center items-center absolute 
                    bottom-full right-[1.5rem] rounded-t-full cursor-pointer z-[30]  // Increase z-index to 30
                    flex-shrink-0
                    transition-all duration-300 ease-in-out
                    ${Tab === 'code' ? 'bg-[#D9D9D9] text-black' : 'bg-blue-main text-white'}
                `}
            >
                <span
                    className="text-center font-sans text-[0.7rem] font-bold leading-normal"
                >
                    코드보기
                </span>
            </div>
        </div>
    );
};

export default MultiViewBox;
