import Cookies from 'js-cookie';

/**
 * 쿠키에서 토큰 가져오기
 * @param {string} tokenName - 토큰 이름
 * @returns {string | undefined} - 토큰 값
 */
export const getToken = (tokenName) => {
  return Cookies.get(tokenName);
};

/**
 * 쿠키에 토큰 저장하기
 * @param {string} tokenName - 토큰 이름
 * @param {string} tokenValue - 저장할 토큰 값
 * @param {object} options - 쿠키 옵션 (선택 사항)
 */
export const setToken = (tokenName, tokenValue, options = {}) => {
  // 기본 옵션 (만료 시간 7일)
  const defaultOptions = { expires: 7, secure: true, sameSite: 'Strict' };

  Cookies.set(tokenName, tokenValue, { ...defaultOptions, ...options });
};

/**
 * 쿠키에서 토큰 제거하기
 * @param {string} tokenName - 토큰 이름
 */
export const removeToken = (tokenName) => {
  Cookies.remove(tokenName);
};
