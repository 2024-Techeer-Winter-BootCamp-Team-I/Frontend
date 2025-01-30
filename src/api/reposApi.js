import { jsonAxios } from './axios.config';

export const createRepository = async ({ repoName, isPrivate, projectDir }) => {
  try {
    const response = await jsonAxios.post('/repos/', {
      repo_name: repoName,
      private: isPrivate,
      project_dir: projectDir,
    });
    console.log('Repository created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error creating repository:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

// 도커인도커를 띄우는 API 함수
export const startDockerInDocker = async ({
  githubName,
  repoUrl,
  repoName,
}) => {
  try {
    const response = await jsonAxios.post('/dinds/', {
      github_name: githubName,
      github_url: repoUrl,
      repo_name: repoName,
    });
    const dockerUrl = response.url; // 응답에서 URL 추출

    console.log('Message:', dockerUrl);

    return { dockerUrl };
  } catch (error) {
    console.error(
      'Error starting Docker in Docker:',
      error.response?.data || error.message,
    );
    throw error;
  }
};
