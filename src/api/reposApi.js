import axiosInstance from './axios.config';
import techStackSetupApi from './techStacksSetupApi';

const ReposApi = async (organizationName, repoName, isPrivate) => {
  try {
    // techStackSetupApi를 호출하여 project_dir을 가져옴
    const projectDir = await techStackSetupApi(repoName);

    // 요청 본문 생성
    const requestBody = {
      organization_name: organizationName,
      repo_name: repoName,
      private: isPrivate,
      project_dir: projectDir,
    };

    // API 요청
    const response = await axiosInstance.post('/api/v1/repos', requestBody);
    return response.data;
  } catch (error) {
    console.error('Error creating repository:', error);
    throw error;
  }
};

export default ReposApi;
