import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/auth';
import useLoginStore from '../store/LoginStore';
import GithubIcon from '../assets/image/github.svg';
import TrashIcon from '../assets/image/trashcan.svg'; // Trash 아이콘 import

const MyProject = () => {
  const navigate = useNavigate();
  const {
    userName,
    profileImage,
    documentTitle,
    setUserInfo,
    addDocumentTitleName,
    setEmail,
    email,
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
  }, [setUserInfo, addDocumentTitleName, setEmail]);

  const handleDocumentClick = (document) => {
    if (!document) return;
    navigate(`/${document.toLowerCase().replace(/ /g, '-')}`);
  };

  const handleDeleteDocument = (document) => {
    // 삭제 로직 추가 (예: 상태 업데이트, API 호출)
    console.log(`Deleting document: ${document}`);
  };

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        <div className="h-[32rem] w-[44rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#101010]">
          <div className="ml-[5rem] mr-[5rem] mt-[2.5rem] flex items-center">
            <img
              src={profileImage}
              alt="ProfileImage"
              className="h-[5rem] w-[5rem] rounded-full"
            />
            <p className="ml-[1rem] text-[1rem] font-medium text-white">
              {email || '사용자 이메일'}
            </p>
          </div>

          <div className="mt-[1.8rem] flex flex-col items-center justify-center space-y-[1.2rem]">
            <div className="flex h-[20rem] w-[30rem] flex-col items-center overflow-y-auto">
              {documentTitle.map((document, index) => (
                <div
                  key={index}
                  className="mb-[1.2rem] flex h-[3.9rem] w-full flex-shrink-0 items-center justify-between rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition hover:bg-[#4B4B4B] hover:text-blue-main"
                >
                  <p className="text-[1rem] font-medium text-white">
                    {document}
                  </p>
                  {/* 삭제 버튼 */}
                  <button
                    className="flex items-center justify-center"
                    onClick={() => handleDeleteDocument(document)}
                  >
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
    </div>
  );
};

export default MyProject;