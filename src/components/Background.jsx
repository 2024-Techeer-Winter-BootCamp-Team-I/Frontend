// Background.js
import gradationBackground from '../assets/image/gradationBackground.svg';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* 배경 이미지를 화면 전체에 고정 */}
      <img
        src={gradationBackground}
        className="absolute left-0 top-0 z-0 h-full w-full object-cover" // 배경 이미지가 전체 화면을 덮게 설정
        alt="Gradation Background"
      />
      {/* 배경 위에 자식 요소들을 렌더링 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
