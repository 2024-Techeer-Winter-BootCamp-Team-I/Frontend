// src/context/frontStacksContext.jsx
import { createContext, useState } from 'react';

// Context 생성
export const FrontStacksContext = createContext();

// Provider 컴포넌트 생성
export const FrontendSettingsProvider = ({ children }) => {
  // 프론트엔드 세팅을 위한 배열
  const [front, setFront] = useState([]);

  // 배열에 항목 추가
  const addFront = (setting) => {
    setFront((prevSettings) => [...prevSettings, setting]);
  };

  // 배열에서 항목 제거
  const removeFront = (setting) => {
    setFront((prevSettings) => prevSettings.filter((item) => item !== setting));
  };

  return (
    <FrontStacksContext.Provider
      value={{ front, setFront, addFront, removeFront }}
    >
      {children}
    </FrontStacksContext.Provider>
  );
};
