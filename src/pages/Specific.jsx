import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from './Layout';
import Button from '../components/Button/Button';
import EditModal from '../components/EditModal';

const Specific = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [document, setDocument] = useState(location.state?.document || null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState(document?.description || '');
  const [loading, setLoading] = useState(!document);

  useEffect(() => {
    if (!document) {
      // 문서 데이터가 없으면 로딩 상태 유지
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [document]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSpecificClick = () => {
    alert('API, ERD, 다이어그램을 제작합니다');
    navigate('/design');
  };

  // 모달에서 수정 완료 시 호출
  const handleUpdate = async (updatedPrompt) => {
    try {
      // 여기에 문서 수정 API 호출 로직 추가
      setDescription(updatedPrompt); // 수정된 설명 업데이트
      closeModal();
    } catch (error) {
      console.error('문서 수정에 실패했습니다.', error);
      alert('문서 수정에 실패했습니다.');
    }
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
            {loading ? (
              <p>로딩 중...</p>
            ) : (
              <div className="space-y-4 text-sm leading-relaxed">
                <p>{description || '데이터를 불러오지 못했습니다.'}</p>
                {document && (
                  <div>
                    <h2>{document.title}</h2>
                    <p>{document.content}</p>
                    <p>{document.requirements}</p>
                  </div>
                )}
              </div>
            )}
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

        {/* 모달 렌더링 */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <EditModal
              onClose={closeModal}
              onSave={handleUpdate} // 수정 완료 시 호출될 함수
              currentDescription={description} // 현재 문서 설명 전달
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Specific;