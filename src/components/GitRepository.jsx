import React, { useState } from "react";
import GithubIcon from "../assets/image/Github.svg"; // SVG 파일 import
import Button from "./Button/Button"

const GitRepository = () => {
  const [activeButton, setActiveButton] = useState(null); // 현재 활성화된 버튼 상태
  const [innerCircleActive, setInnerCircleActive] = useState(false); // 내부 원(circle) 활성화 상태



  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // "CREATE" 버튼 클릭 시 동작
  const handleCreateClick = () => {
    console.log("업로드되었습니다");
  };

  // 내부 원 활성화/비활성화 토글 함수
  const toggleInnerCircle = () => {
    setInnerCircleActive(!innerCircleActive);
  };

  return (
    <div className="flex pt-14 items-center justify-center">
      <div>
        {/* 제목 텍스트 */}
        <div className="relative left-[8rem] text-white text-[1.1rem] font-sans font-[100rem] break-words mb-[1rem]">
          깃허브에 업로드하기
        </div>

        {/* 아이콘과 메인 컴포넌트가 들어가는 컨테이너 */}
        <div className="flex items-center space-x-[1.25rem]">
          {/* GitHub 아이콘 섹션 */}
          <div className="w-[5rem] h-[5rem] flex items-center justify-center">
            <img src={GithubIcon} alt="GitHub Logo" className="w-full h-full" />
          </div>

          {/* 메인 컴포넌트 */}
          <div className="w-[46rem] h-[9rem] bg-[#F1EDED] rounded-[0.75rem] flex">
            {/* 왼쪽 섹션 */}
            <div className="w-[10rem] flex flex-col justify-center items-start pl-[2rem] space-y-[0.75rem]">
              {["REPOSITORY", "PUSH", "IDE"].map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => handleButtonClick(buttonName)} // 버튼 클릭 이벤트 처리
                  className={`text-[0.9rem] font-[590] font-sans ${
                    activeButton === buttonName
                      ? "text-[#1488FC]" // 활성화된 버튼 색상
                      : "text-[#545353]" // 비활성화된 버튼 색상
                  }`}
                >
                  {buttonName}
                </button>
              ))}
            </div>

            {/* 구분선 */}
            <div className="w-[0.0625rem] bg-black-800"></div>

            {/* 오른쪽 섹션 */}
            <div className="w-[40.4375rem] flex flex-col justify-center pl-[1rem] space-y-[0.7rem]">
              {/* 타이틀 행 */}
              <div className="flex items-center space-x-[0.7rem]">
                {/* 토글 버튼 */}
                <div
                  onClick={toggleInnerCircle}
                  className="relative w-[1.5rem] h-[1.5rem] cursor-pointer"
                >
                  <div className="absolute w-[1.5rem] h-[1.5rem] bg-[#1488FC] rounded-full" />
                  <div className="absolute w-[1.21875rem] h-[1.21875rem] bg-[#D9D9D9] rounded-full left-[0.14rem] top-[0.14rem]" />
                  <div
                    className={`absolute w-[1rem] h-[1rem] rounded-full left-[0.25rem] top-[0.25rem] ${
                      innerCircleActive ? "bg-[#1488FC]" : "bg-[#D9D9D9]"
                    }`}
                  />
                </div>
                <h3 className="text-[1rem] font-medium">Create New Repository</h3>
              </div>

              {/* 입력 필드 */}
              <div className="flex gap-[1rem] pl-[1rem] pr-[1rem]"> {/* 오른쪽 패딩 추가 */}
                <select className="flex-1 h-[2.2rem] rounded-md border border-gray-300 px-[0.5rem]">
                  <option>Organization Name</option>
                </select>
                <input
                  type="text"
                  placeholder="Repository Name"
                  className="flex-1 h-[2.2rem] rounded-md border border-gray-300 px-[1rem] mr-[1rem]" // 오른쪽 마진 추가
                />
              </div>

              {/* "CREATE" 버튼 */}
              <div className="flex justify-end pr-[2rem]"> {/* 오른쪽 패딩 추가 */}

                <Button size="small" label="create" color="primary" onclick={handleClick}/>              

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitRepository;