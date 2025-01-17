import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox/ChooseBox';

import BackStep from '../components/BackStep/BackStep';
import mysql from '../assets/image/mySql.svg';
import postgresql from '../assets/image/postgreSql.svg';

const BackDatabase = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  // 수정
  const GoFrontBuild = () => {
    navigate('/frontbuild');
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (position) => {
    if (selectedPosition === position) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
    } else {
      // 새로운 항목 선택
      setSelectedPosition(position);
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-start bg-black">
      <div className="w-full py-6">
        <div className="ml-auto mr-auto max-w-2xl px-6">
          <BackStep />
        </div>
      </div>

      <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
        <div className="mb-0 w-full">
          <div className="mt-6 flex w-full max-w-2xl justify-center gap-8">
            {/* MySQL */}
            <ChooseBox
              label="MySQL"
              imageUrl={mysql}
              isSelected={selectedPosition === 'MySQL'}
              onClick={() => handleChooseBoxClick('MySQL')}
              description={
                '오픈 소스 관계형 데이터베이스로, 속도와 단순함을 중시하며 웹 애플리케이션에 자주 사용'
              }
            />

            {/* PostgreSQL */}
            <ChooseBox
              label="PostgreSQL"
              imageUrl={postgresql}
              isSelected={selectedPosition === 'PostgreSQL'}
              onClick={() => handleChooseBoxClick('PostgreSQL')}
              description={
                '오픈 소스 객체-관계형 데이터베이스로, 높은 확장성과 표준 준수, 복잡한 쿼리 및 데이터 무결성을 지원'
              }
            />
          </div>
        </div>
      </div>

      {/* SettingButton 컨테이너를 독립적으로 분리 */}
      <div className="w-full py-6">
        <div className="ml-auto mr-auto mt-auto flex w-full max-w-2xl justify-end pt-10">
          <SettingButton text="다음" onClick={GoFrontBuild} />
        </div>
      </div>
    </div>
  );
};

// 버튼 컴포넌트
const SettingButton = ({ text, onClick }) => {
  return (
    <button
      className="h-[3rem] w-[10rem] rounded-[0.7rem] bg-[#1488FC] text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BackDatabase;
