import useBackStore from '../../store/useBackStore';
import useFrontStore from '../../store/useFrontStore';
import useSettingStore from '../../store/useSettingStore';
import { useNavigate } from 'react-router-dom';
import { techStackSetupApi } from '../../api/techStacksSetupApi';
import PropTypes from 'prop-types';

const BackStackModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate();
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

  if (!isOpen) return null;

  const handleConfirm = async () => {
    const documentId = 0;

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
    }
  };

  const handleClose = () => {
    onClose();
    navigate('/settingcheck');
  };

  {/* 모달 내용 */ }
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
};

BackStackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

export default BackStackModal;
