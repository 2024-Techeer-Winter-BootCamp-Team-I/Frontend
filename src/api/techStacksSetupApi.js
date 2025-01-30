import { jsonAxios } from './axios.config';

export const techStackSetupApi = async (
  frontendTechStack,
  backendTechStack,
  directoryName,
  documentId,
) => {
  const requestBody = {
    frontend_tech_stack: frontendTechStack || [],
    backend_tech_stack: backendTechStack || [],
    directory_name: directoryName || '',
    document_id: documentId,
  };

  console.log('API Request Body:', requestBody);

  try {
    const response = await jsonAxios.post('/tech-stack/setup', requestBody);
    console.log('API Response Body:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error setting up tech stack:', error);
    console.log('Request Body:', requestBody);
    console.error('Error details:', error.response?.data);
    throw error;
  }
};
