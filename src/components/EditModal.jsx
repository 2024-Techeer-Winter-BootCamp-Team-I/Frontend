// eslint-disable-next-line react/prop-types
const EditModal = ({ onClose }) => {
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
      ></textarea>
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-blue-main">3회 남음</div>
        <div className="flex space-x-2">
          <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            요청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;