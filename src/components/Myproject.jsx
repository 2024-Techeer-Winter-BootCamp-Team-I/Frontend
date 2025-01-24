import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GithubIcon from '../assets/image/Github.svg';
import useLoginStore from '../store/LoginStore'; // Zustand 스토어 import
import { getProfile } from '../api/auth'; // 프로필 정보를 가져오는 API 함수

const Myproject = () => {
  const navigate = useNavigate();
  const {
    loginStatus,
    userEmail, // userName 대신 userEmail 사용
    profileImage,
    setLoginStatus,
    setUserInfo,
  } = useLoginStore();

  // 사용자 인증 상태 확인
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile(); // getProfile을 사용하여 프로필 정보 가져오기
        setLoginStatus(true);
        setUserInfo(profileData.userEmail, profileData.profileImage); // userEmail 설정
      } catch (error) {
        console.error('사용자 정보 로드 실패:', error);
        setLoginStatus(false);
      }
    };

    fetchProfile();
  }, [setLoginStatus, setUserInfo]);

  const handleProjectClick = (project) => {
    navigate(`/${project.toLowerCase().replace(' ', '-')}`);
  };

  if (!loginStatus) return <div>Loading...</div>; // 로그인 상태가 로딩 중일 때 표시

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        {/* 하늘색 테두리 네모박스 */}
        <div className="h-[35rem] w-[40rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#030303]">
          {/* GitHub 아이콘과 이름 */}
          <div className="ml-[5rem] mt-[2.5rem] flex items-center">
            <img
              src={profileImage || GithubIcon} // 프로필 이미지가 없을 경우 기본 아이콘 사용
              alt="GitHub"
              className="h-[5rem] w-[5rem] rounded-full"
            />
            <p className="ml-[1rem] text-[1rem] font-medium text-white">
              {userEmail} {/* 사용자 이메일 표시 */}
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
                className="flex h-[3.9rem] w-[30rem] items-center rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition hover:bg-[#4B4B4B] group-hover:text-blue-main"
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