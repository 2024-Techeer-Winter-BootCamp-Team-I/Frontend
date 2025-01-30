import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';

// AnimatedTitle 컴포넌트
const AnimatedTitle = () => {
  const [glow, setGlow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => (prev === 1 ? 0 : 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className="relative text-[#9ef3f3] left-[28rem] top-[3rem] text-5xl font-bold tracking-widest"
      style={{
        fontFamily: "'Orbitron', sans-serif",
        transform: "scaleX(1.2)", // 글자 가로로 더 넓게
        textShadow: glow
          ? `
      0 0 5px rgba(0, 120, 180, 0.5), 
      0 0 20px rgba(0, 100, 160, 0.3), 
      0 0 30px rgba(0, 80, 140, 0.25),
      0 0 40px rgba(0, 60, 120, 0.3)
    `
          : `
      0 0 3px rgba(0, 100, 160, 0.2), 
      0 0 8px rgba(0, 80, 140, 0.18), 
      0 0 12px rgba(0, 60, 120, 0.15)
    `,
        transition: "text-shadow 1.5s ease-in-out", // 부드럽게 빛 변화
        filter: "drop-shadow(0px 0px 15px rgba(0, 100, 160, 0.4))",
      }}
    >
      Dev Sketch
    </h1>
  );
};

const OnboardingPage = () => {
  const sectionsRef = useRef([]);
  const splineRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();

  const splineScenes = [
    "https://prod.spline.design/sHgTaG64SnS6eQYL/scene.splinecode",
    "https://prod.spline.design/3R0fvHMsohry1czX/scene.splinecode",
    "https://prod.spline.design/7IInnHw1sbK2Iaa8/scene.splinecode",
  ];

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (index !== currentSection) {
        gsap.set(section, { opacity: 0, y: 50, visibility: 'hidden' });
      } else {
        gsap.set(section, { opacity: 1, y: 0, visibility: 'visible' });
      }
    });
  }, [currentSection]);

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;
    if (nextSection >= 0 && nextSection < splineScenes.length) {
      setCurrentSection(nextSection);
    }
  };

  useEffect(() => {
    const section = sectionsRef.current[currentSection];

    // 배경색 전환 애니메이션
    gsap.to("body", {
      backgroundColor: "#000000",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(section, {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      duration: 1,
      ease: 'power2.out',
    });

    sectionsRef.current.forEach((section, index) => {
      if (index !== currentSection) {
        gsap.to(section, {
          opacity: 0,
          y: 50,
          visibility: 'hidden',
          duration: 1,
          ease: 'power2.out',
        });
      }
    });

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  useEffect(() => {
    if (currentSection === 3) {
      // 4번 페이지 애니메이션
      gsap.from(".final-text", {
        y: -200, // 시작 위치: 화면 위로 크게 벗어남
        opacity: 0,
        duration: 1, // 애니메이션 속도
        ease: "power4.out", // 더 드라마틱한 ease
      });
      gsap.from(".start-button", {
        y: -200, // 시작 위치: 화면 위로 크게 벗어남
        opacity: 0,
        duration: 1.2, // 버튼은 살짝 느리게
        delay: 0.3, // 텍스트 뒤에 나타남
        ease: "power4.out", // 동일한 ease
      });
    }
  }, [currentSection]);

  return (
    <div className="relative h-full overflow-hidden">
      {/* SEO 메타 태그 설정 */}
      <Helmet>
        <title>Onboarding Page</title>
        <meta
          name="description"
          content="Welcome to our onboarding experience!"
        />
      </Helmet>

      {/* 페이지 섹션 */}
      <div className="h-full snap-y snap-mandatory overflow-y-scroll">
        {/* 1번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="flex h-screen w-full items-center justify-center relative"
        >
          <div
            ref={(el) => (splineRefs.current[0] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[0]} />
          </div>
          <div className="absolute z-10 right-[38rem] top-[12rem] text-center">
            <AnimatedTitle /> {/* 여기서 AnimatedTitle 사용 */}
          </div>
          <div className="absolute bottom-0 right-2 w-[10rem] h-16 bg-[#000000]"></div>
        </section>

        {/* 2번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="flex h-screen w-full items-center justify-center relative"
        >
          {/* 배경 3D 애니메이션 */}
          <div
            ref={(el) => (splineRefs.current[1] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[1]} />
          </div>
          <div className="relative z-10 flex flex-col items-start w-[60%] ml-[1%]">
  {/* 개발의 시작 박스 */}
  <div className="bg-[#171717] bg-opacity-70 p-6 rounded-lg shadow-xl text-[#e57373] w-[22rem] h-[9rem] flex flex-col items-center justify-center text-center">
    <h2 className="text-xl font-bold mb-4">개발의 시작, 어렵지 않나요?</h2>
    <ul className="space-y-1 text-[#e0e0e0] text-[0.9rem]">
      <li>POC 설계, API & ERD 작성이 어려워요</li>
      <li>FE/BE 환경세팅이 번거로워요</li>
    </ul>
  </div>

  {/* 점선 화살표 (위치 조정) */}
  <div className="w-[22rem] flex justify-center">
    <div className="h-[36px] border-l-2 border-dashed border-white opacity-80"></div>
  </div>

  {/* Dev Sketch 해결 박스 */}
  <div className="bg-[#051c2b] bg-opacity-70 p-6 rounded-lg shadow-xl text-[#64b5f6] w-[22rem] flex flex-col items-center justify-center text-center">
    <h3 className="text-xl font-semibold mb-4">Dev Sketch가 해결합니다!</h3>
    <ul className="space-y-1 text-[#e0e0e0] text-[0.9rem]">
      <li>API & ERD & Diagram 생성</li>
      <li>개발 초기환경 세팅</li>
    </ul>
  </div>
          </div>
          <div className="absolute bottom-0 right-2 w-[10rem] h-16 bg-[#000000]"></div>
        </section>

        {/* 3번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="flex h-screen w-full items-center justify-center relative bg-[#02001C]"
        >
          <div
            ref={(el) => (splineRefs.current[2] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[2]} />
          </div>
          <div className="absolute z-10 top-[20rem] text-center">
            {/* 하단 텍스트 */}
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-[#a4d3f2]">Dev Sketch</h1>
            </div>
            <div>
              <button onClick={() => navigate('/')}
                className="absolute w-[10rem] h-[2.5rem] top-[6rem] left-[3.4rem] start-button bg-[#132642] 
                bg-opacity-70 text-[rgb(220,220,220)] text-[1rem] font-medium px-6 py-2 rounded-lg">
                start now
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 right-2 w-[10rem] h-16 bg-[#000000]"></div>
        </section>
      </div>
    </div>
  );
};

export default OnboardingPage;
