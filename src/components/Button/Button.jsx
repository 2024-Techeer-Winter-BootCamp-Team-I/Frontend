import PropTypes from 'prop-types';
const Button = ({ label, size, color, onClick }) => {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  const colorClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
    danger: 'bg-red-500 text-white hover:bg-red-700',
  };
  return (
    <button
      className={`rounded font-bold focus:outline-none ${sizeClass[size]} ${colorClass[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  onClick: PropTypes.func,
};
Button.defaultProps = {
  size: 'medium',
  color: 'primary',
  onClick: () => {},
};
export default Button;
