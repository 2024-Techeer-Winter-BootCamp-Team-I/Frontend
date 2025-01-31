import useFrontStore from '../../store/useFrontStore';
import useSettingStore from '../../store/useSettingStore'; // useSettingStore 추가
import { useNavigate } from 'react-router-dom'; // useNavigate 추가
import useDocumentStore from '../../store/useDocumentStore';
import { techStackSetupApi } from '../../api/techStacksSetupApi';
import PropTypes from 'prop-types';
import { useState } from 'react'; // useState 추가
import { ClipLoader } from 'react-spinners'; // react-spinners에서 ClipLoader 가져오기

const FrontStackModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  // Zustand 스토어에서 프론트엔드 상태만 가져오기 (단일 값 반환)
  const selectedPackage = useFrontStore((state) => state.selectedPackage);
  const selectedBuildTool = useFrontStore((state) => state.selectedBuildTool);
  const selectedFramework = useFrontStore((state) => state.selectedFramework);
  const selectedLanguage = useFrontStore((state) => state.selectedLanguage);
  const selectedPositions = useSettingStore((state) => state.selectedPositions); // useSettingStore에서 selectedPositions 가져오기
  const directoryName = useSettingStore((state) => state.directoryName);
  const documentId = useDocumentStore((state) => state.documentId);
  const setProjectDir = useSettingStore((state) => state.setProjectDir); // setProjectDir

  // 모달이 열리지 않았으면 null 반환
  if (!isOpen) return null;

  // 모달에서 확인 버튼을 눌렀을 때 실행되는 함수
  const handleConfirm = async () => {
    setLoading(true); // 로딩 상태 활성화
    // 프론트엔드 기술 스택 구성
    const frontendTechStack = [
      selectedPackage,
      selectedBuildTool,
      selectedFramework,
      selectedLanguage,
    ];

    // 백엔드 기술 스택 구성, 일단 null값으로 구성 후 Backend도 선택하면 수정
    const backendTechStack = ['', ''];

    try {
      // techStackSetupApi 호출
      if (!selectedPositions.includes('Backend')) {
        const response = await techStackSetupApi(
          frontendTechStack,
          backendTechStack,
          directoryName,
          documentId,
        );
        // 응답에서 project_dir 추출
        const { project_dir } = response;

        // project_dir을 Zustand 스토어에 저장
        setProjectDir(project_dir);

        console.log('Front Request Body: ', frontendTechStack);
        console.log('directoryName: ', directoryName);
        console.log('Back Request Body: ', backendTechStack);
      }

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
    } finally {
      setLoading(false); // 로딩 상태 비활성화
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
      <div className="z-10 mt-[6rem] h-[20rem] w-[30rem] rounded-lg border border-[0.3px] border-[#2f2f2f] bg-[#171717] shadow-lg">
        <h2 className="mb-8 mt-[1.5rem] text-center text-[1.4rem] font-semibold text-[#EDEDED]">
          프론트엔드 기술 스택
        </h2>
        <ul className="space-y-4">
          <li>
            <strong className="ml-[2rem] font-bold text-[#EDEDED]">
              패키지 매니저 :
            </strong>{' '}
            <span className="text-[1.1rem] font-medium text-gray-300">
              {selectedPackage || '선택되지 않음'}
            </span>
          </li>
          <li>
            <strong className="ml-[2rem] font-bold text-[#EDEDED]">
              빌드 도구 :
            </strong>{' '}
            <span className="text-[1.1rem] font-medium text-gray-300">
              {selectedBuildTool || '선택되지 않음'}
            </span>
          </li>
          <li>
            <strong className="ml-[2rem] font-bold text-[#EDEDED]">
              프레임워크 :
            </strong>{' '}
            <span className="text-[1.1rem] font-medium text-gray-300">
              {selectedFramework || '선택되지 않음'}
            </span>
          </li>
          <li>
            <strong className="ml-[2rem] font-bold text-[#EDEDED]">
              언어 :
            </strong>{' '}
            <span className="text-[1.1rem] font-medium text-gray-300">
              {selectedLanguage || '선택되지 않음'}
            </span>
          </li>
        </ul>
        <button
          className="ml-[24rem] mt-7 w-[5.2rem] rounded-[0.25rem] bg-[#33598B] px-4 py-2 font-medium text-white hover:bg-[#78A0D4]"
          onClick={handleConfirm}
        >
          확인
        </button>
      </div>
      {/* 로딩 애니메이션 오버레이 */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <ClipLoader size={50} color={'#ffffff'} />
        </div>
      )}
    </div>
  );
};

FrontStackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

export default FrontStackModal;
