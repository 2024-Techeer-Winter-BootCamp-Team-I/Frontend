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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
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
          onClick={handleConfirm}
        >
          확인
        </button>
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
