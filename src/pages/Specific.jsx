import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/Button/Button';
import useDocumentStore from '../store/useDocumentStore';
import EditModal from '../components/EditModal';
import {
  getDocumentStream,
  postDesign,
  updateDocumentStream,
} from '../api/documentsApi';

const Specific = () => {
  const navigate = useNavigate();
  const { documentId, setErdCode, setDiagramCode, setApiCode } =
    useDocumentStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [documentContent, setDocumentContent] = useState('');
  const [isLoading, setIsLoading] = useState(false); // ✅ 바로 false로 설정하여 스트리밍 반영

  useEffect(() => {
    if (!documentId) {
      console.error('문서 ID가 없습니다.');
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchStream = async () => {
      setIsLoading(true);
      setDocumentContent(''); // 기존 내용을 지우고 새로 로드

      try {
        await getDocumentStream(
          documentId,
          (char) => {
            setDocumentContent((prev) => prev + char);
          },
          (error) => {
            console.error('스트림 요청 실패:', error);
            setIsLoading(false);
          },
          signal,
        );
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('스트림 요청 실패:', error);
        }
        setIsLoading(false);
      }
    };

    fetchStream();

    return () => {
      controller.abort();
    };
  }, [documentId]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ✅ 수정 요청 시 호출되는 함수
  const handleUpdate = async (modifications) => {
    if (!documentId) {
      alert('문서 ID가 없습니다.');
      return;
    }

    setIsLoading(true);
    setDocumentContent(''); // 기존 내용을 초기화하고 새 스트림 반영

    try {
      await updateDocumentStream(
        documentId,
        modifications,
        (char) => {
          setDocumentContent((prev) => prev + char);
        },
        (error) => {
          console.error('문서 업데이트 중 오류:', error);
          setIsLoading(false);
        },
      );
    } catch (error) {
      console.error('문서 업데이트 중 오류:', error);
      alert('문서 업데이트 중 오류가 발생했습니다.');
      setIsLoading(false);
    }
  };

  const handleSpecificClick = async () => {
    alert('API, ERD, 다이어그램을 제작합니다');

    if (!documentId) {
      alert('Document ID가 없습니다.');
      return;
    }

    try {
      console.log(`🔄 설계 요청 시작: documentId = ${documentId}`);
      const response = await postDesign(documentId);

      console.log('✅ 설계 요청 성공:', response);

      setErdCode(response.data.erd);
      setDiagramCode(response.data.diagram);
      setApiCode(response.data.api);

      navigate('/erdpage');
    } catch (error) {
      console.error('🚨 설계 요청 실패:', error);
      alert('설계 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center text-gray-200">
        <div className="relative w-full max-w-4xl">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/55 via-[#7885E9] to-[#485CF3]" />
          <div className="relative z-10 h-[500px] overflow-auto rounded-lg border border-gray-600 bg-gray-800 p-6 shadow-lg">
            {documentContent ? (
              <pre className="whitespace-pre-wrap text-white">
                {documentContent}
              </pre>
            ) : isLoading ? (
              <p className="text-center text-white">로딩 중...</p>
            ) : (
              <p className="text-center text-white">문서 내용이 없습니다.</p>
            )}
          </div>
        </div>

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

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <EditModal onClose={closeModal} onSubmit={handleUpdate} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Specific;
