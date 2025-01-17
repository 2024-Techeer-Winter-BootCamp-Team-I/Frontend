import React from "react";
import github from "../assets/image/github.svg"; // GitHub 아이콘

const LoginModal = ({ onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        {/* 모달 자체 */}
        <div className="relative h-[40rem] w-[30rem] rounded-lg bg-[#0E1216] p-6 shadow-lg border border-[#6F6F6F]">
          {/* 닫기 버튼 */}
          <button
            className="absolute right-2 top-2 mr-2 text-2xl text-gray-200 hover:text-gray-800"
            onClick={onClose} // 닫기 버튼 클릭 시 모달 닫기
          >
            &times;
          </button>

          {/* 상단 타이틀 */}
          <h2 className="mb-8 text-center font-sans text-white text-[1.5rem] font-bold pt-2">
            Log in
          </h2>

          {/* 구분선 */}
          <hr className="my-6 border-gray-600 w-full" /> {/* w-full로 수정 (양쪽 끝에 닿도록) */}

          {/* 로고 */}
          <div className="flex justify-center mt-40"> {/* mt-10으로 조정 (중간으로 올림) */}
            <h1 className="text-[2rem] font-bold bg-gradient-to-r from-[#FFFFFF] via-[#9BB6CC] to-[#01457E] bg-clip-text text-transparent">
              DevSketch
            </h1>
          </div>

          {/* GitHub 로그인 버튼 */}
          <div className="flex flex-col mt-40 items-center"> {/* mt-16으로 조정 (버튼과 텍스트를 아래로 내림) */}
            <button
              className="mb-4 flex w-full max-w-[250px] items-center justify-center space-x-2 rounded-md bg-[#090909] px-4 py-2 text-white shadow border border-[#6F6F6F] hover:bg-[#D9D9D9] hover:text-black hover:border-[#D9D9D9] transition-colors duration-200"
              onClick={() => {
                alert("GitHub 로그인 되었습니다.");
              }}
            >
              <img src={github} alt="GitHub Icon" className="h-5 w-5" />
              <span className="font-medium">Log in with GitHub</span>
            </button>

            {/* 안내 문구 */}
            <p className="mt-4 text-center text-white">
              Sign in to <span className="font-medium text-white">GitHub</span>
              <br />
              to continue to{" "}
              <span className="font-bold text-white">DevSketch</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;