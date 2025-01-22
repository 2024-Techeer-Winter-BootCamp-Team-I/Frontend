import Cookies from 'js-cookie';


// 쿠키에서 토큰 가져오기
export const getToken = (tokenName) => {
  return Cookies.get(tokenName);
};

// 쿠키 토큰 제거
export const removeToken = (tokenName) => {
  Cookies.remove(tokenName);
};