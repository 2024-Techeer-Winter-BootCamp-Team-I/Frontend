import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const tabsData = [
  { label: 'API', path: '/api' },
  { label: 'ERD', path: '/erd' },
  { label: 'DIAGRAM', path: '/diagram' },
];

function RouteTabs() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 정보를 가져옴
  const [activeTab, setActiveTab] = useState('');

  // 현재 경로를 기준으로 activeTab 업데이트
  useEffect(() => {
    const currentTab = tabsData.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.label);
    }
  }, [location.pathname]); // 경로가 바뀔 때마다 실행

  const handleClick = (tab) => {
    navigate(tab.path);
  };

  return (
    <div className="flex flex-col mt-1 ml-7 z-[10]">
      {tabsData.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => handleClick(tab)}
            className={`h-[50px] w-[270px] text-[20px] font-bold text-white transition-colors duration-200 ${
              isActive ? 'bg-green-main' : 'bg-black hover:bg-gray-700'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default RouteTabs;
