import { jsonAxios } from './axios.config';

export const GithubLogin = () => {
  try {
    // 서버 측 "/login" -> GitHub OAuth 화면으로 이동
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/login`;
  } catch (error) {
    console.error('깃허브 로그인 에러', error);
    throw error;
  }
};

export const getUserDetails = async () => {
  try {
    const response = await jsonAxios.get('login/details');
    const userName = response.data.username;
    const profileImage = response.data.profile_image;

    // 객체로 반환
    return { userName, profileImage };
  } catch (error) {
    console.error('사용자 정보 조회 실패:', error);
    throw error;
  }
};

export const postLogout = async () => {
  try {
    // 로그아웃 API 호출
    const response = await jsonAxios.post(
      '/login/profile', // 로그아웃 API 엔드포인트
      {}, // 요청 본문 비워둠
      {
        withCredentials: true, // 브라우저에서 httpOnly 쿠키를 포함하도록 설정
        headers: {
          'Content-Type': 'application/json', // 요청 타입 지정
        },
      },
    );

    console.log('로그아웃 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('로그아웃 요청 중 오류 발생:', error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const response = await jsonAxios.get('/login/profile');
    const githubUsername = response.data.github_username;
    const projectNames = response.data.project_names;

    // 객체로 반환
    return { githubUsername, projectNames };
  } catch (error) {
    console.error(
      '프로필 정보 조회 실패:',
      error.response?.data || error.message,
    );
    throw error;
  }
};