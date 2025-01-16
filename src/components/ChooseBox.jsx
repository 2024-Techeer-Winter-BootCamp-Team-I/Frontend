import PropTypes from 'prop-types';

const ChooseBox = ({
  title,
  color, // 하나의 color 프로퍼티로 통합
  backColor,
  imageUrl,
  description, // 기술스택 설명 추가
  isSelected,
  onClick, // 부모 컴포넌트에서 전달된 onClick 핸들러
}) => {
  // isSelected에 따라 배경색과 테두리 색상 결정
  const handleBackGround = () => {
    if (isSelected) {
      return color === 'border-blue-main' ? 'bg-blue-900' : 'bg-green-900';
    }
    return backColor;
  };

  return (
    // ChooseBox 컨테이너
    <div
      className={`relative h-[20rem] w-[13rem] border-[0.3125rem] ${color} ${handleBackGround()} items-start-end relative flex cursor-pointer flex-col items-center justify-start rounded-[2rem] p-4`}
      onClick={onClick} // 부모 컴포넌트에서 전달된 onClick 호출
    >
      {/* 기술스택 이름 */}
      <h2
        className={`absolute left-7 top-6 font-sans text-[1.5rem] text-lg ${color.replace('border', 'text')}`} // border -> text로 변경
      >
        {title}
      </h2>

      {/* 이미지와 설명을 감싸는 컨테이너 */}
      <div className="mt-8 flex h-full flex-col items-center justify-center">
        {/* 이미지 */}
        {imageUrl && (
          <img
            src={imageUrl} // 이미지 URL
            alt={title} // 이미지 대체 텍스트
            className="h-[6.5rem] w-[6.5rem]" // 이미지 크기 조정
          />
        )}

        {/* 기술스택 설명 */}
        {description && (
          <p className="mt-4 text-sm text-white" style={{ fontSize: '14px' }}>
            {description}
          </p>
        )}
      </div>

      {/* 원 그림 아이템 */}
      <div
        className={`${color} absolute right-4 top-4 flex h-[2.4rem] w-[2.4rem] flex-shrink-0 items-center justify-center rounded-full border-2`} // color 사용
      >
        <div
          className={`${color.replace('border', 'bg')} h-[1.5rem] w-[1.5rem] rounded-full`} // border -> bg로 변경
        ></div>
      </div>
    </div>
  );
};

// PropTypes 정의
ChooseBox.propTypes = {
  title: PropTypes.string.isRequired, // 제목 (필수)
  color: PropTypes.string, // 색상 (선택)
  backColor: PropTypes.string, // 배경 색상 (선택)
  imageUrl: PropTypes.string, // 이미지 URL (선택)
  description: PropTypes.string, // 기술스택 설명 (선택)
  isSelected: PropTypes.bool, // 선택된 상태 (선택)
  onClick: PropTypes.func, // 클릭 핸들러 (선택)
};

// 기본값 설정
ChooseBox.defaultProps = {
  color: 'border-blue-main', // 기본 색상
  backColor: 'bg-gray-main', // 기본 배경 색상
  imageUrl: '', // 기본 이미지 URL
  description: '', // 기본 설명
  isSelected: false, // 기본 선택 상태
  onClick: () => {}, // 기본 클릭 핸들러
};

export default ChooseBox;
