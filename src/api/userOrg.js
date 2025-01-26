import axios from 'axios';

export const fetchUserOrganizations = async (accessToken) => {
  try {
    const response = await axios.get('https://api.github.com/user/orgs', {
      headers: {
        withCredentials: true, // HTTP Only 쿠키 자동 전송 설정
        'Content-Type': 'application/json', // 요청 타입 지정
        Authorization: `Bearer ${accessToken}`, // Authorization 헤더에 액세스 토큰 포함
      },
    });

    return response.data; // 응답 데이터 반환
  } catch (error) {
    console.error('Error fetching user organizations:', error);
    throw error; // 에러를 다시 던져서 호출자에게 전달
  }
};
