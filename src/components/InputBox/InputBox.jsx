import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const InputBox = ({ size, placeholder, value, onChange }) => {
  const sizeClass = {
    small: 'w-[600px] h-[40px]',
    medium: 'w-[600px] h-[80px]',
    large: 'w-[600px] h-[130px]',
  };

  return (
    <input
      type="text"
      className={`rounded-lg bg-gray-800 p-2 text-white placeholder-gray-400 ${sizeClass[size]}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

InputBox.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputBox;
