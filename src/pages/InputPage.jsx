import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';
import Layout from './Layout';
import { postDocument } from '../api/documentsApi'; // API 호출 함수

const InputPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [requirements, setRequirements] = useState('');
  console.log('Title:', title);
  console.log('Content:', content);
  console.log('Requirements:', requirements);
  const handleDesignClick = async () => {
    if (!title || !content || !requirements) {
      alert('모든 입력값을 채워주세요.');
      return;
    }
    try {
      const { documentId } = await postDocument({
        title,
        content,
        requirements,
      });

      alert('기능명세가 생성 됩니다!');
      navigate(`/specific?documentId=${documentId}`); // documentId를 전달
    } catch (error) {
      console.error('문서 생성 실패:', error);
      alert('문서 생성 중 오류가 발생했습니다.');
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

        {/* 입력창 부분 */}
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
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
