import { useNavigate } from 'react-router-dom';
import GithubIcon from '../assets/image/Github.svg';
import TrashcanIcon from '../assets/image/trashcan.svg'; // trashcan 아이콘 추가

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
          {/* GitHub 아이콘과 이메일 */}
          <div className="ml-[5rem] mt-[2.5rem] flex items-center">
            <img src={GithubIcon} alt="GitHub" className="h-[5rem] w-[5rem]" />
            <p className="ml-[1rem] text-[1rem] font-medium text-white">
              kimyeeun0885@gmail.com
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
              <div className="flex items-center gap-4" key={index}>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="flex h-[3.9rem] w-[30rem] items-center rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition hover:bg-[#4B4B4B]"
                >
                  <p className="text-[1rem] font-medium text-white">{project}</p>
                </button>

                {/* trashcan 아이콘 추가 */}
                <img
                  src={TrashcanIcon}
                  alt="Delete"
                  className="h-[2rem] w-[2rem] cursor-pointer hover:opacity-70"
                  onClick={() => console.log(`${project} 삭제`)} // 아이콘 클릭 시 삭제 로직 추가
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myproject;
