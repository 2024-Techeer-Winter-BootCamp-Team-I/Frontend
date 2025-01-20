import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // framer-motion 추가

import ReactIcon from '../assets/image/react.svg'; // React 아이콘
import ViteIcon from '../assets/image/vite.svg'; // MySQL 아이콘
import NpmIcon from '../assets/image/npm.svg'; // NPM 아이콘
import SpringBootIcon from '../assets/image/springBoot.svg'; // Spring Boot 아이콘
import PnpmIcon from '../assets/image/pnpm.svg'; // PNPM 아이콘
import ChooseBox from '../components/ChooseBox/ChooseBox'; // ChooseBox 컴포넌트 불러오기

import design from '../assets/image/design.svg';
import setting from '../assets/image/setting.svg';

const Default = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 정보를 가져오기 위해 useLocation 사용
  const [selectedPage, setSelectedPage] = useState(null);

  // ChooseBox 클릭 시 호출되는 함수
  const handleBoxClick = (page) => {
    if (selectedPage === page) {
      setSelectedPage(null);
    } else {
      setSelectedPage(page);

      // 0.5초 후에 페이지 이동 (애니메이션을 위한 딜레이)
      setTimeout(() => {
        if (page === 'input') {
          navigate('/input'); // 설계 선택 시 이동
        } else if (page === 'Setting') {
          navigate('/setting'); // 세팅 선택 시 이동
        }
      }, 500); // 0.5초 딜레이
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // 경로를 기준으로 애니메이션 키 설정
        initial={{ opacity: 0, y: -50 }} // 초기 상태: 위에서 아래로 이동
        animate={{ opacity: 1, y: 0 }} // 애니메이션 상태: 원래 위치로
        exit={{ opacity: 0, y: -50 }} // 페이지 나갈 때 상태: 위로 사라짐
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간
        className="flex min-h-screen flex-col items-center"
      >
        <h1 className="mb-5 text-[40px] font-bold text-white">
          What do you want to Create?
        </h1>
        <p className="mb-12 text-sm text-gray-400">
          Make API, ERD, DIAGRAM and Setting
        </p>

        {/* 선택박스 컨테이너 */}
        <div className="flex items-center justify-center gap-16">
          {/* 설계 페이지 선택 */}
          <ChooseBox
            label="설계"
            imageUrl={design}
            isSelected={selectedPage === 'input'}
            onClick={() => handleBoxClick('input')}
            description={'API, ERD, DIAGRAM 만들기'}
          />

          {/* 세팅 페이지 선택 */}
          <ChooseBox
            label="세팅"
            imageUrl={setting}
            isSelected={selectedPage === 'Setting'}
            onClick={() => handleBoxClick('Setting')}
            description={'초기 세팅하러가기'}
          />
        </div>

        {/* 마지막 텍스트 섹션 */}
        <div className="mt-8 flex flex-col items-center space-y-4 text-center">
          <p className="text-[1rem] text-[#D9D9D9]">
            We help setting using with many Tech Stacks
          </p>
        </div>

        {/* 아이콘 섹션 */}
        <div className="mt-2 flex space-x-6">
          <img src={ReactIcon} alt="React" className="h-[2.5rem] w-[2.5rem]" />
          <img src={ViteIcon} alt="Vite" className="h-[2.5rem] w-[2.5rem]" />
          <img src={NpmIcon} alt="NPM" className="h-[2.5rem] w-[2.5rem]" />
          <img
            src={SpringBootIcon}
            alt="Spring Boot"
            className="h-[2.5rem] w-[2.5rem]"
          />
          <img src={PnpmIcon} alt="PNPM" className="h-[2.5rem] w-[2.5rem]" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Default;
