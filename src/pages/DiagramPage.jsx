import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';

const DiagramPage = () => {
  const navigate = useNavigate();
  const { diagramCode } = useDocumentStore(); // 전역 상태에서 diagramCode 가져오기
  const [activePage, setActivePage] = useState('DIAGRAM');
  const [activeTab, setActiveTab] = useState('image');
  const [cleanDiagramCode, setCleanDiagramCode] = useState('');

  useEffect(() => {
    if (!diagramCode) {
      console.error('Diagram 데이터가 없습니다.');
      return;
    }

    mermaid.initialize({ startOnLoad: true, theme: 'dark' });

    const cleanCode = diagramCode.replace(/```mermaid\n|```/g, '').trim();
    setCleanDiagramCode(cleanCode);

    if (activeTab === 'image') {
      const diagramContainer = document.getElementById('mermaid-container');
      if (diagramContainer) {
        diagramContainer.innerHTML = `<div class="mermaid">${cleanCode}</div>`;
        mermaid.contentLoaded();
      }
    }
  }, [diagramCode, activeTab]);

  // 상단 버튼 클릭 핸들러
  const handlePageClick = (page, route) => {
    setActivePage(page);
    navigate(route);
  };

  // 탭 전환 핸들러
  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <Layout>
      <div className="relative flex min-h-screen w-full text-gray-200">
        {/* 콘텐츠 영역 */}
        <div className="flex w-full flex-col items-center justify-center">
          {/* 상단 버튼 */}
          <div className="mb-4 flex gap-4">
            <button
              onClick={() => handlePageClick('ERD', '/erdpage')}
              className={`rounded px-4 py-2 ${
                activePage === 'ERD'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              ERD
            </button>
            <button
              onClick={() => handlePageClick('DIAGRAM', '/diagrampage')}
              className={`rounded px-4 py-2 ${
                activePage === 'DIAGRAM'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              DIAGRAM
            </button>
            <button
              onClick={() => handlePageClick('API', '/swaggerpage')}
              className={`rounded px-4 py-2 ${
                activePage === 'API'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              API
            </button>
          </div>

          {/* 콘텐츠 박스 */}
          <div className="h-[500px] w-full max-w-4xl overflow-auto rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
            {activeTab === 'image' && (
              <div id="mermaid-container" className="h-full w-full"></div>
            )}
            {activeTab === 'code' && (
              <pre className="h-full w-full whitespace-pre-wrap text-white">
                {cleanDiagramCode}
              </pre>
            )}
          </div>

          {/* 탭 버튼 */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => handleTabClick('image')}
              className={`rounded px-4 py-2 ${
                activeTab === 'image'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              이미지보기
            </button>
            <button
              onClick={() => handleTabClick('code')}
              className={`rounded px-4 py-2 ${
                activeTab === 'code'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 text-gray-200'
              }`}
            >
              코드보기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiagramPage;
