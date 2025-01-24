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
        const data = await postDesign(documentId);
        const rawDiagram = data.erd;
        const cleanDiagram = rawDiagram
          .replace(/```mermaid\\n|```/g, '')
          .trim();
        setContent({
          image: <div className="mermaid">{cleanDiagram}</div>,
          code: rawDiagram,
        });
      } catch (error) {
        console.error('ERD 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchErdData();
  }, [documentId]);

  return (
    <Layout>
      <div className="relative mx-auto justify-end gap-10">
        <MultiViewBox
          type="erd"
          imageContent={content.image}
          codeContent={content.code}
        />
        <div className="absolute right-0 top-1/2 mx-10 -translate-y-1/2 transform">
          <RouteTab />
        </div>
      </div>
    </Layout>
  );
};

export default ERD;
