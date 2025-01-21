import jsonAxios from './axios.config';
import useFrontStore from '../store/useFrontStore';
import useBackStore from '../store/useBackStore';

const techStackSetupApi = async (directoryName) => {
  const {
    selectedPackage,
    selectedBuildTool,
    selectedFramework: frontFramework,
    selectedLanguage,
  } = useFrontStore.getState();
  const { selectedFramework: backFramework, selectedDatabase } =
    useBackStore.getState();

  const frontendTechStack = [
    selectedPackage,
    selectedBuildTool,
    frontFramework,
    selectedLanguage,
  ].filter(Boolean);
  const backendTechStack = [backFramework, selectedDatabase].filter(Boolean);

  const requestBody = {
    frontend_tech_stack: frontendTechStack,
    backend_tech_stack: backendTechStack,
    directory_name: directoryName,
  };

  try {
    const response = await jsonAxios.post(
      '/api/v1/tech-stack/setup',
      requestBody,
    );
    return response.data;
  } catch (error) {
    console.error('Error setting up tech stack:', error);
    throw error;
  }
};

export default techStackSetupApi;
