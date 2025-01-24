import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import SaveIcon from '../../assets/image/save.svg';

// eslint-disable-next-line react/prop-types
const MultiViewBox = ({ type, imageContent, codeContent }) => {
  const [activeTab, setActiveTab] = useState('image'); // 기본 활성화 탭: 'image'
  const navigate = useNavigate();

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleSaveClick = () => {
    console.log(`${type} 저장 클릭`);
  };

  return (
    <div className="relative ml-48 mt-14 flex flex-col">
      <div className="relative h-[28rem] w-3/4 rounded-[1.875rem] bg-gradient-to-br from-[rgba(255,255,255,0.55)] via-[#7885E9] to-[#485CF3]">
        <div className="absolute left-[0.125rem] top-[0.125rem] h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[1.875rem] bg-[#141414]" />

        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={handleSaveClick}
        >
          <img src={SaveIcon} alt="Save" className="h-6 w-6" />
        </div>

        <div className="absolute left-[0.125rem] top-[-2rem] z-[30] ml-5 flex gap-0">
          <div
            onClick={() => handleTabClick('image')}
            className={`flex h-[2rem] w-[6rem] cursor-pointer flex-col items-center justify-center rounded-t-lg transition-all duration-300 ease-in-out ${
              activeTab === 'image'
                ? 'bg-[#1488FC] text-black'
                : 'bg-[#141414] text-white'
            }`}
          >
            <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
              이미지보기
            </span>
          </div>
          <div
            onClick={() => handleTabClick('code')}
            className={`flex h-[2rem] w-[6rem] cursor-pointer flex-col items-center justify-center rounded-t-lg transition-all duration-300 ease-in-out ${
              activeTab === 'code'
                ? 'bg-[#1488FC] text-black'
                : 'bg-[#141414] text-white'
            }`}
          >
            <span className="text-center font-sans text-[0.7rem] font-bold leading-normal">
              코드보기
            </span>
          </div>
        </div>

        {activeTab === 'image' && <div className="p-4">{imageContent}</div>}
        {activeTab === 'code' && (
          <div className="p-4 text-white">{codeContent}</div>
        )}

        <div className="absolute left-0 top-[31rem] z-20 ml-4 -translate-y-1/2 transform">
          <Button
            label="이전으로"
            size="small"
            color="primary"
            onClick={() => navigate('/specific')}
          />
        </div>
        <div className="absolute right-0 top-[31rem] z-20 mr-4 -translate-y-1/2 transform">
          <Button
            label="세팅"
            size="small"
            color="primary"
            onClick={() => navigate('/setting')}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiViewBox;
