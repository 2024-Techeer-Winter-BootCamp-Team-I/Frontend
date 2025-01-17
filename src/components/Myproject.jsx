import { useNavigate } from 'react-router-dom';
import GithubIcon from '../assets/image/Github.svg';

const Myproject = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center relative top-[-7rem]">
      {/*하늘늘색 테두리 네모박스 */}
      <div className="relative h-[27rem] w-[50rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#030303]">

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
              onClick={() => handleProjectClick(project)}
              className="flex h-[3.9rem] w-[44.5rem] items-center rounded-[0.625rem] bg-[rgba(255,255,255,0.70)] px-[1.25rem] text-left transition hover:bg-opacity-80"
            >
              <p className="text-[1rem] font-medium text-[#1488FC]">
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