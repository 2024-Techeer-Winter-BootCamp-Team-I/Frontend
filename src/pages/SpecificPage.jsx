import Layout from './Layout';
import greenDragon from '../assets/image/greenDragon.svg';
import blueDragon from '../assets/image/blueDragon.svg';
import EditModal from '../components/EditModal';
import { useState } from 'react';

const SpecificPage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditModalToggle = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  return (
    <Layout>
      <div className="mt-[10px] flex h-full flex-col justify-start p-5">
        {/* 그리드 레이아웃 */}
        <div className="mx-auto grid w-full grid-cols-[250px_auto] gap-8 text-white">
          <div className="flex flex-col items-center justify-center"></div>

          {/* 오른쪽 박스 */}
          <div className="flex flex-col items-center justify-center rounded-lg p-6">
            <div className="h-[600px] w-full max-w-[800px] overflow-y-auto rounded-lg bg-gray-800 p-4">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                기능 명세 (시스템 시나리오)
              </h2>
              <div className="space-y-4 text-white">
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
                  (2) 경험 있는 개발자: 반복적인 초기 세팅 작업을 줄이고 싶어
                  하는 사용자.
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
                  <br />- AI가 입력된 정보를 바탕으로:
                  <ul className="list-inside list-disc">
                    <li>기능 명세서를 작성.</li>
                    <li>API 명세서 초안 생성 (엔드포인트, 요청/응답 구조).</li>
                    <li>ERD(Entity Relationship Diagram) 제작.</li>
                    <li>시퀀스 다이어그램 생성.</li>
                  </ul>
                  - 사용자는 생성된 설계 자료를 검토 및 수정하고, PDF 또는
                  파일로 다운로드.
                </p>
              </div>
            </div>
            {/* 수정 요청 및 설계하기 버튼 */}
            <div className="flex flex-row">
              <img src={blueDragon} alt="Mascot" className="h-24" />
              <div className="mt-[30px] flex justify-end space-x-4">
                <button
                  onClick={handleEditModalToggle}
                  className="w-[300px] rounded-lg bg-blue-500 px-4 py-2 text-[18px] text-white hover:bg-blue-600"
                >
                  수정 요청
                </button>
                <button className="w-[300px] rounded-lg bg-green-500 px-4 py-2 text-[18px] text-white hover:bg-green-600">
                  설계하기
                </button>
              </div>
              <img src={greenDragon} alt="Mascot" className="h-24" />
            </div>

            {/* EditModal */}
            {isEditModalOpen && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <EditModal onClose={handleEditModalToggle} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpecificPage;
