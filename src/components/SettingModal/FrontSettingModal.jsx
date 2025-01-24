import useFrontStore from '../../store/useFrontStore';
import useSettingStore from '../../store/useSettingStore'; // useSettingStore 추가
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import { techStackSetupApi } from '../../api/techStacksSetupApi';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const FrontStackModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // Zustand 스토어에서 프론트엔드 상태만 가져오기 (단일 값 반환)
  const selectedPackage = useFrontStore((state) => state.selectedPackage);
  const selectedBuildTool = useFrontStore((state) => state.selectedBuildTool);
  const selectedFramework = useFrontStore((state) => state.selectedFramework);
  const selectedLanguage = useFrontStore((state) => state.selectedLanguage);
  const selectedPositions = useSettingStore((state) => state.selectedPositions); // useSettingStore에서 selectedPositions 가져오기
  const directoryName = useSettingStore((state) => state.directoryName);

  // 모달이 열리지 않았으면 null 반환
  if (!isOpen) return null;

  // 모달에서 확인 버튼을 눌렀을 때 실행되는 함수
  const handleConfirm = async () => {
    // 프론트엔드 기술 스택 구성
    const frontendTechStack = [
      selectedPackage,
      selectedBuildTool,
      selectedFramework,
      selectedLanguage,
    ];

    // 백엔드 기술 스택 구성, 일단 null값으로 구성 후 Backend도 선택하면 수정
    const backendTechStack = ['', ''];

    const documentId = 0;

    try {
      // techStackSetupApi 호출
      await techStackSetupApi(
        directoryName, // 전역 directoryName 사용
        frontendTechStack,
        backendTechStack,
        documentId,
      );
      console.log('Front Request Body: ', frontendTechStack);
      console.log('directoryName: ', directoryName); // 전역 directoryName 사용
      console.log('Back Request Body: ', backendTechStack);

      // request body 구성
      const requestBody = {
        frontend_tech_stack: frontendTechStack,
        backend_tech_stack: backendTechStack,
        directory_name: directoryName || '',
        document_id: documentId,
      };

      // request body 출력
      console.log('Request Body:', requestBody);

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
    } catch (error) {
      console.error('Error setting up tech stack:', error);
    }
  };

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
      <div className="z-10 rounded-lg bg-[#161A23] shadow-lg w-[30rem] h-[20rem] mt-[6rem] border border-[#d9d9d9] border-[0.5px]">
        <h2 className="mb-8 text-[1.4rem] mt-[1.5rem] font-semibold text-center text-[#EDEDED]">프론트엔드 기술 스택</h2>
        <ul className="space-y-4">
          <li>
            <strong className="text-[#EDEDED] font-bold ml-[2rem]">패키지 매니저   :</strong>{' '}
            <span className="text-gray-300 text-[1.1rem] font-medium">{selectedPackage || '선택되지 않음'}</span>
          </li>
          <li>
            <strong className="text-[#EDEDED] font-bold ml-[2rem]">빌드 도구   :</strong>{' '}
            <span className="text-gray-300 text-[1.1rem] font-medium">{selectedBuildTool || '선택되지 않음'}</span>
          </li>
          <li>
            <strong className="text-[#EDEDED] font-bold ml-[2rem]">프레임워크   :</strong>{' '}
            <span className="text-gray-300 text-[1.1rem] font-medium">{selectedFramework || '선택되지 않음'}</span>
          </li>
          <li>
            <strong className="text-[#EDEDED] font-bold ml-[2rem]">언어 :</strong>{' '}
            <span className="text-gray-300 text-[1.1rem] font-medium">{selectedLanguage || '선택되지 않음'}</span>
          </li>
        </ul>
        <button
          className="mt-7 ml-[24rem] w-[5.2rem] rounded-[0.25rem] bg-[#33598B] px-4 py-2 text-white font-medium hover:bg-[#78A0D4]"
          onClick={handleConfirm} // handleClose로 변경
        >
          확인
        </button>
      </div>
    </div>
  );
};
FrontStackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

export default FrontStackModal;
