import React, { useState } from 'react';

const Button = () => {
    const [isSaved, setIsSaved] = useState(false);

    const handleClick = () => {
        setIsSaved(true); // 버튼 텍스트를 "저장 완료"로 변경

        // 0.5초 후 다시 "저장"으로 변경
        setTimeout(() => {
            setIsSaved(false);
        }, 500);
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="
                    w-[10rem] h-[2.3rem] bg-[#1488FC] text-white border-none
                    rounded-lg text-lg font-bold cursor-pointer
                    flex items-center justify-center transition-all
                    duration-300 ease-in-out
                    absolute top-[40rem] left-[72rem] right-[30rem] flex-shrink-0 z-[0]
                "
            >
                {isSaved ? "저장 완료" : "저장"}
            </button>
        </div>
    );
};

export default Button;
