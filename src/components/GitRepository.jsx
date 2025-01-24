import { useState, useEffect } from 'react';
import GithubIcon from '../assets/image/github.svg'; // SVG 파일 import
import Button from './Button/Button';

const GitRepository = () => {
  const [activeButton, setActiveButton] = useState(null); // 현재 활성화된 버튼 상태
  const [isPrivate, setIsPrivate] = useState(false); // 레포지토리 비공개 여부 상태
  const [organizations, setOrganizations] = useState([]); // 사용자 Organization 목록 상태
  const [selectedOrganization, setSelectedOrganization] = useState(''); // 선택된 Organization 상태
  const [repoName, setRepoName] = useState(''); // 레포지토리 이름 상태

  useEffect(() => {
    // 컴포넌트가 마운트될 때 사용자 Organization 목록을 가져옴
    const fetchOrganizations = async () => {
      try {
        const orgs = await fetchOrganizations();
        setOrganizations(orgs);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchOrganizations();
  }, []);

  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // "CREATE" 버튼 클릭 시 동작
  const handleCreateClick = async () => {
    try {
      await createRepository(selectedOrganization, repoName, isPrivate);
      console.log('레포지토리가 성공적으로 생성되었습니다.');
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
        <div className="relative left-[8rem] mb-[1rem] break-words font-sans text-[1.1rem] font-[100rem] text-white">
          깃허브에 업로드하기
        </div>

        {/* 아이콘과 메인 컴포넌트가 들어가는 컨테이너 */}
        <div className="flex items-center space-x-[1.25rem]">
          {/* GitHub 아이콘 섹션 */}
          <div className="flex h-[5rem] w-[5rem] items-center justify-center">
            <img src={GithubIcon} alt="GitHub Logo" className="h-full w-full" />
          </div>

          {/* 메인 컴포넌트 */}
          <div className="flex h-[9rem] w-[46rem] rounded-[0.75rem] bg-[#F1EDED]">
            {/* 왼쪽 섹션 */}
            <div className="flex w-[10rem] flex-col items-start justify-center space-y-[0.75rem] pl-[2rem]">
              {['REPOSITORY', 'PUSH', 'IDE'].map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => handleButtonClick(buttonName)} // 버튼 클릭 이벤트 처리
                  className={`font-sans text-[0.9rem] font-[590] ${
                    activeButton === buttonName
                      ? 'text-[#1488FC]' // 활성화된 버튼 색상
                      : 'text-[#545353]' // 비활성화된 버튼 색상
                  }`}
                >
                  {buttonName}
                </button>
              ))}
            </div>

            {/* 구분선 */}
            <div className="w-[0.0625rem] bg-black-800"></div>

            {/* 오른쪽 섹션 */}
            <div className="flex w-[40.4375rem] flex-col justify-center space-y-[0.7rem] pl-[1rem]">
              {/* 타이틀 행 */}
              <div className="flex items-center space-x-[0.7rem]">
                {/* 토글 버튼 */}
                <div
                  onClick={toggleInnerCircle}
                  className="relative h-[1.5rem] w-[1.5rem] cursor-pointer"
                >
                  <div className="absolute h-[1.5rem] w-[1.5rem] rounded-full bg-[#1488FC]" />
                  <div className="absolute left-[0.14rem] top-[0.14rem] h-[1.21875rem] w-[1.21875rem] rounded-full bg-[#D9D9D9]" />
                  <div
                    className={`absolute left-[0.25rem] top-[0.25rem] h-[1rem] w-[1rem] rounded-full ${
                      isPrivate ? 'bg-[#1488FC]' : 'bg-[#D9D9D9]'
                    }`}
                  />
                </div>
                <h3 className="text-[1rem] font-medium">Private</h3>
              </div>

              {/* 입력 필드 */}
              <div className="flex gap-[1rem] pl-[1rem] pr-[1rem]">
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
                  className="mr-[1rem] h-[2.2rem] flex-1 rounded-md border border-gray-300 px-[1rem]" // 오른쪽 마진 추가
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                />
              </div>

              {/* "CREATE" 버튼 */}
              <div className="flex justify-end pr-[2rem]">
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
