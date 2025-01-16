import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate 훅 import
import greenSnake from '../assets/image/greenSnake.svg';
import GithubIcon from '../assets/image/Github.svg'; // GitHub 이미지 import

const Myproject = () => {
  const navigate = useNavigate();

  // 프로젝트 버튼 클릭 시 페이지 이동 함수
  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(' ', '-')}`); // 페이지 경로 설정
  };

  return (
    <div className="absoulte ml-[25rem] mt-[5rem] flex min-h-screen bg-[#1E1E1E]">
      {/* 초록색 테두리 네모박스 */}
      <div className="relative h-[27rem] w-[50rem] rounded-[3.125rem] border-[0.3125rem] border-[#61DF7E] bg-[#1E1E1E]">
        <img
          src={greenSnake}
          alt="GreenSnake"
          className="absolute -top-[3rem] left-[3rem] h-[3.125rem] w-[3.125rem]"
        />

        {/* GitHub 아이콘과 이메일 */}
        <div className="ml-[5rem] mt-[1.2rem] flex items-center">
          <img src={GithubIcon} alt="GitHub" className="h-[5rem] w-[5rem]" />
          <p className="ml-[1rem] text-[1rem] font-medium text-white">
            kimyeeun0885@gmail.com
          </p>
        </div>

        {/* 회색 네모박스 리스트 */}
        <div className="mt-[1.2rem] flex flex-col items-center space-y-[0.7rem]">
          {[
            'First Project',
            'Second Project',
            'Third Project',
            'Fourth Project',
          ].map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectClick(project)} // 버튼 클릭 이벤트 처리
              className="flex h-[3.7rem] w-[42.625rem] items-center rounded-[0.625rem] bg-[rgba(255,255,255,0.70)] px-[1.25rem] text-left transition hover:bg-opacity-80"
            >
              <p className="text-[1rem] font-medium text-blue-main">
                {project}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myproject;
