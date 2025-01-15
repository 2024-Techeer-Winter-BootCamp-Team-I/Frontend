// eslint-disable-next-line react/prop-types
const EditModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">
          이전 버전을 바탕으로 어떻게 수정할까요?
        </h2>
        <textarea
          className="h-24 w-full resize-none rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="ex. ~는 잘 썼는데, ---을 추가해줘"
        ></textarea>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300"
          >
            취소
          </button>
          <button
            onClick={onSubmit}
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            요청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
