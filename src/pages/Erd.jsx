import { useState, useEffect } from 'react';
import Layout from './Layout';
import RouteTab from '../components/RouteTab/RouteTab';
import MultiViewBox from '../components/MultiViewBox/MultiViewBox';
import { postDesign } from '../api/documentsApi';

// eslint-disable-next-line react/prop-types
const ERD = ({ documentId }) => {
  const [content, setContent] = useState({ image: '', code: '' });

  useEffect(() => {
    const fetchErdData = async () => {
      try {
        // API 호출로 Mermaid 다이어그램 데이터 가져오기
        const data = await postDesign(documentId);
        const rawDiagram = data.erd; // ERD 데이터 추출

        // HTML 파일 가져오기
        const htmlResponse = await fetch('./Html/erd.html'); // HTML 파일 경로
        const htmlContent = await htmlResponse.text(); // HTML 파일 내용을 문자열로 가져옴

        // State 설정
        setContent({
          image: <div dangerouslySetInnerHTML={{ __html: htmlContent }} />, // HTML 렌더링
          code: rawDiagram, // Mermaid 코드 텍스트
        });

        // Mermaid.js 초기화
        setTimeout(() => window.mermaid?.contentLoaded(), 0);
      } catch (error) {
        console.error('ERD 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchErdData();
  }, [documentId]);

  return (
    <Layout>
      <div className="relative mx-auto justify-end gap-10">
        {/* MultiViewBox 컴포넌트에 content 전달 */}
        <MultiViewBox
          type="erd"
          imageContent={content.image} // HTML 렌더링된 이미지 보기
          codeContent={content.code} // Mermaid 코드 텍스트 보기
        />
        <div className="absolute right-0 top-1/2 mx-10 -translate-y-1/2 transform">
          <RouteTab />
        </div>
      </div>
    </Layout>
  );
};

export default ERD;
