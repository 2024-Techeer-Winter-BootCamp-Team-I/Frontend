import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';
import Layout from './Layout';
import { createDocument } from '../api/documentsApi'; // api 함수 임포트

const InputPage = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectFeatures, setProjectFeatures] = useState('');
  const navigate = useNavigate();

  const handleDesignClick = async () => {
  const documentData = {
    title: projectName, // 프로젝트 이름
    content: projectDescription, // 프로젝트 설명
    discription: projectFeatures, // 주요 기능 (API 테스트에서는 'discription' 필드 사용)
  };

  try {
    const newDocument = await createDocument(documentData);
    alert('문서가 성공적으로 생성되었습니다!');
    console.log('새로 생성된 문서:', newDocument);

    // 설계 페이지로 이동 (필요한 경우)
    navigate('/specific');
  } catch (error) {
    alert('문서 생성에 실패했습니다. 다시 시도해주세요.');
    console.error('Error:', error.response ? error.response.data : error.message);
  }
};

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center">
        <h1 className="mb-3 text-[40px] font-bold text-white">
          What do you want to Create?
        </h1>
        <p className="mb-15 text-sm text-gray-400">
          Make API, ERD, DIAGRAM and Setting
        </p>

        {/* 입력창 부분을 중앙 정렬 */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* 프로젝트 이름 */}
          <div className="w-full">
            <label
              htmlFor="project-name"
              className="mb-2 block text-lg font-semibold text-white"
            >
              프로젝트 이름
            </label>
            <InputBox
              size="small"
              placeholder="프로젝트 이름을 입력하세요"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          {/* 프로젝트 설명 */}
          <div className="w-full">
            <label
              htmlFor="project-description"
              className="mb-2 block text-lg font-semibold text-white"
            >
              프로젝트 설명
            </label>
            <InputBox
              size="medium"
              placeholder="프로젝트 설명을 입력하세요"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>

          {/* 주요 기능 */}
          <div className="w-full">
            <label
              htmlFor="project-features"
              className="mb-2 block text-lg font-semibold text-white"
            >
              주요 기능
            </label>
            <InputBox
              size="large"
              placeholder="주요 기능을 입력하세요"
              value={projectFeatures}
              onChange={(e) => setProjectFeatures(e.target.value)}
            />
          </div>
        </div>

        {/* 설계하기 버튼 */}
        <div className="mt-10">
          <Button
            label="설계하러가기"
            size="medium"
            color="primary"
            onClick={handleDesignClick}
          />
        </div>
      </div>
    </Layout>
  );
};

export default InputPage;