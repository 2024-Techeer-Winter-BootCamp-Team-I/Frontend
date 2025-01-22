// login 버튼을 클릭했을 때 호출되는 코드
export function GithubLogin() {
  try {
    // 서버 측 "/login" -> GitHub OAuth 화면으로 이동
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/login`;
  } catch (error) {
    console.error('깃허브 로그인 에러', error);
    throw error;
  }
}