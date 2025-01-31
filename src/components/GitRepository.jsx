import { useState, useEffect } from 'react';
import GithubIcon from '../assets/image/github.svg'; // SVG 파일 import
import Button from './Button/Button';
import DockerModal from './DockerModal'; // DockerModal 컴포넌트 import
import { ClipLoader } from 'react-spinners';

import { createRepository, startDockerInDocker } from '../api/reposApi'; // createRepository 및 startDockerInDocker 함수 import

import useSettingStore from '../store/useSettingStore';
import useLoginStore from '../store/LoginStore'; // useLoginStore import
import useDocumentStore from '../store/useDocumentStore'; // useDocumentStore import

const GitRepository = () => {
  const [activeButton, setActiveButton] = useState(null); // 현재 활성화된 버튼 상태
  const [isPrivate, setIsPrivate] = useState(false); // 레포지토리 비공개 여부 상태
  const [repoName, setRepoName] = useState(''); // 레포지토리 이름 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [warningMessage, setWarningMessage] = useState(''); // 주의사항 메시지 상태 추가

  const documentId = useDocumentStore((state) => state.documentId); // documentId만 가져오기
  const userName = useLoginStore((state) => state.userName); // userName 상태만 가져오기
  const projectDir = useSettingStore((state) => state.project_dir);
  const setRepoUrl = useSettingStore((state) => state.setRepoUrl);
  const repoUrl = useSettingStore((state) => state.repoUrl); // repoUrl 상태 추가
  const setDockerUrl = useSettingStore((state) => state.setDockerUrl);
  const dockerUrl = useSettingStore((state) => state.dockerUrl); // dockerUrl 상태 추가

  // repoUrl 상태가 변경될 때마다 로그 출력
  useEffect(() => {
    console.log('Updated repoUrl:', repoUrl);
  }, [repoUrl]);

  // userName 상태가 변경될 때마다 로그 출력
  useEffect(() => {
    console.log('Updated userName:', userName);
  }, [userName]);

  // isPrivate 상태가 변경될 때마다 로그 출력 및 주의사항 메시지 업데이트
  useEffect(() => {
    console.log('Updated isPrivate:', isPrivate);
    if (isPrivate) {
      setWarningMessage(
        '주의: Private 레포지토리 생성시 테스트 기능을 사용할 수 없습니다.',
      );
    } else {
      setWarningMessage('');
    }
  }, [isPrivate]);

  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // "CREATE" 버튼 클릭 시 동작
  const handleCreateClick = async () => {
    if (!repoName) {
      alert('Repository 이름을 입력해주세요.');
      return;
    } else {
      setLoading(true); // 로딩 상태 활성화
    }

    try {
      // createRepository 함수 호출
      const response = await createRepository({
        repoName,
        isPrivate,
        projectDir, // 필요시 프로젝트 디렉토리 값 추가
      });
      console.log('레포지토리가 성공적으로 생성되었습니다:', response);
      alert('깃허브에 업로드 되었습니다!');

      // 응답에서 url 추출 및 상태 업데이트
      setRepoUrl(response.repo_url); // repoUrl 상태 업데이트
      console.log('Repository URL:', response.repo_url);
    } catch (error) {
      console.error('레포지토리 생성 중 오류가 발생했습니다:', error);
      alert('레포지토리 생성 중 오류가 발생했습니다.');
      console.log('request:', { repoName, isPrivate, projectDir });
    } finally {
      setLoading(false); // 로딩 상태 비활성화
    }
  };

  // "docker In docker" 버튼 클릭 시 동작
  const handleDockerClick = async () => {
    console.log('Current repoUrl:', repoUrl); // repoUrl 상태 확인
    console.log('Current userName:', userName); // userName 상태 확인
    console.log('Current repoName:', repoName); // repoName 상태 확인

    setIsModalOpen(true); // 모달 열기

    if (!repoUrl) {
      alert('먼저 레포지토리를 생성해주세요.');
      return;
      // } else {
      //   setLoading(true); // 로딩 상태 활성화
    }

    // try {
    //   // startDockerInDocker 함수 호출
    //   const { dockerUrl } = await startDockerInDocker({
    //     repoUrl, // repoUrl 사용
    //     githubName: userName, // githubName 생성
    //     repoName,
    //   });

    //   setDockerUrl(dockerUrl); // dockerUrl 상태 업데이트
    //   console.log('Docker in Docker started successfully:', dockerUrl);
    //   alert('도커인도커가 생성 완료되었습니다!');
    // } catch (error) {
    //   console.error('Error starting Docker in Docker:', error);
    //   alert('Error starting Docker in Docker.');
    // } finally {
    //   setLoading(false); // 로딩 상태 비활성화
    // }
  };

  return (
    <div className="flex items-center justify-center pt-14">
      <div>
        {/* 제목 텍스트 */}

        <div className="absolute left-[20rem] mt-[6rem] break-words font-sans text-[1rem] font-semibold text-white">
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
            <div className="ml-auto mr-auto flex w-[12rem] flex-col items-center justify-center space-y-[1.25rem]">
              {['REPOSITORY'].map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => handleButtonClick(buttonName)} // 버튼 클릭 이벤트 처리
                  className={`flex justify-center font-sans text-[0.9rem] font-medium ${
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
                {/* Private 토글 버튼 */}
                <div
                  onClick={() => setIsPrivate(true)}
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
                <div className="text-white">Private</div>

                {/* Public 토글 버튼 */}
                <div
                  onClick={() => setIsPrivate(false)}
                  className="relative ml-4 h-[1.5rem] w-[1.5rem] cursor-pointer"
                >
                  <div className="absolute h-[1.5rem] w-[1.5rem] rounded-full bg-[#1488FC]" />
                  <div className="absolute left-[0.14rem] top-[0.14rem] h-[1.21875rem] w-[1.21875rem] rounded-full bg-[#212227]" />
                  <div
                    className={`absolute left-[0.25rem] top-[0.25rem] h-[1rem] w-[1rem] rounded-full ${
                      !isPrivate ? 'bg-[#1488FC]' : 'bg-[#212227]'
                    }`}
                  />
                </div>
                <div className="text-white">Public</div>

                {isPrivate && (
                  <div className="mr-2 text-xs text-red-500">
                    {warningMessage}
                  </div>
                )}
              </div>

              {/* 주의사항 메시지 */}

              {/* 입력 필드 */}
              <div className="flex gap-[1.2rem] pl-[1rem] pr-[1rem]">
                <input
                  type="text"
                  placeholder="Repository Name"
                  className="mr-[0.1rem] h-[2.2rem] flex-1 rounded-md border border-gray-300 px-[1rem]" // 오른쪽 마진 추가
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value)}
                />
              </div>

              {/* "CREATE" 버튼 */}
              <div className="flex justify-end gap-3 pr-[1rem]">
                <Button
                  size="small"
                  label="push"
                  color="primary"
                  onClick={handleCreateClick}
                />
                <Button
                  size="small"
                  label="test"
                  color="primary"
                  onClick={handleDockerClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <ClipLoader size={50} color={'#ffffff'} />
        </div>
      )}

      {isModalOpen && (
        <DockerModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`사이트에서 확인해보세요!`}
          url={dockerUrl} // zustand에서 가져온 dockerUrl 전달
        >
          <p className="font-sans text-[0.9rem] text-gray-600">
            현재 테스트 단계이므로 작동에 문제가 있을 수 있습니다.
          </p>
        </DockerModal>
      )}
    </div>
  );
};

export default GitRepository;
