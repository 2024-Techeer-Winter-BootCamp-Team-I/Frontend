import React from 'react';
import useBackStore from '../../store/useBackStore';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

const BackSettingModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // Zustand 스토어에서 백엔드 상태만 가져오기 (단일 값 반환)
  const selectedFramework = useBackStore((state) => state.selectedFramework);
  const selectedDatabase = useBackStore((state) => state.selectedDatabase);

  // 모달이 열리지 않았으면 null 반환
  if (!isOpen) return null;

  // 닫기 버튼 클릭 시 실행되는 함수
  const handleClose = () => {
    onClose(); // 모달 닫기
    navigateToNextPage(); // 다음 페이지로 이동
  };

  // 다음 페이지로 이동하는 함수
  const navigateToNextPage = () => {
    navigate('/settingcheck'); // 세팅 확인 페이지로 이동
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose} // handleClose로 변경
      ></div>

      {/* 모달 내용 */}
      <div className="z-10 rounded-lg bg-[#161A23] shadow-lg w-[30rem] h-[20rem] mt-[6rem] border border-[#d9d9d9] border-[0.5px]">
        <h2 className="mb-8 text-[1.4rem] mt-[1.5rem] font-semibold text-center text-[#EDEDED]">백엔드 기술 스택</h2>
        <ul className="space-y-4">
          <li className="mt-[4rem]">
          <strong className="text-[#EDEDED] font-bold ml-[2rem]">프레임워크 :</strong>{' '}
          <span className="text-gray-300 text-[1.1rem] font-medium">{selectedFramework || '선택되지 않음'}</span>
          </li>
          <li>
          <strong className="text-[#EDEDED] font-bold ml-[2rem]">데이터베이스 :</strong>{' '}
          <span className="text-gray-300 text-[1.1rem] font-medium">{selectedDatabase || '선택되지 않음'}</span>
          </li>
        </ul>
        <button
          className="mt-16 ml-[24rem] w-[5.2rem] rounded-[0.25rem] bg-[#33598B] px-4 py-2 text-white font-medium hover:bg-[#78A0D4]"
          onClick={handleClose} // handleClose로 변경
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default BackSettingModal;
