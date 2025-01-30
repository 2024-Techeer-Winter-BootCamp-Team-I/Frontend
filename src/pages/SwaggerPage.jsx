import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Layout from './Layout';
import useDocumentStore from '../store/useDocumentStore';

const SwaggerPage = () => {
  const navigate = useNavigate();
  const { apiCode } = useDocumentStore(); // 전역 상태에서 apiCode 가져오기
  const [activePage, setActivePage] = useState('API');
  const [activeTab, setActiveTab] = useState('image');
  let apiJson;

  try {
    apiJson = JSON.parse(
      apiCode
        .replace(/```json\n|```/g, '') // ```json\n과 ``` 제거
        .replace(/\\n/g, '') // \n 제거
        .trim(),
    );
  } catch (e) {
    console.error('Invalid JSON:', e);
  }

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
          <div className="h-[500px] w-full max-w-4xl overflow-auto rounded-lg border border-gray-600 bg-white p-4 shadow-lg">
            {activeTab === 'image' && (
              <div className="h-full w-full">
                {apiJson ? (
                  <SwaggerUI spec={apiJson} />
                ) : (
                  <p className="text-black">
                    JSON 데이터를 로드하는 중 오류가 발생했습니다.
                  </p>
                )}
              </div>
            )}
            {activeTab === 'code' && (
              <pre className="h-full w-full overflow-auto whitespace-pre-wrap text-white">
                {JSON.stringify(apiJson, null, 2)}
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

export default SwaggerPage;
