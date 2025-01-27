import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';
import Layout from './Layout';
import { postDocument } from '../api/documentsApi';
import useDocumentStore from '../store/useDocumentStore'; // Zustand

const InputPage = () => {
  const navigate = useNavigate();
  const setDocumentId = useDocumentStore((state) => state.setDocumentId);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleDesignClick = async () => {
    if (!title || !content || !requirements) {
      alert('모든 입력값을 채워주세요.');
      return;
    }

    try {
      // 문서 생성 요청
      const { documentId } = await postDocument({ title, content, requirements });
      setDocumentId(String(documentId)); // Zustand로 document_id 저장
      navigate('/specific'); // Specific 페이지로 이동
    } catch (error) {
      console.error('문서 생성 실패:', error);
      alert('문서 생성에 실패했습니다.');
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

        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="w-full">
            <label className="mb-2 block text-lg font-semibold text-white">
              프로젝트 이름
            </label>
            <InputBox
              size="small"
              placeholder="프로젝트 이름을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="mb-2 block text-lg font-semibold text-white">
              프로젝트 설명
            </label>
            <InputBox
              size="medium"
              placeholder="프로젝트 설명을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="mb-2 block text-lg font-semibold text-white">
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
