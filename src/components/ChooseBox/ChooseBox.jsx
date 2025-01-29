import PropTypes from 'prop-types';

const ChooseBox = ({
  label,
  backColor = 'bg-black', // 기본 배경색 (Tailwind 클래스)
  imageUrl,
  description,
  isSelected, // 외부에서 전달된 선택 상태
  onClick, // 클릭 이벤트 핸들러
}) => {
  return (
    // 그라데이션 사각형
    <div className="[rgba(255,255,255,0.55)] relative h-[20rem] w-[13rem] flex-shrink-0 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#495DF3] via-[#848181] to-[#848181]">
      {/* 내부 상자 */}
      <div
        className={`absolute left-[0.125rem] top-[0.1rem] z-[20] h-[19.8rem] w-[12.8rem] rounded-[1.4rem] transition-colors duration-200 hover:bg-gray-600 ${
          isSelected ? 'bg-gray-800' : backColor
        }`} // 선택 상태에 따라 배경색 변경
        onClick={onClick} // 클릭 이벤트 전달
      >
        {/* 기술스택 이름 */}
        <label
          className={`absolute left-7 top-6 font-sans text-[1.5rem] text-lg font-semibold text-white`} // 선택 상태에 따라 글자색 변경
        >
          {label}
        </label>

        {/* 이미지와 설명 컨테이너 */}
        <div className="mt-3 flex h-full flex-col items-center justify-center">
          {/* 이미지 */}
          {imageUrl && (
            <img src={imageUrl} alt={label} className="h-[5rem] w-[5rem]" />
          )}

          {/* 기술스택 설명 */}
          {description && (
            <p className="ml-5 mr-4 mt-8 font-sans text-sm font-light text-white">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

ChooseBox.propTypes = {
  label: PropTypes.string.isRequired, // 기술스택 이름
  backColor: PropTypes.string, // 배경색
  imageUrl: PropTypes.string, // 이미지 URL
  description: PropTypes.string, // 설명
  isSelected: PropTypes.bool, // 선택 상태
  onClick: PropTypes.func, // 클릭 이벤트 핸들러
};

// 기본값 설정
ChooseBox.defaultProps = {
  backColor: 'bg-[#141414]', // 기본 배경색
  imageUrl: null, // 기본 이미지 URL
  description: null, // 기본 설명
  isSelected: false, // 기본 선택 상태
  onClick: () => {}, // 기본 클릭 이벤트 핸들러
};

export default ChooseBox;
