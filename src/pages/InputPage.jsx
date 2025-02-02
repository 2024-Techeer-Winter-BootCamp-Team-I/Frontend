import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox/InputBox';
import Layout from './Layout';
import { postDocument } from '../api/documentsApi';
import useDocumentStore from '../store/useDocumentStore'; // Zustand
import QuestionIcon from '../assets/image/question.svg'; // question.svg 경로
import Button from '../components/Button/Button';

const InputPage = () => {
  const navigate = useNavigate();
  const setDocumentId = useDocumentStore((state) => state.setDocumentId);
  const [title, setTitle] = useState(''); // 프로젝트 이름
  const [content, setContent] = useState(''); // 프로젝트 설명
  const [requirements, setRequirements] = useState(''); // 주요 기능
  const [loading] = useState(false); // 로딩 상태 관리
  const [modalType, setModalType] = useState(null); // 현재 열린 모달 타입 (title, content, requirements)
  const [modalContent, setModalContent] = useState(null); // 모달에 표시할 JSX 콘텐츠

  const handleDesignClick = async () => {
    if (!title || !content || !requirements) {
      alert('모든 입력값을 채워주세요.');
      return;
    }

    try {
      // 문서 생성 요청
      const { documentId } = await postDocument({
        title,
        content,
        requirements,
      });
      console.log('문서 생성 성공:', documentId);
      setDocumentId(String(documentId)); // Zustand로 document_id 저장
      navigate('/specific'); // Specific 페이지로 이동
    } catch (error) {
      console.error('문서 생성 실패:', error);
      alert('문서 생성에 실패했습니다.');
    }
  };

  // 가이드라인 모달 열기 함수
  const openQuestionModal = (type, content) => {
    setModalType(type);
    setModalContent(content);
  };

  // 가이드라인 모달 닫기 함수
  const closeQuestionModal = () => {
    setModalType(null);
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen flex-col items-center">
        <h1 className="mb-[0.3rem] text-[40px] font-bold text-white">
          What do you want to Create?
        </h1>
        <p className="mb-[1rem] text-sm leading-[1rem] text-gray-400">
          Make API, ERD, DIAGRAM and Setting
        </p>

        {/* 입력창 부분을 중앙 정렬 */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* 프로젝트 이름 */}
          <div className="relative flex w-full items-center">
            <label
              htmlFor="project-name"
              className="block text-sm font-semibold text-white"
            >
              프로젝트 이름
            </label>
            <div
              className="relative ml-2"
              onMouseEnter={() =>
                openQuestionModal(
                  'title',
                  <div>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold">
                        프로젝트 제목 : 프로젝트의 이름을 간결하게 입력해
                        주세요.
                      </h3>
                      <p className="ml-4 mt-1 text-xs text-gray-400">
                        예: 게시판 서비스 개발, 온라인 쇼핑몰 플랫폼
                      </p>
                    </div>
                  </div>,
                )
              }
              onMouseLeave={closeQuestionModal}
            >
              <img
                src={QuestionIcon}
                alt="Question"
                className="h-[1.5rem] w-[1.5rem] cursor-pointer transition hover:opacity-75"
              />
              {modalType === 'title' && (
                <div className="absolute left-8 top-0 z-50 h-[5rem] w-[32rem] rounded-[0.5rem] bg-[#171717] p-4 text-white">
                  {modalContent}
                </div>
              )}
            </div>
          </div>
          <InputBox
            size="small"
            placeholder="프로젝트 이름을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />

          {/* 프로젝트 설명 */}
          <div className="relative flex w-full items-center">
            <label
              htmlFor="project-description"
              className="block text-sm font-semibold text-white"
            >
              프로젝트 설명
            </label>
            <div
              className="relative ml-2"
              onMouseEnter={() =>
                openQuestionModal(
                  'content',
                  <div>
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold">
                        프로젝트 내용 : 프로젝트의 주요 기능과 목적을 간략히
                        설명해 주세요.
                      </h3>
                      <p className="ml-4 mt-1 text-xs text-gray-400">
                        예: 사용자가 게시글을 작성, 조회, 수정, 삭제할 수 있는
                        기본적인 게시판 서비스입니다. 댓글 기능과 검색 기능도
                        포함됩니다.
                      </p>
                    </div>
                  </div>,
                )
              }
              onMouseLeave={closeQuestionModal}
            >
              <img
                src={QuestionIcon}
                alt="Question"
                className="h-[1.5rem] w-[1.5rem] cursor-pointer transition hover:opacity-75"
              />
              {modalType === 'content' && (
                <div className="absolute left-8 top-0 z-50 h-[6rem] w-[32rem] rounded-[0.5rem] bg-[#171717] p-4 text-white">
                  {modalContent}
                </div>
              )}
            </div>
          </div>
          <InputBox
            size="medium"
            placeholder="프로젝트 설명을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={loading}
          />

          {/* 주요 기능 */}
          <div className="relative flex w-full items-center">
            <label
              htmlFor="project-features"
              className="block text-sm font-semibold text-white"
            >
              주요 기능
            </label>
            <div
              className="relative ml-2"
              onMouseEnter={() =>
                openQuestionModal(
                  'requirements',
                  <div>
                    <div>
                      <h3 className="mb-2 text-sm font-semibold">
                        요구사항 : 프로젝트에 필요한 기능과 비기능 요구사항을
                        상세히 나열해 주세요.
                      </h3>
                      <ul className="ml-4 mt-2 list-disc text-xs">
                        <li>
                          <span className="font-semibold">기능 요구사항:</span>{' '}
                          사용자 스토리 형식으로 작성해 주세요.
                          <p className="ml-4 text-xs text-gray-400">
                            예: 사용자는 [X]를 할 수 있어야 한다.
                          </p>
                        </li>
                        <li className="mt-2">
                          <span className="font-semibold">
                            비기능 요구사항:
                          </span>{' '}
                          성능, 보안, 가용성 등을 포함해 주세요.
                        </li>
                      </ul>
                    </div>
                  </div>,
                )
              }
              onMouseLeave={closeQuestionModal}
            >
              <img
                src={QuestionIcon}
                alt="Question"
                className="h-[1.5rem] w-[1.5rem] cursor-pointer transition hover:opacity-75"
              />
              {modalType === 'requirements' && (
                <div className="absolute left-8 top-0 z-50 w-[32rem] rounded-[0.5rem] bg-[#171717] p-4 text-white">
                  {modalContent}
                </div>
              )}
            </div>
          </div>
          <InputBox
            size="large"
            placeholder="주요 기능을 입력하세요"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="mt-10">
          <Button
            label="설계하러가기"
            size="medium"
            color="primary"
            onClick={handleDesignClick}
            disabled={loading}
          />
          {loading ? '생성 중...' : '설계하러가기'}
        </div>
      </div>
    </Layout>
  );
};

export default InputPage;
