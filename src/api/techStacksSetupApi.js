import { jsonAxios } from './axios.config';
import useFrontStore from '../store/useFrontStore';
import useBackStore from '../store/useBackStore';

export const techStackSetupApi = async (directoryName) => {
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
  ];
  const backendTechStack = [backFramework, selectedDatabase];

  const requestBody = {
    frontend_tech_stack: frontendTechStack,
    backend_tech_stack: backendTechStack,
    directory_name: directoryName || '',
    document_id: 0,
  };

  console.log('API Request Body:', requestBody); // API 요청 전 request body 출력

  try {
    const response = await jsonAxios.post('/tech-stack/setup', requestBody, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('API Response Body:', response.data); // responseBody 출력
    return response.data;
  } catch (error) {
    console.error('Error setting up tech stack:', error);
    throw error;
  }
};

export default techStackSetupApi;
