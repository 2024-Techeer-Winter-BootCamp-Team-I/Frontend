import InputBox from '../components/InputBox/InputBox';
import Button from '../components/Button/Button';
import Layout from './Layout';

const InputPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-3 text-[40px] font-bold text-white">
          What do you want to Create?
        </h1>
        <p className="mb-10 text-sm text-gray-400">
          Make API, ERD, DIAGRAM and Setting
        </p>

        {/* 입력창 부분을 중앙 정렬 */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* 프로젝트 이름 */}
          <div className="w-full">
            <label
              htmlFor="project-name"
              className="mb-2 block text-lg font-semibold text-white"
            >
              프로젝트 이름
            </label>
            <InputBox size="small" placeholder="프로젝트 이름을 입력하세요" />
          </div>

          {/* 프로젝트 설명 */}
          <div className="w-full">
            <label
              htmlFor="project-description"
              className="mb-2 block text-lg font-semibold text-white"
            >
              프로젝트 설명
            </label>
            <InputBox size="medium" placeholder="프로젝트 설명을 입력하세요" />
          </div>

          {/* 주요 기능 */}
          <div className="w-full">
            <label
              htmlFor="project-features"
              className="mb-2 block text-lg font-semibold text-white"
            >
              주요 기능
            </label>
            <InputBox size="large" placeholder="주요 기능을 입력하세요" />
          </div>
        </div>

        {/* 설계하기 버튼 */}
        <div className="mt-10">
          <Button
            label="설계하기"
            size="medium"
            color="primary"
            onClick={() => alert('설계가 시작됩니다!')}
          />
        </div>
      </div>
    </Layout>
  );
};

export default InputPage;
