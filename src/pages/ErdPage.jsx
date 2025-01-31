import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';
import { saveDocumentData } from '../api/documentsApi';
import SaveIcon from '../assets/image/save.svg';
import GlassIcon from '../assets/glass.svg'; // glass.svg 임포트

const ErdPage = () => {
  const navigate = useNavigate();
  const { documentId, erdCode } = useDocumentStore(); // 전역 상태에서 documentId 및 ERD 코드 가져오기
  const [cleanErdCode, setCleanErdCode] = useState('');
  const [activePage, setActivePage] = useState('ERD');
  const [activeTab, setActiveTab] = useState('image');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가

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

  // 저장 버튼 핸들러 (알림 창 추가)
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

  // 전체보기 모달 열기
  const handleViewAll = () => {
    setIsModalOpen(true);
  };

  // 전체보기 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 상단 버튼 클릭 핸들러
  const handlePageClick = (page, route) => {
    setActivePage(page);
    navigate(route);
  };

  // 탭 전환 핸들러
  const handleTabClick = (tab) => setActiveTab(tab);

  const handleMainButtonClick = () => {
    navigate('/');
  };

  const handleSettingButtonClick = () => {
    navigate('/setting');
  };

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

          {/* 콘텐츠 박스 (스크롤 가능하도록 overflow-auto 추가) */}
          <div className="relative h-[800px] w-full max-w-4xl overflow-auto rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg flex items-center justify-center">
            {/* Save 아이콘 */}
            <img
              src={SaveIcon}
              alt="Save"
              className="absolute right-4 top-4 h-8 w-8 cursor-pointer"
              onClick={handleSave}
            />
            {/* Glass 아이콘 */}
            <img
              src={GlassIcon}
              alt="View All"
              className="absolute right-16 top-4 h-8 w-8 cursor-pointer"
              onClick={handleViewAll}
            />
            {activeTab === 'image' && (
              <div id="mermaid-container" className="h-full w-full flex items-center justify-center"></div>
            )}
            {activeTab === 'code' && (
              <pre className="h-full w-full overflow-auto whitespace-pre-wrap text-white">
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

            {/* 오른쪽 아래 버튼 */}
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

          {/* 전체보기 모달 */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="relative bg-white rounded-lg p-4 max-w-4xl w-full h-[90vh] overflow-auto">
                {/* 닫기 버튼 */}
                <button
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                >
                  &#10005;
                </button>
                {/* 전체 다이어그램 */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="mermaid">
                    {cleanErdCode}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ErdPage;
