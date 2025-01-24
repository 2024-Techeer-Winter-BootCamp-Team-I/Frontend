import useFrontStore from '../../store/useFrontStore';
import useSettingStore from '../../store/useSettingStore';
import { useNavigate } from 'react-router-dom';
import { techStackSetupApi } from '../../api/techStacksSetupApi';
import PropTypes from 'prop-types';

const FrontStackModal = ({ isOpen, onClose, onConfirm }) => {
  const navigate = useNavigate();
  const selectedPackage = useFrontStore((state) => state.selectedPackage);
  const selectedBuildTool = useFrontStore((state) => state.selectedBuildTool);
  const selectedFramework = useFrontStore((state) => state.selectedFramework);
  const selectedLanguage = useFrontStore((state) => state.selectedLanguage);

  const selectedPositions = useSettingStore((state) => state.selectedPositions);
  const directoryName = useSettingStore((state) => state.directoryName);

  if (!isOpen) return null;

  const handleConfirm = async () => {
    // 프론트엔드 스택 구성
    const frontendTechStack = [
      selectedPackage,
      selectedBuildTool,
      selectedFramework,
      selectedLanguage,
    ];

    // 백엔드 스택 구성 (빈 배열로 초기화)
    const backendTechStack = ['', ''];
    const documentId = 0;

    try {
      // "Backend"가 선택되지 않은 경우, 프론트엔드 스택만 전송
      if (!selectedPositions.includes('Backend')) {
        await techStackSetupApi(
          directoryName,
          frontendTechStack,
          backendTechStack,
          documentId,
        );
        console.log('Front Request Body: ', frontendTechStack);
        console.log('directoryName: ', directoryName);
        console.log('Back Request Body: ', backendTechStack);
      }

      // "Backend"가 선택된 경우, /backframework로 이동
      if (selectedPositions.includes('Backend')) {
        navigate('/backframework');
      } else {
        navigate('/settingcheck');
      }
    } catch (error) {
      console.error('Error setting up tech stack:', error);
    }
  };

  const handleClose = () => {
    onClose();
    if (selectedPositions.includes('Backend')) {
      navigate('/backframework');
    } else {
      navigate('/settingcheck');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
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
          onClick={handleConfirm}
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
