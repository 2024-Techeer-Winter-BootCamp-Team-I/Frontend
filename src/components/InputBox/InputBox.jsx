import PropTypes from 'prop-types';

const InputBox = ({ size, placeholder }) => {
  const sizeClass = {
    small: 'w-[600px] h-[40px]',
    medium: 'w-[600px] h-[80px]',
    large: 'w-[600px] h-[120px]',
  };

  return (
    <input
      type="text"
      className={`rounded-lg bg-gray-800 p-2 text-white placeholder-gray-400 ${sizeClass[size]}`}
      placeholder={placeholder}
    />
  );
};

InputBox.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputBox;
