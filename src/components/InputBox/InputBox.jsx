import PropTypes from 'prop-types';

const InputBox = ({ size, placeholder }) => {
  const sizeClass = {
    small: 'w-[600px] h-[40px]',
    medium: 'w-[600px] h-[80px]',
    large: 'w-[600px] h-[130px]',
  };

  return (
    <input
      type="text"
      className={`rounded-lg bg-[#111F2C] opacity-[80%] p-2 text-white placeholder-gray-400 placeholder:text-sm ${sizeClass[size]}`}
      placeholder={placeholder}
    />
  );
};

InputBox.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputBox;