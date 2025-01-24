import { jsonAxios } from './axios.config';

// GitHub 로그인
export const GithubLogin = () => {
  try {
    // 서버 측 "/login" -> GitHub OAuth 화면으로 이동
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/login`;
  } catch (error) {
    console.error('GitHub 로그인 오류:', error);
    throw error;
  }
};

// 사용자 세부 정보 가져오기
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

// 로그아웃
export const postLogout = async () => {
  try {
    const response = await jsonAxios.post(
      '/login/logout', // 로그아웃 API 엔드포인트
      {}, // 요청 본문 비워둠
      {
        withCredentials: true, // 브라우저에서 httpOnly 쿠키를 포함하도록 설정
        headers: {
          'Content-Type': 'application/json', // 요청 타입 지정
        },
      }
    );

    console.log('로그아웃 성공:', response.data);
    return response.data;
  } catch (error) {
    console.error('로그아웃 요청 중 오류 발생:', error);
    throw error;
  }
};

// 프로필 데이터 가져오기
export const getProfile = async () => {
  try {
    const response = await jsonAxios.get('/login/profile');
    const userEmail= response.data.email; // 이메일 정보
    const profileImage = response.data.profile_image;

    return { userName, profileImage, userEmail };
  } catch (error) {
    console.error('프로필 데이터 조회 실패:', error);
    throw error;
  }
};
