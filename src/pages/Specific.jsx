import Layout from './Layout';
import Button from '../components/Button/Button';

const Specific = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        {/* 박스 외부 영역 */}
        <div className="relative flex h-[28rem] w-[52rem] flex-shrink-0 items-center justify-center rounded-[1.875rem] bg-[#141414] p-[0.125rem] shadow-lg">
          {/* 그라데이션 테두리 */}
          <div
            className="absolute inset-0 rounded-[1.875rem] bg-gradient-to-r from-white/55 via-[#7885E9] to-[#485CF3]"
            style={{
              zIndex: 0,
              padding: '2px', // 테두리 두께 설정
            }}
          ></div>
          {/* 스크롤 가능한 내용 박스 */}
          <div className="scrollbar-custom relative z-10 h-[27.75rem] w-[55rem] overflow-y-auto rounded-[1.875rem] bg-[#141414] p-6 text-white shadow-lg">
            <h1 className="mb-4 text-3xl font-bold">Dev Sketch</h1>
            <div className="space-y-4 text-sm leading-relaxed">
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
        <div className="mt-10 flex flex-row gap-5">
          <Button
            label="수정하기"
            size="medium"
            color="secondary"
            onClick={() => alert('수정이 시작됩니다!')}
          />
          <Button
            label="설계하기"
            size="medium"
            color="primary"
            onClick={() => alert('설계가 시작됩니다!')}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Specific;
