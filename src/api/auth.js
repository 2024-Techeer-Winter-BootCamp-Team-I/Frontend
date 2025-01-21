export function GithubLogin() {
  try {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/login`;
    console.log('click');
  } catch (error) {
    console.log('깃허브 로그인 에러', error);
    throw error;
  }
}
