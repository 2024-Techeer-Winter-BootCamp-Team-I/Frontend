// 예시: githubCallback.jsx

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { setToken } from '../utils/cookies';

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // 백엔드에서 토큰을 API로 받아온다는 가정 (또는 이미 URL에 토큰이 있을 수도 있음)
    const code = searchParams.get('code');
    if (code) {
      // 1. 백엔드에 code를 보내 액세스 토큰을 받아옴 (예시)
      fetch(`http://localhost:8000/api/v1/login/github/token?code=${code}`, {
        method: 'GET',
        credentials: 'include', // 쿠키 인증 등 필요한 경우
      })
        .then((response) => response.json())
        .then((data) => {
          const accessToken = data.accessToken;
          if (accessToken) {
            // 2. 쿠키에 토큰 저장
            setToken('github_access_token', accessToken, {
              expires: 7,
              path: '/',
            });
            // 3. 원하는 페이지로 이동
            window.location.href = '/';
          }
        })
        .catch((err) => console.error(err));
    }
  }, [searchParams]);

  return <div>GitHub Callback Page...</div>;
};

export default GitHubCallback;
