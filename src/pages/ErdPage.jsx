import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';
import { saveDocumentData } from '../api/documentsApi';
import SaveIcon from '../assets/image/save.svg';

const ErdPage = () => {
  const navigate = useNavigate();
  const { documentId, erdCode } = useDocumentStore(); // 전역 상태에서 documentId 및 ERD 코드 가져오기
  const [cleanErdCode, setCleanErdCode] = useState('');
  const [activePage, setActivePage] = useState('ERD');
  const [activeTab, setActiveTab] = useState('image');

  useEffect(() => {
    if (!erdCode) {
      console.error('ERD 데이터가 없습니다.');
      return;
    }

    mermaid.initialize({ startOnLoad: true, theme: 'dark' });

    const cleanCode = erdCode.replace(/```mermaid\n|```/g, '').trim();
    setCleanErdCode(cleanCode);

    if (activeTab === 'image') {
      const erdContainer = document.getElementById('mermaid-container');
      if (erdContainer) {
        erdContainer.innerHTML = `<div class="mermaid">${cleanCode}</div>`;
        mermaid.contentLoaded();
      }
    }
  }, [erdCode, activeTab]);

  // 저장 버튼 핸들러
  const handleSave = async () => {
    if (!documentId) {
      console.error('문서 ID가 없습니다.');
      return;
    }
    console.log(`Saving document with ID: ${documentId}, Type: erd`);
    await saveDocumentData(documentId, 'erd');
  };

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
          <div className="relative h-[500px] w-full max-w-4xl overflow-auto rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
            {/* Save 버튼 추가 */}
            <img
              src={SaveIcon}
              alt="Save"
              className="absolute right-4 top-4 h-8 w-8 cursor-pointer"
              onClick={handleSave}
            />
            {activeTab === 'image' && (
              <div id="mermaid-container" className="h-full w-full"></div>
            )}
            {activeTab === 'code' && (
              <pre className="h-full w-full whitespace-pre-wrap text-white">
                {cleanErdCode}
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

export default ErdPage;
