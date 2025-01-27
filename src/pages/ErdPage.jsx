import { useEffect } from 'react';
import mermaid from 'mermaid';
import Layout from './Layout';

const ErdPage = () => {
  useEffect(() => {
    // Mermaid.js 초기화
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark', // 다크 테마 사용
    });

    // JSON 데이터에서 Mermaid 다이어그램 코드 삽입
    const jsonResponse = {
      status: 'success',
      data: {
        erd: '```mermaid\nerDiagram\n    USER ||--o{ CREDIT : has\n    USER ||--o{ ORDER : places\n    USER ||--o{ REVIEW : writes\n    ORDER ||--o{ ORDER_ITEM : contains\n    ORDER ||--o{ PAYMENT : has\n    PRODUCT ||--o{ ORDER_ITEM : included_in\n    PRODUCT ||--o{ REVIEW : reviewed_in\n    CART ||--o{ CART_ITEM : contains\n    PRODUCT ||--o{ CART_ITEM : included_in\n\n    USER {\n        integer user_id PK\n        string email\n        string password\n        string name\n        string address\n        string phone\n    }\n\n    CREDIT {\n        integer credit_id PK\n        integer user_id FK\n        integer balance\n    }\n\n    PRODUCT {\n        integer product_id PK\n        string name\n        string description\n        decimal price\n        integer stock\n    }\n\n    CART {\n        integer cart_id PK\n        integer user_id FK\n    }\n\n    CART_ITEM {\n        integer cart_item_id PK\n        integer cart_id FK\n        integer product_id FK\n        integer quantity\n    }\n\n    ORDER {\n        integer order_id PK\n        integer user_id FK\n        datetime order_date\n        string status\n    }\n\n    ORDER_ITEM {\n        integer order_item_id PK\n        integer order_id FK\n        integer product_id FK\n        integer quantity\n        decimal price\n    }\n\n    PAYMENT {\n        integer payment_id PK\n        integer order_id FK\n        decimal amount\n        string payment_method\n        string status\n    }\n\n    REVIEW {\n        integer review_id PK\n        integer user_id FK\n        integer product_id FK\n        string content\n        integer rating\n        datetime review_date\n    }\n```',
      },
    };

    const erdCode = jsonResponse.data.erd;
    const cleanErdCode = erdCode.replace(/```mermaid\n|```/g, '').trim();
    const erdContainer = document.getElementById('mermaid-container');
    if (erdContainer) {
      erdContainer.innerHTML = `<div class="mermaid">${cleanErdCode}</div>`;
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center text-gray-200">
        <h1 className="animate-slide-down mb-4 text-center text-2xl font-bold">
          ERD
        </h1>
        <div
          id="mermaid-container"
          className="animate-fade-in w-full max-w-4xl rounded-lg border border-gray-600 bg-gray-800 p-4 opacity-0 shadow-lg"
        ></div>
      </div>
    </Layout>
  );
};

export default ErdPage;
