import { useNavigate } from 'react-router-dom';
import GithubIcon from '../assets/image/Github.svg';

const Myproject = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        {/*하늘색 테두리 네모박스 */}
        <div className="h-[35rem] w-[40rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#030303]">
          {/* GitHub 아이콘과 이름 */}
          <div className="ml-[5rem] mt-[2.5rem] flex items-center">
            <img src={GithubIcon} alt="GitHub" className="h-[5rem] w-[5rem]" />
            <p className="ml-[1rem] text-[1rem] font-medium text-white">
              박유경
            </p>
          </div>

          {/* 회색 네모박스 리스트 */}
          <div className="mt-[3rem] flex flex-col items-center justify-center space-y-[1.2rem]">
            {[
              'First Project',
              'Second Project',
              'Third Project',
              'Fourth Project',
            ].map((project, index) => (
              <button
                key={index}
                onClick={() => handleProjectClick(project)}
                className="flex h-[3.9rem] w-[30rem] items-center rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition group-hover:text-blue-main hover:bg-[#4B4B4B]"
              >
                <p className="text-[1rem] font-medium text-white">{project}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
