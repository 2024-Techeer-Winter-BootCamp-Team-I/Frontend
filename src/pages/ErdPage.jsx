import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';
import { saveDocumentData } from '../api/documentsApi';
import SaveIcon from '../assets/image/save.svg';
import GlassIcon from '../assets/image/glass.svg';

const ErdPage = () => {
  const navigate = useNavigate();
  const { documentId, erdCode } = useDocumentStore();
  const [cleanErdCode, setCleanErdCode] = useState('');
  const [activePage, setActivePage] = useState('ERD');
  const [activeTab, setActiveTab] = useState('image');
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // 🔥 모달에서도 Mermaid.js가 작동하도록 보장
  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        const modalContainer = document.getElementById(
          'modal-mermaid-container',
        );
        if (modalContainer) {
          modalContainer.innerHTML = `<div class="mermaid">${cleanErdCode}</div>`;
          mermaid.contentLoaded();
        }
      }, 100);
    }
  }, [isModalOpen, cleanErdCode]);

  const handleSave = async () => {
    if (!documentId) {
      console.error('문서 ID가 없습니다.');
      alert('저장에 실패했습니다: 문서 ID가 없습니다.');
      return;
    }
    try {
      console.log(`Saving document with ID: ${documentId}, Type: erd`);
      await saveDocumentData(documentId, 'erd');
      alert('ERD가 저장되었습니다');
    } catch (error) {
      console.error('저장 중 오류 발생:', error);
      alert('저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleViewAll = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePageClick = (page, route) => {
    setActivePage(page);
    navigate(route);
  };

  const handleMainButtonClick = () => {
    navigate('/');
  };

  const handleSettingButtonClick = () => {
    navigate('/setting');
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen w-full text-gray-200">
        <div className="flex w-full flex-col items-center justify-center">
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

          {/* ✨ ERD 크기 유지 + 중앙 정렬 */}
          <div className="relative flex h-[600px] w-full max-w-4xl items-center justify-center rounded-lg border border-gray-600 bg-gray-800 p-2 shadow-lg">
            <img
              src={SaveIcon}
              alt="Save"
              className="absolute right-4 top-4 h-8 w-8 cursor-pointer"
              onClick={handleSave}
            />
            <img
              src={GlassIcon}
              alt="View All"
              className="absolute right-16 top-4 h-8 w-8 cursor-pointer"
              onClick={handleViewAll}
            />
            {activeTab === 'image' && (
              <div
                id="mermaid-container"
                className="flex h-full w-full items-center justify-center"
              ></div>
            )}
            {activeTab === 'code' && (
              <pre className="h-full w-full overflow-auto whitespace-pre-wrap text-white">
                {cleanErdCode}
              </pre>
            )}
          </div>

          {/* 🔥 모달에서도 Mermaid.js 적용 + 크기 유지 + 중앙 정렬 */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
              <div className="relative flex h-[90vh] w-full max-w-6xl items-center justify-center overflow-auto rounded-lg bg-gray-800">
                <button
                  onClick={handleCloseModal}
                  className="absolute right-4 top-4 text-white hover:text-gray-400"
                >
                  &#10005;
                </button>
                <div
                  id="modal-mermaid-container"
                  className="flex h-full w-full items-center justify-center"
                ></div>
              </div>
            </div>
          )}

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

          <div className="absolute bottom-0 right-0 mb-9 mr-9 flex flex-col gap-2">
            <button
              onClick={handleMainButtonClick}
              className="rounded bg-gray-700 px-4 py-2"
            >
              메인으로가기
            </button>
            <button
              onClick={handleSettingButtonClick}
              className="rounded bg-gray-700 px-4 py-2"
            >
              세팅하러가기
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErdPage;
