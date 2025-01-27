import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/Button/Button';
import useDocumentStore from '../store/useDocumentStore';
import EditModal from '../components/EditModal';

const Specific = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const documentId = useDocumentStore((state) => state.documentId); // 전역 상태에서 documentId 가져오기
  const [documentContent, setDocumentContent] = useState(''); // 스트림 데이터 저장
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

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
            headers: {
              Accept: 'text/event-stream', // 스트림 응답을 요청하는 헤더
            },
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
            console.log('Received chunk:', chunk); // 받은 데이터를 콘솔에 출력
            setDocumentContent((prev) => prev + chunk); // 데이터 누적
          }
        }

        setIsLoading(false); // 모든 데이터 수신 후 로딩 상태 해제
      } catch (error) {
        console.error('스트림 요청 실패:', error);
        setIsLoading(false); // 요청 실패 시 로딩 상태 해제
      }
    };

    fetchStream();
  }, [documentId]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSpecificClick = () => {
    alert('API, ERD, 다이어그램을 제작합니다');
    navigate('/erdpage');
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        {/* 문서 표시 박스 */}
        <div className="absolute top-[2rem] flex h-[28rem] w-[52rem] flex-shrink-0 items-center justify-center">
          {/* 그라데이션 테두리 */}
          <div className="absolute inset-0 rounded-[1.875rem] bg-gradient-to-r from-white/55 via-[#7885E9] to-[#485CF3]" />
          {/* 스크롤 가능한 내용 박스 */}
          <div className="relative z-10 h-[27.75rem] w-[51.75rem] overflow-y-auto rounded-[1.875rem] bg-[#141414] p-6 text-white shadow-lg">
            <div className="space-y-4 text-sm leading-relaxed">
              {/* 로딩 중, 문서 내용, 기본 메시지 */}
              <div>
                {isLoading ? (
                  <p>로딩 중...</p>
                ) : documentContent ? (
                  <p>{documentContent}</p>
                ) : (
                  <p>문서 내용이 없습니다.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="mt-80 flex flex-row gap-5">
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
    </Layout>
  );
};

export default Specific;
