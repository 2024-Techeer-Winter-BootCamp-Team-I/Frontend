// src/context/SelectedPositionsContext.js

import { createContext, useState, useEffect } from 'react';

// Context 생성
export const SelectedPositionsContext = createContext();

// Provider 컴포넌트 생성
export const SelectedPositionsProvider = ({ children }) => {
  // 상태 초기값 설정 (로컬 스토리지에서 가져옴)
  const [selectedPositions, setSelectedPositions] = useState(() => {
    const storedPositions = localStorage.getItem('selectedPositions');
    return storedPositions ? JSON.parse(storedPositions) : [];
  });

  // selectedPositions가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(
      'selectedPositions',
      JSON.stringify(selectedPositions),
    );
  }, [selectedPositions]);

  // Provider로 감싸서 상태와 상태 업데이트 함수를 전달
  return (
    <SelectedPositionsContext.Provider
      value={{ selectedPositions, setSelectedPositions }}
    >
      {children}
    </SelectedPositionsContext.Provider>
  );
};
