import { opacify } from 'polished';
import PropTypes from 'prop-types';
const Button = ({ label, size, color, onClick }) => {
  const sizeClass = {
    small:
      'flex items-center justify-center px-2 py-1 text-[14px] font-medium font-sans w-[100px] h-[30px]',
    medium:
      'flex items-center justify-center font-sans font-semibold text-[22px] px-4 py-2  w-[250px] h-[50px] ',
  };
  const colorClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-black hover:bg-gray-300',
  };
  return (
    <button
      className={`rounded font-sans font-bold focus:outline-none ${sizeClass[size]} ${colorClass[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf(['primary']),
  onClick: PropTypes.func,
};
Button.defaultProps = {
  size: 'medium',
  color: 'primary',
  onClick: () => {},
};
export default Button;
