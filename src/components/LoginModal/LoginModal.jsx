import github from '../../assets/image/github.svg'; // GitHub 아이콘

// eslint-disable-next-line react/prop-types
const LoginModal = ({ onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        {/* 모달 자체 */}
        <div className="relative h-[40rem] w-[30rem] rounded-lg border border-[#6F6F6F] bg-[#0E1216] p-6 shadow-lg">
          {/* 닫기 버튼 */}
          <button
            className="absolute right-2 top-2 mr-2 text-2xl text-gray-200 hover:text-gray-800"
            onClick={onClose} // 닫기 버튼 클릭 시 모달 닫기
          >
            &times;
          </button>
          {/* 상단 타이틀 */}
          <h2 className="mb-8 pt-2 text-center font-sans text-[1.5rem] font-bold text-white">
            Log in
          </h2>
          {/* 구분선 */}
          <hr className="my-6 w-full border-gray-600" />{' '}
          {/* w-full로 수정 (양쪽 끝에 닿도록) */}
          {/* 로고 */}
          <div className="mt-40 flex justify-center">
            {' '}
            {/* mt-10으로 조정 (중간으로 올림) */}
            <h1 className="bg-gradient-to-r from-[#FFFFFF] via-[#9BB6CC] to-[#01457E] bg-clip-text text-[2rem] font-bold text-transparent">
              DevSketch
            </h1>
          </div>
          {/* GitHub 로그인 버튼 */}
          <div className="mt-40 flex flex-col items-center">
            {' '}
            {/* mt-16으로 조정 (버튼과 텍스트를 아래로 내림) */}
            <button
              className="mb-4 flex w-full max-w-[250px] items-center justify-center space-x-2 rounded-md border border-[#6F6F6F] bg-[#090909] px-4 py-2 text-white shadow transition-colors duration-200 hover:border-[#D9D9D9] hover:bg-[#D9D9D9] hover:text-black"
              onClick={() => {
                alert('GitHub 로그인 되었습니다.');
              }}
            >
              <img src={github} alt="GitHub Icon" className="h-5 w-5" />
              <span className="font-medium">Log in with GitHub</span>
            </button>
            {/* 안내 문구 */}
            <p className="mt-4 text-center text-white">
              Sign in to <span className="font-medium text-white">GitHub</span>
              <br />
              to continue to{' '}
              <span className="font-bold text-white">DevSketch</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
