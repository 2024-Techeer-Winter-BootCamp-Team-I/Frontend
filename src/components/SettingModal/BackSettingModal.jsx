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
      <div className="z-10 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">선택된 백엔드 기술 스택</h2>
        <ul className="space-y-2">
          <li>
            <strong>프레임워크:</strong> {selectedFramework || '선택되지 않음'}
          </li>
          <li>
            <strong>데이터베이스:</strong> {selectedDatabase || '선택되지 않음'}
          </li>
        </ul>
        <button
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          onClick={handleClose} // handleClose로 변경
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default BackSettingModal;
