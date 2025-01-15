import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 훅 import
import GreenDino from "../assets/image/greendino.svg"; // Green Dino 이미지 import
import GithubIcon from "../assets/image/Github.svg"; // GitHub 이미지 import

const Myproject = () => {
    const navigate = useNavigate();

    // 프로젝트 버튼 클릭 시 페이지 이동 함수
    const handleProjectClick = (project) => {
        navigate(`/${project.toLowerCase().replace(" ", "-")}`); // 페이지 경로 설정
    };

    return (
        <div className="absoulte flex ml-[25rem] mt-[5rem] min-h-screen bg-[#1E1E1E]">
            {/* 초록색 테두리 네모박스 */}
            <div className="relative w-[50rem] h-[27rem] bg-[#1E1E1E] border-[0.3125rem] border-[#61DF7E] rounded-[3.125rem]">
                {/* Green Dino 이미지 */}
                <img
                    src={GreenDino}
                    alt="Green Dino"
                    className="absolute -top-[3rem] left-[3rem] w-[3.125rem] h-[3.125rem]"
                />

                {/* GitHub 아이콘과 이메일 */}
                <div className="flex items-center ml-[5rem] mt-[1.2rem]">
                    <img src={GithubIcon} alt="GitHub" className="w-[5rem] h-[5rem]" />
                    <p className="text-white text-[1rem] font-medium ml-[1rem]">
                        kimyeeun0885@gmail.com
                    </p>
                </div>

                {/* 회색 네모박스 리스트 */}
                <div className="mt-[1.2rem] space-y-[0.7rem] flex flex-col items-center">
                    {["First Project", "Second Project", "Third Project", "Fourth Project"].map(
                        (project, index) => (
                            <button
                                key={index}
                                onClick={() => handleProjectClick(project)} // 버튼 클릭 이벤트 처리
                                className="w-[42.625rem] h-[3.7rem] bg-[rgba(255,255,255,0.70)] rounded-[0.625rem] flex items-center px-[1.25rem] text-left hover:bg-opacity-80 transition"
                            >
                                <p className="text-blue-main text-[1rem] font-medium">{project}</p>
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Myproject;
