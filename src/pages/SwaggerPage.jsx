import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import Layout from './Layout';

const SwaggerPage = () => {
  const apiResponse = {
    api: '```json\n{\n  "swagger": "2.0",\n  "info": {\n    "title": "게시판 시스템 API",\n    "description": "게시글 및 댓글 관리를 위한 API",\n    "version": "1.0.0"\n  },\n  "basePath": "/api",\n  "schemes": [\n    "http"\n  ],\n  "consumes": [\n    "application/json"\n  ],\n  "produces": [\n    "application/json"\n  ],\n  "paths": {\n    "/posts": {\n      "post": {\n        "summary": "새 게시글 작성",\n        "description": "사용자가 새 게시글을 작성합니다.",\n        "parameters": [\n          {\n            "name": "post",\n            "in": "body",\n            "required": true,\n            "schema": {\n              "$ref": "#/definitions/PostInput"\n            }\n          }\n        ],\n        "responses": {\n          "201": {\n            "description": "게시글 작성 성공",\n            "schema": {\n              "$ref": "#/definitions/PostOutput"\n            }\n          }\n        }\n      },\n      "get": {\n        "summary": "게시글 목록 조회",\n        "description": "모든 게시글 목록을 조회합니다.",\n        "responses": {\n          "200": {\n            "description": "게시글 목록 조회 성공",\n            "schema": {\n              "type": "array",\n              "items": {\n                "$ref": "#/definitions/PostOutput"\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "definitions": {\n    "PostInput": {\n      "type": "object",\n      "properties": {\n        "title": {\n          "type": "string"\n        },\n        "content": {\n          "type": "string"\n        }\n      }\n    },\n    "PostOutput": {\n      "type": "object",\n      "properties": {\n        "id": {\n          "type": "integer"\n        },\n        "title": {\n          "type": "string"\n        },\n        "content": {\n          "type": "string"\n        },\n        "author": {\n          "type": "string"\n        },\n        "createdAt": {\n          "type": "string",\n          "format": "date-time"\n        }\n      }\n    }\n  }\n}\n```',
  };

  let apiJson;

  // JSON 파싱
  try {
    apiJson = JSON.parse(
      apiResponse.api
        .replace(/```json\n|```/g, '') // ```json\n과 ``` 제거
        .replace(/\\n/g, '') // \n 제거
        .trim(), // 앞뒤 공백 제거
    );
  } catch (e) {
    console.error('Invalid JSON:', e);
  }

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="border-b border-gray-200 p-6 text-center text-2xl font-bold text-white">
          API
        </h1>
        <div className="h-[600px] w-[800px] overflow-y-auto rounded-lg bg-gray-100 p-4 shadow-lg">
          {apiJson ? (
            <SwaggerUI spec={apiJson} />
          ) : (
            <p>JSON 데이터를 로드하는 중 오류가 발생했습니다.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SwaggerPage;
