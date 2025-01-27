import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../api/auth';
import { deleteProfileDoc, getDocumentById } from '../api/profileApi';

import useLoginStore from '../store/LoginStore';
import useDocIdStore from '../store/useIdStore';
import useDocumentStore from '../store/useDesignStore';

import GithubIcon from '../assets/image/github.svg';
import TrashIcon from '../assets/image/trashcan.svg';

const MyProject = () => {
  const navigate = useNavigate();
  const { userName, profileImage, setUserInfo, setEmail, email } =
    useLoginStore();
  const { documentTitles, setDocumentTitles, removeDocumentTitle } =
    useDocIdStore();
  const { setDocument, clearDocument } = useDocumentStore();

  // 프로필 정보 조회
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { githubUsername, email, documentTitles } = await getProfile();
        setUserInfo(githubUsername, profileImage);
        setDocumentTitles(documentTitles);
        setEmail(email);
      } catch (error) {
        console.error('프로필 정보 조회 실패:', error);
      }
    };

    fetchProfile();
  }, [setUserInfo, setDocumentTitles, setEmail, profileImage]);

  // 문서 클릭 시 처리
  const handleDocumentClick = async (documentId) => {
    try {
      const documentData = await getDocumentById(documentId);

      // useDocumentStore에 문서 데이터 저장
      setDocument(documentId, documentData);

      // 해당 id의 데이터들(erd, api, diagram) 확인
      console.log('Document Data:', documentData);
      // 해당 document id
      console.log('Document ID:', documentId);

      // 문서 상세 페이지로 이동
      navigate('/testing');
    } catch (error) {
      console.error('문서 상세 정보 조회 실패:', error);
      console.log('Document ID:', documentId);
    }
  };

  // 문서 삭제 처리
  const handleDeleteDocument = async (documentId) => {
    try {
      const message = await deleteProfileDoc(documentId);
      console.log(message);

      // 삭제된 도큐멘트를 documentTitles 배열에서 제거
      removeDocumentTitle(documentId);

      // 현재 선택된 문서가 삭제된 문서라면 초기화
      clearDocument();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div className="mt-0 flex h-full w-full flex-col">
      <div className="flex h-[35rem] w-full items-center justify-center">
        <div className="h-[32rem] w-[44rem] rounded-[3.125rem] border-[0.125rem] border-[#80B9E8] bg-[#101010]">
          {/* 프로필 정보 표시 */}
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

          {/* 문서 목록 표시 */}
          <div className="mt-[1.8rem] flex flex-col items-center justify-center space-y-[1.2rem]">
            <div className="custom-scrollbar flex h-[20rem] w-[30rem] flex-col items-center overflow-y-auto">
              {documentTitles.map((document, index) => {
                const { documentId, title } = document;
                return (
                  <div
                    key={`${documentId}-${index}`}
                    className="mb-[1.2rem] flex h-[3.9rem] w-full flex-shrink-0 items-center justify-between rounded-[0.625rem] bg-[#171717] px-[1.25rem] text-left transition hover:bg-[#4B4B4B] hover:text-blue-main"
                    onClick={() => handleDocumentClick(documentId)} // documentId를 전달
                  >
                    <p className="text-[1rem] font-medium text-white">
                      {title}
                    </p>

                    {/* 삭제 버튼 */}
                    <button
                      className="flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDocument(documentId);
                      }}
                    >
                      <img
                        src={TrashIcon}
                        alt="Delete"
                        className="h-[1.5rem] w-[1.5rem] transition hover:opacity-70"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
