import { useState } from 'react';
import { jsonAxios } from '../api/axios.config';

const EditModal = ({ onClose, document_id, onSave }) => {
  const [modifiedText, setModifiedText] = useState('');
  const [remainingRequests, setRemainingRequests] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => {
    setModifiedText(e.target.value);
  };

  const handleSubmit = async () => {
    if (remainingRequests > 0) {
      try {
        setLoading(true); // 로딩 상태 시작
        const url = `/documents/${document_id}`; // 상대 경로

        // 요청 보내기
        const response = await jsonAxios.put(url, {
          prompt: modifiedText,
        });

        // 응답 데이터 처리
        const description = response.data.description;
        alert('수정이 완료되었습니다!');
        onSave(description); // 부모 컴포넌트에 수정된 결과 전달
        onClose(); // 모달 닫기
      } catch (error) {
        console.error(
          '수정 실패',
          error.response ? error.response.data : error.message
        );
        alert(
          '수정 실패: ' +
            (error.response ? error.response.data.message : error.message)
        );
      } finally {
        setLoading(false); // 로딩 상태 종료
        setRemainingRequests((prev) => prev - 1); // 남은 요청 횟수 감소
      }
    } else {
      alert('남은 요청 횟수가 없습니다.');
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
        value={modifiedText}
        onChange={handleTextChange}
        disabled={loading}
      ></textarea>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-blue-main">
          {remainingRequests}회 남음
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleSubmit}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? '요청 중...' : '요청하기'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
