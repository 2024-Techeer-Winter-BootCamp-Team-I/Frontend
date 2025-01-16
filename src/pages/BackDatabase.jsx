import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChooseBox from '../components/ChooseBox';
import Frame from '../components/Frame';
import BackendStepper from '../components/BackendStepper';
import mySql from '../assets/image/mySql.svg';
import postgreSql from '../assets/image/postgreSql.svg';
import Layout from '../components/Layout';

const BackendDatabase = () => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);

  const handleSettingButtonClick = () => {
    navigate('/next-page');
  };

  const handleBoxClick = (title) => {
    setSelectedBox(title);
  };

  return (
    <Layout>
      <div className="flex h-full flex-col justify-start p-5">
        {/* 그리드 레이아웃 */}
        <div className="mx-auto grid w-full grid-cols-[250px_auto] gap-8">
          {/* 왼쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-center rounded-lg p-4">
            {/* 왼쪽 컨테이너에 추가할 내용이 있다면 여기에 배치 */}
            <p className="text-center text-gray-700">왼쪽 컨테이너</p>
          </div>

          {/* 오른쪽 컨테이너 */}
          <div className="flex flex-col items-center justify-start rounded-lg p-6 shadow-md">
            <div className="mb-8 w-full">
              <BackendStepper PcurrentPage={1} />{' '}
              {/* 현재 페이지 번호를 1로 설정 */}
            </div>

            <div className="flex w-full max-w-2xl flex-wrap justify-center gap-8">
              <ChooseBox
                className="min-w-0 flex-1"
                title="MySQL"
                color="border-blue-main"
                backColor="bg-black-background"
                imageUrl={mySql}
                isSelected={selectedBox === 'MySQL'}
                onClick={() => handleBoxClick('MySQL')}
                description="오픈 소스 관계형 데이터베이스로, 속도와 단순함을 중시하며 웹 애플리케이션에 자주 사용됨"
              />

              <ChooseBox
                className="min-w-0 flex-1 whitespace-pre-line"
                title="PostgreSQL"
                color="border-blue-main"
                backColor="bg-black-background"
                imageUrl={postgreSql}
                isSelected={selectedBox === 'PostgreSQL'}
                onClick={() => handleBoxClick('PostgreSQL')}
                description="오픈 소스 객체-관계형 데이터베이스로, 높은 확장성과 표준 준수, 복잡한 쿼리 및 데이터 무결성을 지원함"
              />
            </div>

            <div className="mt-8 flex w-full max-w-2xl justify-end">
              <SettingButton
                text="완료"
                onClick={handleSettingButtonClick}
                className="justify-end"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// 버튼 컴포넌트
const SettingButton = ({ text, onClick }) => {
  return (
    <button
      className="h-[3rem] w-[10rem] rounded-[1rem] bg-blue-main text-sm font-semibold text-white transition-colors hover:bg-[#3a4ac2]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BackendDatabase;
