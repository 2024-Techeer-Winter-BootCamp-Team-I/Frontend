import { useState } from 'react';
import PropTypes from 'prop-types';

const ChooseBox = ({
  title,
  textColor,
  borderColor,
  circleColor,
  backColor,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleBackGround = () => {
    if (isClicked) {
      if (borderColor === 'border-blue-main') {
        return 'bg-blue-900';
      } else {
        return 'bg-green-900';
      }
    }
    return backColor;
  };

  return (
    // ChooseBox 컨테이너
    <div
      className={`relative h-[22.9rem] w-[15.8rem] ${borderColor} ${handleBackGround()} items-start-end relative flex cursor-pointer flex-col items-center justify-start rounded-[3.125rem] border-[0.3125rem] p-4`}
      onClick={handleClick}
    >
      {/* 기술스택 텍스트 */}
      <h2
        className={`absolute left-7 top-6 text-[1.5rem] text-lg font-semibold ${textColor}`}
      >
        {title}
      </h2>

      {/* 원 그림 아이템 */}
      <div
        className={`${borderColor} absolute right-4 top-4 flex h-[2.4rem] w-[2.4rem] flex-shrink-0 items-center justify-center rounded-full border-2`}
      >
        <div
          className={`${circleColor} h-[1.5rem] w-[1.5rem] rounded-full`}
        ></div>
      </div>
    </div>
  );
};

// PropTypes 정의
ChooseBox.propTypes = {
  title: PropTypes.string.isRequired, // 제목 (필수)
  textColor: PropTypes.string, // 텍스트 색상 (선택)
  borderColor: PropTypes.string, // 테두리 색상 (선택)
  circleColor: PropTypes.string, // 원의 색상 (선택)
  backColor: PropTypes.string, // 배경 색상 (선택)
};

// 기본값 설정, 지정한 색깔 사용
ChooseBox.defaultProps = {
  textColor: 'text-blue-main', // 기본 텍스트 색상
  borderColor: 'border-blue-main', // 기본 테두리 색상
  circleColor: 'bg-blue-main', // 기본 원 색상
  backColor: 'bg-gray-main', // 기본 배경 색상
};

export default ChooseBox;
