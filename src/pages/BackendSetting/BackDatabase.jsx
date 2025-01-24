import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBackStore from '../../store/useBackStore';
import BackSettingModal from '../../components/SettingModal/BackSettingModal';
import ChooseBox from '../../components/ChooseBox/ChooseBox';
import Layout from '../Layout';
import BackStep from '../../components/BackStep/BackStep';

import mysql from '../../assets/image/mySql.svg';ya
import postgresql from '../../assets/image/postgreSql.svg';
import sqLite3 from '../../assets/image/sqLite3.svg';

import rightArrow from '../../assets/image/rightArrow.svg';
import leftArrow from '../../assets/image/leftArrow.svg';

const BackDatabase = () => {
  const navigate = useNavigate();
  const { selectedDatabase, setSelectedDatabase } = useBackStore(); // Zustand 스토어에서 상태와 함수 가져오기

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const currentState = useBackStore.getState();
    console.log('Current State:', currentState);
  }, [selectedDatabase]);

  // 다음 페이지로 이동하는 함수
  const GoNextPage = () => {
    // 선택된 데이터베이스가 없으면 경고 메시지 표시
    if (!selectedDatabase) {
      alert('데이터베이스를 선택해주세요.');
      return;
    }

    // 모달창 띄우기
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    navigate('/settingcheck');
  };

  // ChooseBox 클릭 시 호출되는 함수
  const handleChooseBoxClick = (database) => {
    if (selectedDatabase === database) {
      // 이미 선택된 항목을 다시 클릭하면 선택 해제
      setSelectedDatabase(null);
    } else {
      // 새로운 항목 선택
      setSelectedDatabase(database);
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
              <img
                src={leftArrow}
                alt="Previous"
                className="h-12 w-12 cursor-pointer"
                onClick={() => navigate(-1)} // 이전 페이지로 이동
                title="Previous Page"
              />

              {/* 데이터베이스 선택 박스 */}
              <ChooseBox
                label="MySQL"
                imageUrl={mysql}
                isSelected={selectedDatabase === 'MySQL'}
                onClick={() => handleChooseBoxClick('MySQL')}
                description={'오픈 소스 관계형 데이터베이스 관리 시스템'}
              />
              <ChooseBox
                label="PostgreSQL"
                imageUrl={postgresql}
                isSelected={selectedDatabase === 'PostgreSQL'}
                onClick={() => handleChooseBoxClick('PostgreSQL')}
                description={'오픈 소스 객체-관계형 데이터베이스 시스템'}
              />
              <ChooseBox
                label="SQLite3"
                imageUrl={sqLite3}
                isSelected={selectedDatabase === 'SQLite3'}
                onClick={() => handleChooseBoxClick('SQLite3')}
                description={
                  '경량의 파일 기반 데이터베이스로, 서버 없이도 사용 가능한 임베디드 DBMS'
                }
              />
              <img
                src={rightArrow}
                alt="Next"
                className="h-12 w-12 cursor-pointer"
                onClick={GoNextPage} // 다음 페이지로 이동
                title="Next Page"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BackSettingModal 컴포넌트 */}
      <BackSettingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </Layout>
  );
};

export default BackDatabase;
