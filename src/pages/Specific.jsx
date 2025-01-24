import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/Button/Button';
import EditModal from '../components/EditModal';

const Specific = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [documentContent, setDocumentContent] = useState([]); // Stream 데이터 저장
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const documentId = searchParams.get('documentId'); // document_id 가져오기

  useEffect(() => {
    if (!documentId) {
      console.error('Document ID가 제공되지 않았습니다.');
      return;
    }

    // 스트림 URL 생성
    const streamUrl = `http://localhost:8000/documents/`;
    const eventSource = new EventSource(streamUrl);

    eventSource.onmessage = (event) => {
      try {
        // JSON 데이터 파싱 및 추가
        const parsedData = JSON.parse(event.data);
        if (parsedData.content) {
          setDocumentContent((prev) => [...prev, parsedData.content]);
        } else if (parsedData.error) {
          console.error('스트림 오류:', parsedData.error);
        }
      } catch (error) {
        console.error('데이터 파싱 오류:', error);
      }
    };

    eventSource.onerror = (error) => {
      console.error('Stream Error:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close(); // 컴포넌트 언마운트 시 스트림 닫기
    };
  }, [documentId]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSpecificClick = () => {
    alert('API, ERD, 다이어그램을 제작합니다');
    navigate('/design');
  };

  return (
    <Layout>
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        {/* 박스 외부 영역 */}
        <div className="absolute top-[2rem] flex h-[28rem] w-[52rem] flex-shrink-0 items-center justify-center">
          {/* 그라데이션 테두리 */}
          <div className="absolute inset-0 rounded-[1.875rem] bg-gradient-to-r from-white/55 via-[#7885E9] to-[#485CF3]" />
          {/* 스크롤 가능한 내용 박스 */}
          <div className="relative z-10 h-[27.75rem] w-[51.75rem] overflow-y-auto rounded-[1.875rem] bg-[#141414] p-6 text-white shadow-lg">
            <div className="space-y-4 text-sm leading-relaxed">
              <div>
                <strong>문서 내용:</strong>
                <br />
                <div className="whitespace-pre-wrap">
                  {documentContent.length > 0 ? (
                    documentContent.map((content, index) => (
                      <p key={index}>{content}</p>
                    ))
                  ) : (
                    <p>로딩 중...</p>
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
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <EditModal onClose={closeModal} />
        </div>
      )}
    </Layout>
  );
};

export default Specific;
