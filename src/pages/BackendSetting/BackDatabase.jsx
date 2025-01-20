import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackStacksContext } from '../../context/backStacksContext'; // Context 임포트

import ChooseBox from '../../components/ChooseBox/ChooseBox';
import BackStep from '../../components/BackStep/BackStep';
import Layout from '../Layout';

import mysql from '../../assets/image/mysql.svg';
import postgresql from '../../assets/image/postgreSql.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const BackDatabase = () => {
  const navigate = useNavigate();
  const { back, addBack, removeBack } = useContext(BackStacksContext); // 전역 상태 사용
  const [selectedPosition, setSelectedPosition] = useState(null); // 선택된 데이터베이스

  useEffect(() => {
    // 컴포넌트가 마운트될 때, 이미 선택된 데이터베이스가 있다면 selectedPosition 상태를 설정
    const database = back.find((item) =>
      ['MySQL', 'PostgreSQL'].includes(item),
    );
    if (database) {
      setSelectedPosition(database); // 선택된 데이터베이스 설정
    }
  }, [back]);

  // back 배열이 변경될 때마다 콘솔에 출력
  useEffect(() => {
    console.log('Back Stacks:', back);
  }, [back]);

  const GoSettingcheck = () => {
    if (!selectedPosition) {
      alert('데이터베이스를 선택해주세요.');
      return;
    }
    // 다음 페이지로 이동
    navigate('/settingcheck'); // 원하는 경로로 수정하세요.
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (database) => {
    if (selectedPosition === database) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedPosition(null);
      removeBack(database); // 전역 상태에서 제거
    } else {
      // 새로운 항목 선택
      setSelectedPosition(database);

      // 기존 데이터베이스를 제거하고 새로운 데이터베이스 추가
      const existingDatabase = back.find((item) =>
        ['MySQL', 'PostgreSQL'].includes(item),
      );
      if (existingDatabase) {
        removeBack(existingDatabase); // 기존 데이터베이스 제거
      }
      addBack(database); // 새로운 데이터베이스 추가
    }
  };

  return (
    <Layout>
      <div className="mr-8 flex h-full w-full flex-col">
        <div className="w-full">
          <div className="ml-6 mr-6 px-6">
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
                className="h-12 w-12 cursor-pointer"
                onClick={GoSettingcheck}
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
