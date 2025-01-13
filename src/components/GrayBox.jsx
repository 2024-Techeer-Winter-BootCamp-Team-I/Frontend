import React, { useState } from 'react';

const GrayBox = () => {
    const [Tab, setTab] = useState('image'); // 기본 활성화 탭: 'image'

    const TabClick = (tab) => {
        setTab(tab);
    };

    return (
        <div
            className="
                w-[50rem] h-[28rem] bg-[#D9D9D9] rounded-[1.875rem]
                relative mt-[10.37rem] ml-[22.06rem] mr-[30.69rem] flex-shrink-0 z-[1]
            "
        >
            {/* 이미지보기 버튼 */}
            <div
                onClick={() => TabClick('image')}
                className={`
                    w-[6rem] h-[2rem] flex flex-col justify-center items-center absolute 
                    bottom-full right-[7.5rem] rounded-t-full cursor-pointer z-[0] flex-shrink-0
                    transition-all duration-300 ease-in-out
                    ${Tab === 'image' ? 'bg-[#485CF3] text-white' : 'bg-[#D9D9D9] text-black'}
                `}
            >
                <span
                    className="
                        text-center font-sans text-[0.7rem] font-bold leading-normal
                    "
                >
                    이미지보기
                </span>
            </div>

            {/* 코드보기 버튼 */}
            <div
                onClick={() => TabClick('code')}
                className={`
                    w-[6rem] h-[2rem] flex flex-col justify-center items-center absolute 
                    bottom-full right-[1.5rem] rounded-t-full cursor-pointer z-[0] flex-shrink-0
                    transition-all duration-300 ease-in-out
                    ${Tab === 'code' ? 'bg-[#485CF3] text-white' : 'bg-[#D9D9D9] text-black'}
                `}
            >
                <span
                    className="
                        text-center font-sans text-[0.7rem] font-bold leading-normal
                    "
                >
                    코드보기
                </span>
            </div>
        </div>
    );
};

export default GrayBox;
