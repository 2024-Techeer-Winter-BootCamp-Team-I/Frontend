import { useEffect } from 'react';
import Layout from './Layout';

const DiagramPage = () => {
  useEffect(() => {
    import(
      'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'
    ).then((mermaid) => {
      mermaid.default.initialize({
        startOnLoad: true,
        theme: 'dark',
      });

      const jsonResponse = {
        status: 'success',
        data: {
          diagram: `sequenceDiagram
            participant User
            participant AuthSystem
            participant ProductSystem
            participant CartSystem
            participant OrderSystem
            participant ReviewSystem
            participant CreditSystem

            User->>AuthSystem: 회원가입 요청 (이메일, 비밀번호, 이름)
            AuthSystem->>AuthSystem: 입력 정보 검증
            AuthSystem-->>User: 계정 생성 결과

            User->>AuthSystem: 로그인 요청 (이메일, 비밀번호)
            AuthSystem->>AuthSystem: 사용자 정보 검증
            AuthSystem-->>User: 사용자 정보, 토큰

            User->>ProductSystem: 상품 검색 요청 (검색어)
            ProductSystem->>ProductSystem: 상품 목록 조회
            ProductSystem-->>User: 상품 목록

            User->>CartSystem: 상품 추가 요청 (상품 ID, 수량)
            CartSystem->>CartSystem: 장바구니 업데이트
            CartSystem-->>User: 장바구니 목록

            User->>OrderSystem: 주문 요청 (장바구니 정보)
            OrderSystem->>CreditSystem: 크레딧 확인 요청
            CreditSystem-->>OrderSystem: 크레딧 잔액
            alt 크레딧 충분
              OrderSystem->>OrderSystem: 주문 처리
              OrderSystem->>CreditSystem: 크레딧 차감 요청
              CreditSystem-->>OrderSystem: 크레딧 차감 결과
              OrderSystem-->>User: 주문 번호, 결제 결과
            else 크레딧 부족
              OrderSystem-->>User: 결제 거부
            end

            User->>ReviewSystem: 리뷰 작성 요청 (상품 ID, 리뷰 내용, 평점)
            ReviewSystem->>ReviewSystem: 리뷰 저장
            ReviewSystem-->>User: 리뷰 저장 결과

            User->>ReviewSystem: 리뷰 조회 요청 (상품 ID)
            ReviewSystem->>ReviewSystem: 리뷰 목록 조회
            ReviewSystem-->>User: 리뷰 목록, 평균 평점
          `,
        },
      };

      const diagramCode = jsonResponse.data.diagram;
      const cleanDiagramCode = diagramCode
        .replace(/```mermaid\n|```/g, '')
        .trim();

      const diagramContainer = document.getElementById('mermaid-container');
      if (diagramContainer) {
        diagramContainer.innerHTML = `<div class="mermaid">${cleanDiagramCode}</div>`;
        mermaid.default.contentLoaded();
      }
    });
  }, []);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center text-gray-200">
        <h1 className="mb-6 text-center text-2xl font-bold">Diagram</h1>
        <div
          id="mermaid-container"
          className="w-full max-w-4xl rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg"
        ></div>
      </div>
    </Layout>
  );
};

export default DiagramPage;
