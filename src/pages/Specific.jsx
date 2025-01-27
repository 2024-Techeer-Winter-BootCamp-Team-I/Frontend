import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import EditModal from '../components/EditModal';

const Specific = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 사용

  const openModal = () => setIsModalOpen(true); // 모달 열기
  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  const handleSpecificClick = () => {
    alert('API, ERD, 다이어그램을 제작합니다');
    // /Design 페이지로 이동
    navigate('/design');
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        {/* 박스 외부 영역 */}
        <div className="absolute top-[2rem] flex h-[28rem] w-[52rem] flex-shrink-0 items-center justify-center">
          {/* 스크롤 가능한 내용 박스 */}
          <div
            className="relative z-10 h-[27.75rem] w-[51.75rem] overflow-y-auto rounded-[1.2rem] bg-[#141414] p-6 text-white shadow-lg"
            style={{ border: '0.5px solid #8B8B8B' }}
          >
            <h1 className="mb-4 text-2xl font-bold">Dev Sketch</h1>
            <div className="space-y-4 text-[0.7rem] text-[#cecece] leading-relaxed">
              <p>
                <strong>1. 시스템 목적</strong>
                <br />
                Dev Sketch는 개발자의 초기 프로젝트 설계와 세팅 단계를
                자동화하여 효율성을 극대화하고 개발 시간을 단축시키는 AI 기반
                도구입니다.
              </p>
              <p>
                <strong>2. 사용자 유형</strong>
                <br />
                (1) 초보 개발자: 프로젝트 설계 경험이 부족한 사용자.
                <br />
                (2) 경험 있는 개발자: 반복적인 초기 세팅 작업을 줄이고 싶어 하는
                사용자.
                <br />
                (3) 팀 리더/프로젝트 매니저: 팀 협업 프로젝트의 기본 설계를
                빠르게 준비하고 싶어 하는 사용자.
              </p>
              <p>
                <strong>3. 사용 시나리오</strong>
                <br />
                (1) 설계 단계 자동화
                <br />
                - 사용자는 Dev Sketch 웹 플랫폼에 접속하여 설계 자동화 기능
                선택.
                <br />
                - 프로젝트 이름, 기능 요구사항, 주요 사용 사례 등을 입력.
                <br />
                - AI가 입력된 정보를 바탕으로:
                <br />
                -- 기능 명세서를 작성.
                <br />
                -- API 명세서 초안 생성 (엔드포인트, 요청/응답 구조).
                <br />
                -- ERD(Entity Relationship Diagram) 설계.
                <br />
                -- 시퀀스 다이어그램 생성.
                <br />- 사용자는 생성된 설계 자료를 검토 및 수정하고, PDF 또는
                파일로 다운로드.
              </p>
            </div>
          </div>
        </div>
        {/* 버튼 영역 */}
        <div className="mt-80 flex flex-row gap-5">
          <button
            className="mt-[1rem] w-[10rem] h-[2rem] font-sans text-[0.9rem] font-semibold bg-[#E7E5E5] text-black rounded-md hover:opacity-80"
            onClick={openModal} // 모달 열기
          >
            수정하기
          </button>
          <button
            className="mt-[1rem] w-[10rem] h-[2rem] font-sans text-[0.9rem] font-semibold bg-[#135CA4] text-white rounded-md hover:opacity-80"
            onClick={handleSpecificClick} // 모달 열기
          >
            설계하기
          </button>
        </div>
      </div>
      {/* 모달 렌더링 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <EditModal onClose={closeModal} />
        </div>
      )}
    </Layout>
  );
};

export default Specific;
