import { useState } from 'react';
import { updateDocument } from '../api/documentsApi'; // API 함수 가져오기

// eslint-disable-next-line react/prop-types
const EditModal = ({ onClose, documentId }) => {
  const [prompt, setPrompt] = useState(''); // 상태 변수 추가

  const handleUpdateClick = async () => {
    try {
      // API 호출
      const response = await updateDocument(documentId, prompt);
      console.log('Document updated:', response);
      onClose(); // 모달 닫기
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div className="relative w-[480px] rounded-lg bg-white p-6 shadow-lg">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>

      <h2 className="mb-4 text-xl font-semibold text-black">
        이전 버전을 바탕으로 어떻게 수정할까요?
      </h2>
      <textarea
        className="h-24 w-full resize-none rounded-md border p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="ex. ~는 잘 썼는데, ---을 추가해줘"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)} // 사용자 입력 관리
      ></textarea>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-blue-main">3회 남음</div>
        <div className="flex space-x-2">
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={handleUpdateClick} // 버튼 클릭 시 API 호출
          >
            요청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;