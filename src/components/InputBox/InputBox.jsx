import PropTypes from 'prop-types';

const InputBox = ({ size, placeholder, value, onChange }) => {
  const sizeClass = {
    small: 'w-[600px] h-[40px]',
    medium: 'w-[600px] h-[80px]',
    large: 'w-[600px] h-[130px]',
  };

  return (
    <input
      className={`rounded-lg bg-gray-800 p-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClass[size]}`}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange} // 여기서 이벤트를 부모 컴포넌트로 전달
    />
  );
};

// PropTypes 정의
InputBox.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired, // 크기 (필수)
  placeholder: PropTypes.string.isRequired, // 플레이스홀더 텍스트 (필수)
  value: PropTypes.string.isRequired, // 입력값 (필수)
  onChange: PropTypes.func.isRequired, // 이벤트 핸들러 (필수)
};

// 기본값 설정 (Optional)
InputBox.defaultProps = {
  size: 'medium', // 기본 사이즈를 medium으로 설정
};

export default InputBox;
