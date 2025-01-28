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
export const startDockerInDocker = async ({ userName, repoUrl, repoName }) => {
  try {
    const response = await jsonAxios.post('/dinds/', {
      github_name: userName,
      github_url: repoUrl,
      repo_name: repoName,
    });
    const message = response.data.message;
    const taskId = response.data.task_id;

    console.log('Message:', message);
    console.log('Task ID:', taskId);

    return { message, taskId };
  } catch (error) {
    console.error(
      'Error starting Docker in Docker:',
      error.response?.data || error.message,
    );
    throw error;
  }
};
