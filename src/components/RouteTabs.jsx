import React from "react";
import Icon1 from "../assets/image/icon1.svg"; // icon1.svg
import Icon2 from "../assets/image/icon2.svg"; // icon2.svg
import Icon3 from "../assets/image/icon3.svg"; // icon3.svg
import Icon4 from "../assets/image/icon4.svg"; // icon4.svg
import Icon5 from "../assets/image/icon5.svg"; // icon5.svg
import Icon6 from "../assets/image/icon6.svg"; // icon6.svg
import GithubIcon from "../assets/image/github.svg"; // github.svg

const RouteTab = () => {
  return (
    <div className="w-[15rem] bg-[#171717] transition-all duration-300 ease-in-out h-screen"> {/* h-screen 추가 */}
      {/* 메인 박스 */}
      <div className="h-[83%] bg-[#171717] border-b border-[#6F6E6E] flex flex-col">
        {/* DevSketch 로고 추가 (왼쪽 상단) */}
        <div className="text-[1.5rem] text-[#FFFFFF] font-medium p-6">DevSketch</div> {/* 로고 추가 및 패딩 조정 */}

        {/* 아이콘과 텍스트 섹션 (중앙 정렬) */}
        <div className="flex flex-col space-y-6 justify-center flex-grow pl-4"> {/* flex-grow 추가 */}
          {/* 정보 입력 */}
          <div className="flex items-center space-x-4">
            <img src={Icon1} alt="Icon1" className="w-[1rem] h-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">정보 입력</p>
          </div>
          {/* 기능명세 */}
          <div className="flex items-center space-x-4">
            <img src={Icon2} alt="Icon2" className="w-[1rem] h-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">기능명세</p>
          </div>
          {/* 설계 */}
          <div className="flex items-center space-x-4">
            <img src={Icon3} alt="Icon3" className="w-[1rem] h-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">설계</p>
          </div>
          {/* 세팅 시작 */}
          <div className="flex items-center space-x-4">
            <img src={Icon4} alt="Icon4" className="w-[1rem] h-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">세팅 시작</p>
          </div>
          {/* 세팅 확인 */}
          <div className="flex items-center space-x-4">
            <img src={Icon5} alt="Icon5" className="w-[1rem] h-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">세팅 확인</p>
          </div>
        </div>
      </div>

      {/* 마이페이지 박스 */}
      <div className="h-[7%] bg-[#000000] border-b border-[#6F6E6E] flex flex-col space-y-2 justify-center flex-grow pl-4"> {/* flex, items-center, justify-center 추가 */}
        <div className="flex items-center space-x-4">
          <img src={Icon6} alt="Icon6" className="w-[1rem] h-[1rem]" />
          <p className="text-[0.8rem] text-[#FFFFFF] font-sfpro">마이페이지</p>
        </div>
      </div>

      {/* 회원정보 박스 */}
      <div className="h-[10%] bg-[#171717] flex flex-col space-y-2 justify-center flex-grow pl-4"> {/* flex, items-center, justify-center 추가 */}
        <div className="flex items-center space-x-4">
          <img src={GithubIcon} alt="GitHub" className="w-[1rem] h-[1rem]" />
          <p className="text-[1rem] text-[#FFFFFF] font-sfpro">kimyeeun21</p>
        </div>
      </div>
    </div>
  );
};

export default RouteTab;