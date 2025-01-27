import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mermaid from 'mermaid';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';
import { postDesign } from '../api/documentsApi'; // postDesign 함수 import

const ErdPage = () => {
  const navigate = useNavigate();
  const { documentId, setErdCode, setDiagramCode, setApiCode } =
    useDocumentStore();
  const [activeTab, setActiveTab] = useState('image');
  const [erdCode, setErdCodeLocal] = useState('');
  const [cleanErdCode, setCleanErdCode] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 상단 버튼 상태
  const [activePage, setActivePage] = useState('ERD');

  useEffect(() => {
    if (!documentId) {
      setError('Document ID가 설정되지 않았습니다.');
      setLoading(false);
      return;
    }

    mermaid.initialize({ startOnLoad: true, theme: 'dark' });

    const fetchErdData = async () => {
      try {
        setLoading(true);

        const response = await postDesign(documentId);
        if (response && response.data) {
          const { erd, diagram, api } = response.data;

          setErdCodeLocal(erd);
          setCleanErdCode(erd.replace(/```mermaid\n|```/g, '').trim());

          setErdCode(erd); // 전역 상태에 저장
          setDiagramCode(diagram); // 전역 상태에 저장
          setApiCode(api); // 전역 상태에 저장
        } else {
          throw new Error('ERD, Diagram, API 데이터가 누락되었습니다.');
        }

        setLoading(false);
      } catch (err) {
        console.error('ERD 데이터를 가져오는 중 오류 발생:', err.message);
        setError('ERD 데이터를 로드하는 중 문제가 발생했습니다.');
        setLoading(false);
      }
    };

    fetchErdData();
  }, [documentId, setErdCode, setDiagramCode, setApiCode]);

  useEffect(() => {
    if (erdCode && activeTab === 'image') {
      const erdContainer = document.getElementById('mermaid-container');
      if (erdContainer) {
        erdContainer.innerHTML = `<div class="mermaid">${cleanErdCode}</div>`;
        mermaid.contentLoaded(); // Mermaid.js 렌더링
      }
    }
  }, [erdCode, activeTab, cleanErdCode]);

  // 탭 전환 핸들러
  const handleTabClick = (tab) => setActiveTab(tab);

  // 상단 버튼 클릭 핸들러
  const handlePageClick = (page, route) => {
    setActivePage(page);
    navigate(route);
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-center text-gray-200">
          <p className="animate-pulse text-center text-xl font-semibold">
            Loading...
          </p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-center text-red-500">
          <p className="text-center text-xl font-semibold">{error}</p>
        </div>
      </Layout>
    );
  }

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
