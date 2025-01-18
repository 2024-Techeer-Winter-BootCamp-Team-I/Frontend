import ReactIcon from "../assets/image/react.svg"; // React 아이콘
import ViteIcon from "../assets/image/vite.svg"; // MySQL 아이콘
import NpmIcon from "../assets/image/npm.svg"; // NPM 아이콘
import SpringBootIcon from "../assets/image/springBoot.svg"; // Spring Boot 아이콘
import PnpmIcon from "../assets/image/pnpm.svg"; // PNPM 아이콘
import ChooseBox from "../components/ChooseBox/ChooseBox"; // ChooseBox 컴포넌트 불러오기

const Default = () => {
    return (
      <div className="flex flex-col items-center "> {/* mt- 클래스 추가 */}
        {/* 상단 텍스트 섹션 */}
        <div className="flex flex-col items-center space-y-2 text-center ">
          {/* "What do you want to Create?" 텍스트 */}
          <h1 className="text-[2rem] font-medium text-[#FFFFFF] ">What do you want to Create?</h1>
  
          {/* "Make API, ERD, DIAGRAM and Setting" 텍스트 */}
          <p className="text-[1rem] text-[#D9D9D9]">Make API, ERD, DIAGRAM and Setting</p>
        </div>
  
        {/* 네모박스 자리 */}
        <div className="flex space-x-20 my-5">
          <ChooseBox /> {/* ChooseBox 1 */}
          <ChooseBox /> {/* ChooseBox 2 */}
        </div>
  
        {/* 마지막 텍스트 섹션 */}
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* "We help setting using with many Tech Stacks" 텍스트 */}
          <p className="text-[1rem] text-[#D9D9D9]">We help setting using with many Tech Stacks</p>
        </div>
  
        {/* 아이콘 섹션 */}
        <div className="flex space-x-6 mt-1">
          <img src={ReactIcon} alt="React" className="w-[2.5rem] h-[2.5rem]" /> {/* React 아이콘 */}
          <img src={ViteIcon} alt="Vite" className="w-[2.5rem] h-[2.5rem]" /> {/* MySQL 아이콘 */}
          <img src={NpmIcon} alt="NPM" className="w-[2.5rem] h-[2.5rem]" /> {/* NPM 아이콘 */}
          <img src={SpringBootIcon} alt="Spring Boot" className="w-[2.5rem] h-[2.5rem]" /> {/* Spring Boot 아이콘 */}
          <img src={PnpmIcon} alt="PNPM" className="w-[2.5rem] h-[2.5rem]" /> {/* PNPM 아이콘 */}
        </div>
      </div>
    );
  };
  
  export default Default;
  