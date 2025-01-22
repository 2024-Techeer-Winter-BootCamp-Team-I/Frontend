import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createDocument } from '../api/documentsApi'; // 문서 생성 API 함수 불러오기
import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';
import Layout from './Layout';

const InputPage = () => {
  const navigate = useNavigate();

  // 입력값을 상태로 관리
  const [title, setTitle] = useState(''); // 프로젝트 이름
  const [content, setContent] = useState(''); // 프로젝트 설명
  const [requirements, setRequirements] = useState(''); // 주요 기능
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  const handleDesignClick = async () => {
    try {
      // 요청 보내기
      const response = await createDocument({
        title,
        content,
        requirements,
      });
  
      // 응답 데이터 확인
      console.log('응답 데이터:', response); // 서버에서 반환된 JSON 데이터
  
      // 페이지 이동
      navigate(`/specific/${response.id}`);
    } catch (error) {
      console.error('오류 발생:', error.response || error);
      alert('문서를 생성하는 중 오류가 발생했습니다. 다시 시도해주세요.');
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
              value={title}
              onChange={(e) => setTitle(e.target.value)} // 입력값 업데이트
              disabled={loading}
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
              onChange={(e) => setContent(e.target.value)} // 입력값 업데이트
              disabled={loading}
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
              onChange={(e) => setRequirements(e.target.value)} // 입력값 업데이트
              disabled={loading}
            />
          </div>
        </div>

        {/* 설계하기 버튼 */}
        <div className="mt-10">
          <Button
            label={loading ? '생성 중...' : '설계하러가기'}
            size="medium"
            color="primary"
            onClick={handleDesignClick} // 버튼 클릭 시 handleDesignClick 실행
            disabled={loading} // 로딩 중 버튼 비활성화
          />
        </div>
      </div>
    </Layout>
  );
};

export default InputPage;
