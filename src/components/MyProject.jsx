import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/auth';
import { deleteProfileDoc, getDocumentById } from '../api/profileApi';

import useLoginStore from '../store/LoginStore';
import useDocumentStore from '../store/useDocumentStore';
import useTitleStore from '../store/useTitleStore';
import GithubIcon from '../assets/image/github.svg';
import TrashIcon from '../assets/image/trashcan.svg';

const MyProject = () => {
  const navigate = useNavigate();
  const { setUserInfo, setEmail, email, profileImage } = useLoginStore(); // profileImage 추가
  const { setDocumentId } = useDocumentStore();
  const {
    documentTitles,
    setDocumentTitles,
    addDocumentTitle,
    removeDocumentTitle,
  } = useTitleStore();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { githubUsername, email, documentTitles } = await getProfile();

        // 상태 업데이트 확인
        console.log('프로필 데이터:', {
          githubUsername,
          email,
          profileImage,
          documentTitles,
        });
        setUserInfo(githubUsername, profileImage);
        setEmail(email);
        setDocumentTitles(documentTitles);
      } catch (error) {
        console.error('프로필 정보 조회 실패:', error);
      }
    };

    fetchProfile();
  }, [setUserInfo, setEmail, setDocumentTitles, profileImage]);

  const handleDocumentClick = async (documentId) => {
    try {
      const { title, erd_code, diagram_code, api_code } =
        await getDocumentById(documentId);

      // useDocumentStore에 상태 저장
      useDocumentStore.getState().setDocumentId(documentId);
      useDocumentStore.getState().setErdCode(erd_code);
      useDocumentStore.getState().setDiagramCode(diagram_code);
      useDocumentStore.getState().setApiCode(api_code);

      // 상태 설정 후 로그 출력
      console.log('Document ID:', useDocumentStore.getState().documentId);
      console.log('ERD Code:', useDocumentStore.getState().erdCode);
      console.log('Diagram Code:', useDocumentStore.getState().diagramCode);
      console.log('API Code:', useDocumentStore.getState().apiCode);

      // 페이지 이동
      navigate('/erdpage');
    } catch (error) {
      console.error('Error handling document click:', error);
    }
  };

  const handleDeleteDocument = (documentId) => {
    removeDocumentTitle(documentId);

    try {
      deleteProfileDoc(documentId);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
    console.log(`Deleting document: ${documentId}`);
  };

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        <div className="h-[32rem] w-[44rem] rounded-[3.125rem] border-[0.09rem] border-[#80B9E8] bg-[#101010]">
          <div className="ml-[7rem] mr-[5rem] mt-[2.5rem] flex items-center">
            <img
              src={profileImage}
              alt="ProfileImage"
              className="h-[5rem] w-[5rem] rounded-full"
            />
            <p className="ml-[2rem] text-[1.2rem] font-medium text-white">
              {email || '사용자 이메일'}
            </p>
          </div>

          <div className="mt-[1.8rem] flex flex-col items-center justify-center space-y-[1.2rem]">
            {/* <div className="flex h-[20rem] w-[30rem] flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-[#171717] scrollbar-thumb-[#4B4B4B]"> */}
            <div className="flex h-[20rem] w-[30rem] flex-col items-center overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent">
              {documentTitles && documentTitles.length > 0 ? (
                documentTitles.map((document) => (
                  <div
                    key={document.documentId}
                    className="mb-[1.2rem] flex h-[3.9rem] w-full flex-shrink-0 items-center justify-between rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition hover:bg-[#4B4B4B] hover:text-blue-main"
                    onClick={() => handleDocumentClick(document.documentId)}
                  >
                    <p className="text-[1rem] font-medium text-white">
                      {document.title}
                    </p>
                    <button
                      className="flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDocument(document.documentId);
                      }}
                    >
                      <img
                        src={TrashIcon}
                        alt="Delete"
                        className="h-[1.5rem] w-[1.5rem] transition hover:opacity-70"
                      />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-white">문서가 없습니다.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
