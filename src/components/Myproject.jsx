import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GithubIcon from '../assets/image/github.svg';
import TrashIcon from '../assets/image/trashcan.svg';

const Myproject = () => {
  const navigate = useNavigate();
  const [projects] = useState([
    'First Project',
    'Second Project',
    'Third Project',
    'Fourth Project',
  ]);

  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        {/* 하늘색 테두리 네모박스 */}
        <div className="h-[32rem] w-[44rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#101010]">
          {/* GitHub 아이콘과 이름 */}
          <div className="ml-[5rem] mt-[2.5rem] flex items-center">
            <img src={GithubIcon} alt="GitHub" className="h-[5rem] w-[5rem]" />
            <p className="ml-[1rem] text-[1rem] font-medium text-white">
              kimyeeun0885@naver.com
            </p>
          </div>

          {/* 회색 네모박스 리스트 */}
          <div className="mt-[1.8rem] flex flex-col items-center justify-center space-y-[1.2rem]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative flex h-[3.9rem] w-[35rem] items-center justify-between rounded-[0.625rem] bg-[#1d1d1d] px-[1.25rem] transition hover:bg-[#4B4B4B]"
              >
                {/* 프로젝트 이름 */}
                <button
                  onClick={() => handleProjectClick(project)}
                  className="text-[1rem] font-medium text-white"
                >
                  {project}
                </button>

                {/* 삭제 버튼 - 네모박스 안에 배치 */}
                <button className="flex items-center justify-center">
                  <img
                    src={TrashIcon}
                    alt="Delete"
                    className="h-[1.5rem] w-[1.5rem] transition hover:opacity-70"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
