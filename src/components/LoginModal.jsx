import logo from '../assets/image/logo.svg';
import greenSnake from '../assets/image/greenSnake.svg';
import blueSnake from '../assets/image/blueSnake.svg';
import github from '../assets/image/github.svg';

const LoginModal = () => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        {/* 모달 자체 */}
        <div className="relative w-[400px] rounded-lg bg-[#CFCFCF] p-6 shadow-lg">
          {/* 닫기 버튼 */}
          <button className="absolute right-2 top-2 mr-2 text-2xl text-gray-500 hover:text-gray-800">
            &times;
          </button>

          {/* 상단 타이틀 */}
          <h2 className="mb-4 text-center font-sans text-[25px] font-semibold">
            Log in
          </h2>
          <hr className="mb-6 border-black" />

          {/* 로고 */}
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-[80px] w-[160px]" />
          </div>

          {/* 구분선 */}
          <hr className="my-6 border-gray-300" />

          {/* 드래곤 이미지들 */}
          <div className="mb-6 flex justify-center space-x-4">
            <img
              src={greenSnake}
              alt="GreenSnake"
              className="h-[80px] w-[80px]"
            />
            <img
              src={blueSnake}
              alt="BlueSnake"
              className="h-[80px] w-[80px]"
            />
          </div>

          {/* GitHub 로그인 버튼 */}
          <div className="flex flex-col items-center">
            <button
              className="mb-4 flex w-full max-w-[250px] items-center justify-center space-x-2 rounded-md bg-white px-4 py-2 text-black shadow hover:bg-gray-200"
              onClick={() => {
                alert('GitHub 로그인!');
              }}
            >
              <img src={github} alt="GitHub Icon" className="h-5 w-5" />
              <span className="font-medium">Log in with GitHub</span>
            </button>

            {/* 안내 문구 */}
            <p className="mt-4 text-center text-gray-600">
              Sign in to <span className="font-bold text-gray-900">GitHub</span>
              <br />
              to continue to{' '}
              <span className="font-bold text-gray-900">DevSketch</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
