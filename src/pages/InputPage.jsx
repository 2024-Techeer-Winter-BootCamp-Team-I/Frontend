import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createDocument } from '../api/documentsApi'; // 문서 생성 API 함수 불러오기
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';
import Layout from './Layout';
import QuestionIcon from '../assets/image/question.svg'; // question.svg 경로

const InputPage = () => {
  const navigate = useNavigate();

  // 입력값을 상태로 관리
  const [title, setTitle] = useState(''); // 프로젝트 이름
  const [content, setContent] = useState(''); // 프로젝트 설명
  const [requirements, setRequirements] = useState(''); // 주요 기능
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false); // 가이드라인 모달 상태
  const [modalContent, setModalContent] = useState(null); // 모달에 표시할 JSX 콘텐츠

  const handleDesignClick = async () => {
    if (!title.trim() || !content.trim() || !requirements.trim()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const response = await createDocument({ title, content, requirements });
      navigate('/specific', { state: { document: response.data } });
    } finally {
      setLoading(false);
    }
  };

  // 가이드라인 모달 열기 함수
  const openQuestionModal = (content) => {
    setModalContent(content);
    setIsQuestionModalOpen(true);
  };

  // 가이드라인 모달 닫기 함수
  const closeQuestionModal = () => {
    setIsQuestionModalOpen(false);
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen flex-col items-center">
        <h1 className="mb-[0.3rem] text-[40px] font-bold text-white">
          What do you want to Create?
        </h1>
        <p className="mb-[1rem] text-sm text-gray-400">
          Make API, ERD, DIAGRAM and Setting
        </p>

        {/* 입력창 부분을 중앙 정렬 */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* 프로젝트 이름 */}
          <div className="w-full flex items-center">
            <label
              htmlFor="project-name"
              className="mb-1 block text-lg font-semibold text-white"
            >
              프로젝트 이름
            </label>
            <img
              src={QuestionIcon}
              alt="Question"
              className="ml-2 mb-2 h-[1.5rem] w-[1.5rem] cursor-pointer transition hover:opacity-75"
              onClick={() =>
                openQuestionModal(
                  <div>
                    <h2 className="text-lg font-semibold mb-6">가이드라인</h2>
                    <p className="text-sm mb-12">
                      기능명세서 작성을 위한 입력 가이드입니다.<br />
                      더 정확하고 체계적인 기능명세서를 생성하기 위해 아래 형식에 맞춰 입력해 주세요.
                    </p>
                    <div className="mb-6">
                      <h3 className="font-semibold text-sm">프로젝트 제목 : 프로젝트의 이름을 간결하게 입력해 주세요.</h3>
                      <p className="ml-4 text-xs text-gray-400 mt-1">
                        예: "게시판 서비스 개발", "온라인 쇼핑몰 플랫폼"
                      </p>
                    </div>
                  </div>
                )
              }
            />
          </div>
          <InputBox
            size="small"
            placeholder="프로젝트 이름을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />

          {/* 프로젝트 설명 */}
          <div className="w-full flex items-center">
            <label
              htmlFor="project-description"
              className="mb-1 block text-lg font-semibold text-white"
            >
              프로젝트 설명
            </label>
            <img
              src={QuestionIcon}
              alt="Question"
              className="ml-2 mb-2 h-[1.5rem] w-[1.5rem] cursor-pointer transition hover:opacity-75"
              onClick={() =>
                openQuestionModal(
                  <div>
                    <h2 className="text-lg font-semibold mb-6">가이드라인</h2>
                    <p className="text-sm mb-12">
                      기능명세서 작성을 위한 입력 가이드입니다.<br />
                      더 정확하고 체계적인 기능명세서를 생성하기 위해 아래 형식에 맞춰 입력해 주세요.
                    </p>
                    <div className="mb-6">
                      <h3 className="font-semibold text-sm">프로젝트 내용 : 프로젝트의 주요 기능과 목적을 간략히 설명해 주세요.</h3>
                      <p className="ml-4 text-xs text-gray-400 mt-1">
                        예: "사용자가 게시글을 작성, 조회, 수정, 삭제할 수 있는 기본적인 게시판 서비스입니다. 댓글 기능과 검색 기능도 포함됩니다."
                      </p>
                    </div>
                  </div>
                )
              }
            />
          </div>
          <InputBox
            size="medium"
            placeholder="프로젝트 설명을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
          />

          {/* 주요 기능 */}
          <div className="w-full flex items-center">
            <label
              htmlFor="project-features"
              className="mb-1 block text-lg font-semibold text-white"
            >
              주요 기능
            </label>
            <img
              src={QuestionIcon}
              alt="Question"
              className="ml-2 mb-2 h-[1.5rem] w-[1.5rem] cursor-pointer transition hover:opacity-75"
              onClick={() =>
                openQuestionModal(
                  <div>
                    <h2 className="text-lg font-semibold mb-6">가이드라인</h2>
                    <p className="text-sm mb-12">
                      기능명세서 작성을 위한 입력 가이드입니다.<br />
                      더 정확하고 체계적인 기능명세서를 생성하기 위해 아래 형식에 맞춰 입력해 주세요.
                    </p>
                    <div>
                      <h3 className="font-semibold text-sm mb-2">요구사항 : 프로젝트에 필요한 기능과 비기능 요구사항을 상세히 나열해 주세요.</h3>
                      <ul className="ml-4 mt-2 list-disc text-xs">
                        <li>
                          <span className="font-semibold">기능 요구사항:</span> 사용자 스토리 형식으로 작성해 주세요.
                          <p className="ml-4 text-xs text-gray-400">
                            예: "사용자는 [X]를 할 수 있어야 한다."
                          </p>
                        </li>
                        <li className="mt-2">
                          <span className="font-semibold">비기능 요구사항:</span> 성능, 보안, 가용성 등을 포함해 주세요.
                        </li>
                      </ul>
                    </div>
                  </div>
                )
              }
            />
          </div>
          <InputBox
            size="large"
            placeholder="주요 기능을 입력하세요"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            disabled={loading}
          />
        </div>

        {/* 설계하기 버튼 */}
        <div className="mt-8">
          <Button
            label={loading ? '생성 중...' : '설계하러가기'}
            size="medium"
            color="primary"
            onClick={handleDesignClick}
            disabled={loading}
          />
        </div>

        {/* 가이드라인 모달 */}
        {isQuestionModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={closeQuestionModal}
          >
            <div
              className="h-[18rem] w-[35rem] mt-[4rem] rounded-[1rem] bg-[#171717] p-6 text-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {modalContent}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default InputPage;
