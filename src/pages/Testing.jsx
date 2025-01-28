import React, { useEffect } from 'react';
import useDocumentStore from '../store/useDesignStore';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
import Layout from './Layout';

const Testing = () => {
  const { currentDocument } = useDocumentStore();
  const erd_code = currentDocument ? currentDocument.erd_code : null;

  useEffect(() => {
    if (erd_code) {
      console.log('ERD Code:', erd_code); // ERD 코드 확인
      const cleanErdCode = erd_code.replace(/```mermaid\n|```/g, '').trim();
      const erdContainer = document.getElementById('mermaid-container');
      if (erdContainer) {
        erdContainer.innerHTML = `<div class="mermaid">${cleanErdCode}</div>`;
        mermaid.initialize({
          startOnLoad: true,
          theme: 'dark', // 다크 테마 사용
          themeVariables: {
            primaryColor: '#1F2937', // 기본 색상
            primaryTextColor: '#F3F4F6', // 기본 텍스트 색상
            primaryBorderColor: '#4B5563', // 기본 테두리 색상
            lineColor: '#6B7280', // 선 색상
          },
        });
        mermaid.contentLoaded();
      }
    }
  }, [erd_code]);

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-white dark:text-gray-200">
        Mermaid.js ERD 테스트
      </h1>
      <div className="mt-8 flex items-center justify-center">
        {' '}
        {/* 가운데 정렬을 위한 컨테이너 */}
        <div id="mermaid-container" className="text-center"></div>
      </div>
    </Layout>
  );
};

export default Testing;
