import Layout from '../components/Layout';
import greenDragon from '../assets/image/greenDragon.svg';

const InputPage = () => {
  return (
    <Layout>
      <div className="flex h-full flex-col justify-start p-5">
        {/* 그리드 레이아웃 */}
        <div className="mx-auto grid w-full grid-cols-[250px_auto] gap-8 text-white">
          {/* 왼쪽 박스: 말풍선 + 공룡 */}
          <div className="flex flex-col items-center justify-center">
            {/* 말풍선 박스(녹색 배경) */}
            <div className="relative mb-4 w-full max-w-[250px] rounded-md bg-green-700 p-4 text-sm leading-relaxed">
              {/* 말풍선 텍스트 */}
              <h2 className="mb-2 text-[15px] font-semibold text-green-100">
                이렇게 작성하면 정확도가 올라가요!
              </h2>
              <p className="text-[10px] font-medium text-green-50">
                시스템 이름, 간단한 게시물 시스템으로서, 사용자가 게시글의 조회,
                관리, 수정, 삭제할 수 있는 걸 기반 게시판 제작하기 등등:
              </p>
              <ul className="mt-2 flex list-inside list-disc flex-col items-center text-[10px] text-green-50">
                <li>게시글 조회: 저장된 게시물 내용 확인</li>
                <li>게시글 작성: 새로운 게시물 업로드</li>
                <li>게시물 수정: 수정된 내용 저장</li>
                <li>게시물 삭제: 필요 없는 게시물 제거</li>
              </ul>

              {/* 말풍선 꼬리 (아래쪽) */}
              <div className="absolute bottom-[-14px] left-[30px] h-0 w-0 border-x-8 border-t-[14px] border-x-transparent border-t-green-700" />
            </div>

            {/* 공룡 이미지 */}
            <img src={greenDragon} alt="Mascot" className="h-24" />
          </div>

          {/* 오른쪽 박스 */}
          <div className="flex items-center justify-center rounded-lg p-6">
            <div className="w-full max-w-[600px]">
              <div className="mt-2 flex space-x-4"></div>

              {/* 입력 폼 */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="project-name"
                    className="text-xl font-semibold text-white"
                  >
                    프로젝트 이름
                  </label>
                  <input
                    type="text"
                    id="project-name"
                    placeholder="ex. Dev Sketch"
                    className="mt-2 w-full rounded-lg bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-description"
                    className="block text-xl font-semibold text-white"
                  >
                    프로젝트 설명
                  </label>
                  <textarea
                    id="project-description"
                    rows="3"
                    placeholder="ex. 사용자가 프로젝트의 요구사항을 입력하면, AI를 활용해 설계, 초기 세팅까지 자동화하는 서비스"
                    className="mt-2 w-full rounded-lg bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="main-features"
                    className="text- block text-xl font-semibold"
                  >
                    주요 기능
                  </label>
                  <textarea
                    id="main-features"
                    rows="5"
                    placeholder="ex. 설계 단계 자동화: 사용자 입력 정보 바탕으로 AI를 사용하여 기능명세서 구체화..."
                    className="mt-2 w-full rounded-lg bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="w-[400px] rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700">
                    기능명세 만들기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InputPage;
