import PropTypes from 'prop-types';

const DockerModal = ({ isOpen, onClose, title, url, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="rounded-md bg-[#212227] p-6 text-center shadow-md">
        {/* text-center 클래스 추가 */}
        <h2 className="mb-12 text-xl font-semibold text-gray-300">{title}</h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-12 block text-blue-500 underline"
        >
          {url}
        </a>
        <div>{children}</div>
        <div className="text-right">
          <button
            onClick={onClose}
            className="mt-7 rounded-md bg-blue-500 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

DockerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DockerModal;
