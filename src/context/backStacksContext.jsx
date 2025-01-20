import { createContext, useState } from 'react';

// Context 생성
export const BackStacksContext = createContext();

// Provider 컴포넌트 생성
export const BackendSettingsProvider = ({ children }) => {
  // 백엔드 세팅을 위한 배열
  const [back, setBack] = useState([]);

  // 배열에 항목 추가
  const addBack = (setting) => {
    setBack((prevSettings) => [...prevSettings, setting]);
  };

  // 배열에서 항목 제거
  const removeBack = (setting) => {
    setBack((prevSettings) => prevSettings.filter((item) => item !== setting));
  };

  return (
    <BackStacksContext.Provider value={{ back, setBack, addBack, removeBack }}>
      {children}
    </BackStacksContext.Provider>
  );
};
