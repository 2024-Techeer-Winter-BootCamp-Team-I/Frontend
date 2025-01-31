import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';
import { saveDocumentData } from '../api/documentsApi';
import SaveIcon from '../assets/image/save.svg';

const DiagramPage = () => {
  const navigate = useNavigate();
  const { documentId, diagramCode } = useDocumentStore();
  const [activePage, setActivePage] = useState('DIAGRAM');
  const [activeTab, setActiveTab] = useState('image');
  const [cleanDiagramCode, setCleanDiagramCode] = useState('');

  useEffect(() => {
    if (!diagramCode) {
      console.error('Diagram 데이터가 없습니다.');
      return;
    }

    // Mermaid 설정
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        primaryColor: '#1f2937',
        edgeLabelBackground: '#374151',
        nodeBorder: '#4b5563',
      },
      // 다이어그램 크기를 조정하기 위해 추가
      scale: 0.8, // 원하는 크기에 맞게 조정 (0.5, 0.8 등)
    });

    const cleanCode = diagramCode.replace(/```mermaid\n|```/g, '').trim();
    setCleanDiagramCode(cleanCode);

    if (activeTab === 'image') {
      const diagramContainer = document.getElementById('mermaid-container');
      if (diagramContainer) {
        diagramContainer.innerHTML = `<div class="mermaid">${cleanCode}</div>`;
        mermaid.contentLoaded();

        // 다이어그램 크기 자동 조절
        setTimeout(() => {
          const svg = diagramContainer.querySelector('svg');
          if (svg) {
            svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.setAttribute(
              'viewBox',
              `0 0 ${svg.getBBox().width} ${svg.getBBox().height}`,
            );
            svg.style.transform = 'scale(0.8)'; // SVG를 작게 줄이기
            svg.style.transformOrigin = 'top left'; // 축소 기준점을 설정
          }
        }, 500);
      }
    }
  }, [diagramCode, activeTab]);

  // 저장 버튼 핸들러
  const handleSave = async () => {
    if (!documentId) {
      console.error('문서 ID가 없습니다.');
      return;
    }
    console.log(`Saving document with ID: ${documentId}, Type: diagram`);
    await saveDocumentData(documentId, 'diagram');
    alert('diagram이 저장되었습니다');
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

          {/* 콘텐츠 박스 */}
          <div className="relative h-[800px] w-full max-w-4xl rounded-lg border border-gray-600 bg-gray-800 p-4 shadow-lg">
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

            {/* 오른쪽 아래 가장자리에 위치한 버튼들 */}
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
      </div>
    </Layout>
  );
};

export default DiagramPage;
