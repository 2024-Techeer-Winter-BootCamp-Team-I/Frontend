import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ChooseBox from '../components/ChooseBox/ChooseBox';
import Layout from './Layout';
import BackStep from '../components/BackStep/BackStep';

import mysql from '../assets/image/mySql.svg';
import postgresql from '../assets/image/postgreSql.svg';

import leftArrow from '../assets/image/leftArrow.svg';
import rightArrow from '../assets/image/rightArrow.svg';

const BackDatabase = () => {
  const navigate = useNavigate();
  const [selectedPosition, setSelectedPosition] = useState(null);

  // 수정
  const GoBackMODIFIED = () => {
    navigate('/back-database');
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
    <Layout>
      <div className="flex h-full w-full flex-col justify-start">
        <div className="w-full py-6">
          <div className="ml-auto mr-auto max-w-2xl px-6">
            <BackStep />
          </div>
        </div>

        <div className="ml-auto mr-auto flex h-full flex-col items-center justify-center rounded-lg p-6">
          <div className="mb-0 w-full">
            <div className="mt-6 flex w-full max-w-2xl items-center justify-center gap-8">
              {/* 왼쪽 화살표 */}
              <img
                src={leftArrow}
                alt="Previous"
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate(-1)} // 이전 페이지로 이동
                title="Previous Page"
              />
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
              {/* 오른쪽 화살표 */}
              <img
                src={rightArrow}
                alt="Next"
                className="ml-auto mr-auto h-12 w-12 cursor-pointer"
                onClick={GoBackMODIFIED}
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BackDatabase;
