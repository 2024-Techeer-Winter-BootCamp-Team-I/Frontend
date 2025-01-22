import github from '../../assets/image/github.svg'; // GitHub 아이콘
import { GithubLogin } from '../../api/auth'; // GitHub 로그인 함수

// eslint-disable-next-line react/prop-types
const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative h-[40rem] w-[30rem] rounded-lg border border-[#6F6F6F] bg-[#0E1216] p-6 shadow-lg">
        <button
          className="absolute right-2 top-2 text-2xl text-gray-200 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-8 pt-2 text-center font-sans text-[1.5rem] font-bold text-white">
          Log in
        </h2>
        <hr className="my-6 w-full border-gray-600" />
        <div className="mt-40 flex justify-center">
          <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#9BB6CC] to-[#01457E] bg-clip-text text-[2rem] font-bold text-transparent">
            DevSketch
          </h1>
        </div>
        <div className="mt-40 flex flex-col items-center">
          <button
            className="mb-4 flex w-full max-w-[250px] items-center justify-center space-x-2 rounded-md border border-[#6F6F6F] bg-[#090909] px-4 py-2 text-white shadow transition-colors duration-200 hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black"
            onClick={() => {
              GithubLogin();
            }}
          >
            <img src={github} alt="GitHub Icon" className="h-5 w-5" />
            <span className="font-medium">Log in with GitHub</span>
          </button>
          <p className="mt-4 text-center text-white">
            Sign in to <span className="font-medium text-white">GitHub</span>
            <br />
            to continue to{' '}
            <span className="font-bold text-white">DevSketch</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
