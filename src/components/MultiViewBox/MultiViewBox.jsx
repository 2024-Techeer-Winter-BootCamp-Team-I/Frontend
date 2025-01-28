import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import SaveIcon from '../../assets/image/save.svg';

const MultiViewBox = ({ type, imageContent, codeContent }) => {
  const [activeTab, setActiveTab] = useState('image'); // 기본 활성화 탭: 'image'
  const navigate = useNavigate();

  // 탭 클릭 핸들러
  const handleTabClick = (tab) => setActiveTab(tab);

  // 저장 버튼 핸들러
  const handleSaveClick = () => {
    console.log(`${type} 저장 클릭`);
  };

  return (
    <div className="relative ml-48 mt-14 flex flex-col">
      {/* 다이어그램 및 코드 보기 영역 */}
      <div className="relative h-[28rem] w-3/4 rounded-[1.875rem] bg-gradient-to-br from-[rgba(255,255,255,0.55)] via-[#7885E9] to-[#485CF3]">
        {/* 내부 컨테이너 */}
        <div className="absolute left-[0.125rem] top-[0.125rem] h-[calc(100%-0.25rem)] w-[calc(100%-0.25rem)] rounded-[1.875rem] bg-[#141414]" />

        {/* 저장 버튼 */}
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={handleSaveClick}
        >
          <img src={SaveIcon} alt="Save" className="h-6 w-6" />
        </div>

        {/* 탭 버튼 */}
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

        {/* 콘텐츠 렌더링 */}
        <div className="h-full overflow-auto p-4">
          {activeTab === 'image' && (
            <div className="h-full">{imageContent}</div>
          )}
          {activeTab === 'code' && (
            <pre className="whitespace-pre-wrap text-white">
              {codeContent.replace(/\\n/g, '\n')}
            </pre>
          )}
        </div>

        {/* 이전/세팅 버튼 */}
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

MultiViewBox.propTypes = {
  type: PropTypes.string.isRequired,
  imageContent: PropTypes.node.isRequired,
  codeContent: PropTypes.string.isRequired,
};

export default MultiViewBox;
