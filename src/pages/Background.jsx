import gradationBackground from './gradationBackground.svg';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  return (
    <div className="relative -z-10 h-screen bg-black">
      <img
        src={gradationBackground}
        className="absolute -top-20 h-auto w-full" // top 값을 더 크게 조정
        alt="Gradation Background"
      />
      <div className="flex h-full items-center justify-center">
        {children}
        {/* 여기에 다른 컴포넌트가 올라갑니다 */}
      </div>
    </div>
  );
};

export default Background;
