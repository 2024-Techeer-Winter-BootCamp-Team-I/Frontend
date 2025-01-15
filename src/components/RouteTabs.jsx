import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tabsData = [
  { label: 'API', path: '/api' },
  { label: 'ERD', path: '/erd' },
  { label: 'DIAGRAM', path: '/diagram' },
];

function RouteTabs() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('API');

  const handleClick = (tab) => {
    setActiveTab(tab.label);
    navigate(tab.path);
  };

  return (
    <div className="flex flex-col">
      {tabsData.map((tab) => {
        const isActive = activeTab === tab.label;
        return (
          <button
            key={tab.label}
            onClick={() => handleClick(tab)}
            className={`h-[57px] w-[350px] text-[20px] font-bold text-white transition-colors duration-200 ${isActive ? 'bg-green-main' : 'bg-black hover:bg-gray-700'} `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default RouteTabs;
