import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/auth';
import useLoginStore from '../store/LoginStore';

const MyProject = () => {
  const navigate = useNavigate();
  const {
    profileImage,
    documentTitle,
    setUserInfo,
    addDocumentTitleName,
    setEmail,
    email, // email 상태 추가
  } = useLoginStore();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { githubUsername, email, documentTitle } = await getProfile();
        setUserInfo(githubUsername, profileImage);
        documentTitle.forEach((document) => addDocumentTitleName(document));
        setEmail(email);
      } catch (error) {
        console.error('프로필 정보 조회 실패:', error);
      }
    };

    fetchProfile();
  }, [setUserInfo, addDocumentTitleName, setEmail]); // profileImage 제거

  const handleDocumentClick = (document) => {
    if (!document) return; // Document가 undefined 또는 null인 경우 처리
    navigate(`/${document.toLowerCase().replace(/ /g, '-')}`); // 공백을 하이픈으로 대체
  };

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        {/* 하늘색 테두리 네모박스 */}
        <div className="h-[35rem] w-[40rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#030303]">
          {/* GitHub 아이콘과 이름 */}
          <div className="ml-[5rem] mr-[5rem] mt-[2.5rem] flex items-center">
            <img
              src={profileImage}
              alt="ProfileImage"
              className="h-[5rem] w-[5rem] rounded-full" // 프로필 이미지를 둥글게 표시
            />
            <p className="ml-[1.5rem] text-[1rem] font-medium text-white">
              {email || '사용자 이메일'} {/* setEmail 대신 email 사용 */}
            </p>
          </div>

          {/* 회색 네모박스 리스트 */}
          <div className="mb-[2rem] flex h-[25rem] flex-col items-center justify-center space-y-[1.2rem]">
            <div className="flex h-[20rem] w-[30rem] flex-col items-center overflow-y-auto">
              {documentTitle.map((document, index) => (
                <button
                  key={index}
                  onClick={() => handleDocumentClick(document)}
                  className="mb-[1.2rem] flex h-[3.9rem] w-full flex-shrink-0 items-center rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition hover:bg-[#4B4B4B] hover:text-blue-main"
                >
                  <p className="text-[1rem] font-medium text-white">
                    {document}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
