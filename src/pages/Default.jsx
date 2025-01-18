import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ReactIcon from '../assets/image/react.svg'; // React 아이콘
import ViteIcon from '../assets/image/vite.svg'; // MySQL 아이콘
import NpmIcon from '../assets/image/npm.svg'; // NPM 아이콘
import SpringBootIcon from '../assets/image/springBoot.svg'; // Spring Boot 아이콘
import PnpmIcon from '../assets/image/pnpm.svg'; // PNPM 아이콘
import ChooseBox from '../components/ChooseBox/ChooseBox'; // ChooseBox 컴포넌트 불러오기

import design from '../assets/image/design.svg';
import setting from '../assets/image/setting.svg';

import rightArrow from '../assets/image/rightArrow.svg';

const Default = () => {
  // 경로 이동 함수
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState(null);

  // 세팅 페이지로 이동하는 함수
  const GoPage = () => {
    if (selectedPage === 'input') {
      navigate('/input'); // 설계 선택 시 이동
    } else if (selectedPage === 'Setting') {
      navigate('/setting'); // 세팅 선택 시 이동
    } else {
      alert('설계 또는 세팅을 선택해주세요.'); // 선택되지 않은 경우 경고
    }
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleBoxClick = (page) => {
    if (selectedPage === page) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPage(null);
    } else {
      // 새로운 항목 선택
      setSelectedPage(page);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="mb-3 text-[40px] font-bold text-white">
        What do you want to Create?
      </h1>
      <p className="mb-10 text-sm text-gray-400">
        Make API, ERD, DIAGRAM and Setting
      </p>

      {/* 선택박스 컨테이너 */}
      <div className="my-5 flex items-center justify-center gap-16">
        {/* 정렬을 맞추기 위한 투명 화살표 */}
        <div className="mb-auto mr-auto mt-auto flex w-full max-w-2xl opacity-0">
          {/* rightArrow.svg를 클릭하면 선택한 페이지로 이동 */}
          <img src={rightArrow} alt="." className="h-12 w-12 cursor-pointer" />
        </div>

        {/* 설계 페이지 선택 */}
        <ChooseBox
          label="Design"
          imageUrl={design}
          isSelected={selectedPage === 'input'}
          onClick={() => handleBoxClick('input')}
        />

        {/* 세팅 페이지 선택 */}
        <ChooseBox
          label="Setting"
          imageUrl={setting}
          isSelected={selectedPage === 'Setting'}
          onClick={() => handleBoxClick('Setting')}
        />

        <div className="mb-auto ml-auto mr-auto mt-auto flex w-full max-w-2xl">
          {/* rightArrow.svg를 클릭하면 선택한 페이지로 이동 */}
          <img
            src={rightArrow}
            alt="Next"
            className="h-12 w-12 cursor-pointer"
            onClick={GoPage}
          />
        </div>
      </div>

      {/* 마지막 텍스트 섹션 */}
      <div className="mt-10 flex flex-col items-center space-y-4 text-center">
        {/* "We help setting using with many Tech Stacks" 텍스트 */}
        <p className="text-[1rem] text-[#D9D9D9]">
          We help setting using with many Tech Stacks
        </p>
      </div>

      {/* 아이콘 섹션 */}
      <div className="mt-2 flex space-x-6">
        <img src={ReactIcon} alt="React" className="h-[2.5rem] w-[2.5rem]" />
        {/* React 아이콘 */}
        <img src={ViteIcon} alt="Vite" className="h-[2.5rem] w-[2.5rem]" />
        {/* MySQL 아이콘 */}
        <img src={NpmIcon} alt="NPM" className="h-[2.5rem] w-[2.5rem]" />
        {/* NPM 아이콘 */}
        <img
          src={SpringBootIcon}
          alt="Spring Boot"
          className="h-[2.5rem] w-[2.5rem]"
        />
        {/* Spring Boot 아이콘 */}
        <img src={PnpmIcon} alt="PNPM" className="h-[2.5rem] w-[2.5rem]" />
        {/* PNPM 아이콘 */}
      </div>
    </div>
  );
};

export default Default;
