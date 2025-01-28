import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/Button/Button';
import useDocumentStore from '../store/useDocumentStore';
import EditModal from '../components/EditModal';
import { postDesign } from '../api/documentsApi';

const Specific = () => {
  const navigate = useNavigate();
  const { documentId, setErdCode, setDiagramCode, setApiCode } =
    useDocumentStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documentContent, setDocumentContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Document ID:', documentId);
    if (!documentId) {
      console.error('문서 ID가 없습니다.');
      return;
    }

    const fetchStream = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/documents/${documentId}/stream`,
          {
            headers: { Accept: 'text/event-stream' },
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let done = false;

        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            console.log('Received chunk:', chunk);
            setDocumentContent((prev) => prev + chunk);
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('스트림 요청 실패:', error);
        setIsLoading(false);
      }
    };

    fetchStream();
  }, [documentId]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSpecificClick = async () => {
    alert('API, ERD, 다이어그램을 제작합니다');

    try {
      const response = await postDesign(documentId);
      if (response && response.data) {
        const { erd, diagram, api } = response.data;

        setErdCode(erd);
        setDiagramCode(diagram);
        setApiCode(api);
      } else {
        throw new Error('ERD, Diagram, API 데이터가 누락되었습니다.');
      }

      navigate('/erdpage');
    } catch (error) {
      console.error('설계 요청 실패:', error);
      alert('설계 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center text-gray-200">
        {/* 문서 생성 내용 박스 */}
        <div className="relative w-full max-w-4xl">
          {/* 박스 외부 테두리 (그라데이션) */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/55 via-[#7885E9] to-[#485CF3]" />
          {/* 내부 컨텐츠 박스 */}
          <div className="relative z-10 h-[500px] overflow-auto rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
            {isLoading ? (
              <p className="text-center text-white">로딩 중...</p>
            ) : documentContent ? (
              <pre className="whitespace-pre-wrap text-white">
                {documentContent}
              </pre>
            ) : (
              <p className="text-center text-white">문서 내용이 없습니다.</p>
            )}
          </div>
        </div>

        {/* 버튼 영역 (박스 아래 중앙 배치) */}
        <div className="mt-6 flex gap-4">
          <Button
            label="수정하기"
            size="medium"
            color="secondary"
            onClick={openModal}
          />
          <Button
            label="설계하기"
            size="medium"
            color="primary"
            onClick={handleSpecificClick}
          />
        </div>

        {/* 수정 모달 */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <EditModal onClose={closeModal} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Specific;
