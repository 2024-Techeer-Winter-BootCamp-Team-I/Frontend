<<
import { useState } from 'react';
import GithubIcon from '../assets/image/Github.svg'; // SVG 파일 import

import Button from './Button/Button';
import { createRepository } from '../api/reposApi'; // createRepository 함수 import
// import { fetchUserOrganizations } from '../api/user'; // 예시: Organization 목록 가져오는 함수
import useSettingStore from '../store/useSettingStore';

const GitRepository = () => {
  const [activeButton, setActiveButton] = useState(null); // 현재 활성화된 버튼 상태
  const [isPrivate, setIsPrivate] = useState(false); // 레포지토리 비공개 여부 상태
  const organizations = useState([]); // 사용자 Organization 목록 상태
  const [selectedOrganization, setSelectedOrganization] = useState(''); // 선택된 Organization 상태
  const [repoName, setRepoName] = useState(''); // 레포지토리 이름 상태


  const projectDir = useSettingStore((state) => state.project_dir);


  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 사용자 Organization 목록을 가져옴
  //   const fetchOrganizations = async () => {
  //     try {
  //       const orgs = await fetchUserOrganizations();
  //       setOrganizations(orgs);
  //     } catch (error) {
  //       console.error('Error fetching organizations:', error);
  //     }
  //   };

  //   fetchOrganizations();
  // }, []);

  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // "CREATE" 버튼 클릭 시 동작
  const handleCreateClick = async () => {
    if (!repoName) {
      alert('Organization과 Repository 이름을 모두 입력해주세요.');
      return;
    }

    try {
      // createRepository 함수 호출
      const response = await createRepository({
        organizationName: selectedOrganization,
        repoName,
        isPrivate,
        projectDir, // 필요시 프로젝트 디렉토리 값 추가
      });
      console.log('레포지토리가 성공적으로 생성되었습니다:', response);
      alert('레포지토리가 성공적으로 생성되었습니다.');
    } catch (error) {
      console.error('레포지토리 생성 중 오류가 발생했습니다:', error);
      alert('레포지토리 생성 중 오류가 발생했습니다.');
    }
  };

  // 내부 원 활성화/비활성화 토글 함수
  const toggleInnerCircle = () => {
    setIsPrivate(!isPrivate);
  };

  return (
    <div className="flex items-center justify-center pt-14">
      <div>
        {/* 제목 텍스트 */}
        <div className="absolute left-[25rem] mt-[6rem] break-words font-sans text-[1.3rem] font-[100rem] font-semibold text-white">
          깃허브에 업로드하기
        </div>

        {/* 아이콘과 메인 컴포넌트가 들어가는 컨테이너 */}
        <div className="flex items-center space-x-[0.2rem]">
          {/* GitHub 아이콘 섹션 */}
          <div className="mt-[9rem] flex h-[8rem] w-[8rem] items-center justify-center">
            <img
              src={GithubIcon}
              alt="GitHub Logo"
              className="mr-[3rem] h-full w-full"
            />
          </div>

          {/* 메인 컴포넌트 */}
          <div className="mt-[9rem] flex h-[12rem] w-[55rem] rounded-[0.75rem] bg-[#212227]">
            {/* 왼쪽 섹션 */}
            <div className="flex w-[12rem] flex-col items-start justify-center space-y-[1.25rem] pl-[2.5rem]">
              {['REPOSITORY', 'PUSH'].map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => handleButtonClick(buttonName)} // 버튼 클릭 이벤트 처리
                  className={`font-sans text-[0.9rem] font-[590] ${
                    activeButton === buttonName
                      ? 'text-[#1488FC]' // 활성화된 버튼 색상
                      : 'text-[#D9D9D9]' // 비활성화된 버튼 색상
                  }`}
                >
                  {buttonName}
                </button>
              ))}
            </div>

            {/* 구분선 */}
            <div className="w-[0.0625rem] bg-black-700"></div>

            {/* 오른쪽 섹션 */}
            <div className="flex w-[40.4375rem] flex-col justify-center space-y-[1rem] pl-[2.3rem]">
              {/* 타이틀 행 */}
              <div className="flex items-center space-x-[0.9rem]">
                {/* 토글 버튼 */}
                <div
                  onClick={toggleInnerCircle}
                  className="relative h-[1.5rem] w-[1.5rem] cursor-pointer"
                >
                  <div className="absolute h-[1.5rem] w-[1.5rem] rounded-full bg-[#1488FC]" />
                  <div className="absolute left-[0.14rem] top-[0.14rem] h-[1.21875rem] w-[1.21875rem] rounded-full bg-[#212227]" />
                  <div
                    className={`absolute left-[0.25rem] top-[0.25rem] h-[1rem] w-[1rem] rounded-full ${
                      isPrivate ? 'bg-[#1488FC]' : 'bg-[#212227]'
                    }`}
                  />
                </div>
                <h3 className="text-[1rem] font-medium text-white">Private</h3>
              </div>

              {/* 입력 필드 */}
              <div className="flex gap-[1.2rem] pl-[1rem] pr-[1rem]">
                {/* 오른쪽 패딩 추가 */}
                <select
                  className="h-[2.2rem] flex-1 rounded-md border border-gray-300 px-[0.5rem]"
                  value={selectedOrganization}
                  onChange={(e) => setSelectedOrganization(e.target.value)}
                >
                  <option value="">Organization Name</option>
                  {organizations.map((org) => (
                    <option key={org.id} value={org.login}>
                      {org.login}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Repository Name"
                  className="mr-[0.1rem] h-[2.2rem] flex-1 rounded-md border border-gray-300 px-[1rem]" // 오른쪽 마진 추가
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                />
              </div>

              {/* "CREATE" 버튼 */}
              <div className="flex justify-end pr-[1rem]">
                <Button
                  size="small"
                  label="create"
                  color="primary"
                  onClick={handleCreateClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitRepository;
