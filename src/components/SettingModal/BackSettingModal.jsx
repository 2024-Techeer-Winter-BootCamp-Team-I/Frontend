import useBackStore from '../../store/useBackStore';
import useFrontStore from '../../store/useFrontStore';
import useSettingStore from '../../store/useSettingStore';
import useDocumentStore from '../../store/useDocumentStore';

import { useNavigate } from 'react-router-dom';
import { techStackSetupApi } from '../../api/techStacksSetupApi';
import PropTypes from 'prop-types';

import { useState } from 'react'; // useState 추가
import { ClipLoader } from 'react-spinners'; // react-spinners에서 ClipLoader 가져오기

const BackStackModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  const selectedFramework = useBackStore((state) => state.selectedFramework);
  const selectedDatabase = useBackStore((state) => state.selectedDatabase);

  const selectedPackage = useFrontStore((state) => state.selectedPackage);
  const selectedBuildTool = useFrontStore((state) => state.selectedBuildTool);
  const selectedLanguage = useFrontStore((state) => state.selectedLanguage);
  const selectedFrameworkFront = useFrontStore(
    (state) => state.selectedFramework,
  );

  const selectedPositions = useSettingStore((state) => state.selectedPositions);
  const directoryName = useSettingStore((state) => state.directoryName);
  const setProjectDir = useSettingStore((state) => state.setProjectDir); // setProjectDir 가져오기

  const documentId = useDocumentStore((state) => state.documentId); // documentId 가져오기

  if (!isOpen) return null;

  const handleConfirm = async () => {
    setLoading(true); // 로딩 상태 활성화

    const frontendTechStack = selectedPositions.includes('Frontend')
      ? [
          selectedPackage,
          selectedBuildTool,
          selectedFrameworkFront,
          selectedLanguage,
        ]
      : ['', '', '', ''];

    const backendTechStack = selectedPositions.includes('Backend')
      ? [selectedFramework, selectedDatabase]
      : ['', ''];

    try {
      // API 호출
      const response = await techStackSetupApi(
        directoryName,
        frontendTechStack,
        backendTechStack,
        documentId,
      );

      // request body 구성
      const requestBody = {
        frontend_tech_stack: frontendTechStack,
        backend_tech_stack: backendTechStack,
        directory_name: directoryName || '',
        document_id: documentId,
      };

      // request body 출력
      console.log('Request Body:', requestBody);

      // 응답에서 project_dir 추출
      const { project_dir } = response;

      // project_dir을 Zustand 스토어에 저장
      setProjectDir(project_dir);

      console.log('Front Request Body: ', frontendTechStack);
      console.log('Back Request Body: ', backendTechStack);
      console.log('directoryName: ', directoryName);
      console.log('project_dir: ', project_dir); // project_dir 로그 출력

      // /settingcheck 페이지로 이동
      navigate('/settingcheck');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // 로딩 상태 비활성화
    }
  };

  const handleClose = () => {
    onClose();
    navigateToNextPage(); // 다음 페이지로 이동
  };

  // 다음 페이지로 이동하는 함수
  const navigateToNextPage = () => {
    navigate('/settingcheck');
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
          백엔드 기술 스택
        </h2>
        <ul className="space-y-4">
          <li className="mt-[4rem]">
            <strong className="ml-[2rem] font-bold text-[#EDEDED]">
              프레임워크 :
            </strong>
            <span className="text-[1.1rem] font-medium text-gray-300">
              {selectedFramework || '선택되지 않음'}
            </span>
          </li>
          <li>
            <strong className="ml-[2rem] font-bold text-[#EDEDED]">
              데이터베이스 :
            </strong>
            <span className="text-[1.1rem] font-medium text-gray-300">
              {selectedDatabase || '선택되지 않음'}
            </span>
          </li>
        </ul>
        <div className="mr-4 mt-7 flex justify-end">
          <button
            className="w-[5.2rem] rounded-[0.25rem] bg-[#33598B] px-4 py-2 font-medium text-white hover:bg-[#78A0D4]"
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
    </div>
  );
};

BackStackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

export default BackStackModal;
