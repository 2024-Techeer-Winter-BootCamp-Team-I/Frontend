import { jsonAxios } from './axios.config';

export const createRepository = async ({
  organizationName,
  repoName,
  isPrivate,
  projectDir,
}) => {
  try {
    const response = await jsonAxios.post('/repos/', {
      organization_name: organizationName,
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
