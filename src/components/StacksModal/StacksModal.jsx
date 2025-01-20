import { useContext } from 'react';
import { BackStacksContext, FrontStacksContext } from '../../context'; // Context 임포트

const StacksModal = ({ onClose }) => {
  const { back: backStacks } = useContext(BackStacksContext); // 백엔드 스택
  const { front: frontStacks } = useContext(FrontStacksContext); // 프론트엔드 스택

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* 모달 헤더 */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">선택된 스택</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {/* 모달 내용 */}
        <div className="space-y-4">
          {/* 프론트엔드 스택 */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">프론트엔드 스택</h3>
            {frontStacks.length > 0 ? (
              <ul className="list-inside list-disc">
                {frontStacks.map((stack, index) => (
                  <li key={index} className="text-gray-700">
                    {stack}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                선택된 프론트엔드 스택이 없습니다.
              </p>
            )}
          </div>

          {/* 백엔드 스택 */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">백엔드 스택</h3>
            {backStacks.length > 0 ? (
              <ul className="list-inside list-disc">
                {backStacks.map((stack, index) => (
                  <li key={index} className="text-gray-700">
                    {stack}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">선택된 백엔드 스택이 없습니다.</p>
            )}
          </div>
        </div>

        {/* 모달 푸터 */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default StacksModal;
