import useFrontStore from '../../store/useFrontStore';
import useSettingStore from '../../store/useSettingStore'; // useSettingStore 추가
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

const FrontStackModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // Zustand 스토어에서 프론트엔드 상태만 가져오기 (단일 값 반환)
  const selectedPackage = useFrontStore((state) => state.selectedPackage);
  const selectedBuildTool = useFrontStore((state) => state.selectedBuildTool);
  const selectedFramework = useFrontStore((state) => state.selectedFramework);
  const selectedLanguage = useFrontStore((state) => state.selectedLanguage);
  const selectedPositions = useSettingStore((state) => state.selectedPositions); // useSettingStore에서 selectedPositions 가져오기

  // 모달이 열리지 않았으면 null 반환
  if (!isOpen) return null;

  // 닫기 버튼 클릭 시 실행되는 함수
  const handleClose = () => {
    onClose(); // 모달 닫기
    navigateToNextPage(); // 다음 페이지로 이동
  };

  // 다음 페이지로 이동하는 함수
  const navigateToNextPage = () => {
    // 백엔드와 프론트엔드가 모두 선택된 경우
    if (
      selectedPositions.includes('Frontend') &&
      selectedPositions.includes('Backend')
    ) {
      navigate('/backframework'); // 백엔드 프레임워크 선택 페이지로 이동
    }
    // 그 외의 경우
    else {
      navigate('/settingcheck'); // 세팅 확인 페이지로 이동
    }
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
        <h2 className="mb-4 text-2xl font-bold">선택된 프론트엔드 기술 스택</h2>
        <ul className="space-y-2">
          <li>
            <strong>패키지 매니저:</strong> {selectedPackage || '선택되지 않음'}
          </li>
          <li>
            <strong>빌드 도구:</strong> {selectedBuildTool || '선택되지 않음'}
          </li>
          <li>
            <strong>프레임워크:</strong> {selectedFramework || '선택되지 않음'}
          </li>
          <li>
            <strong>언어:</strong> {selectedLanguage || '선택되지 않음'}
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

export default FrontStackModal;
