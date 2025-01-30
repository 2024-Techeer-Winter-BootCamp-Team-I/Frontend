import gradationBackground from '../assets/image/gradationBackground.svg';
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
        textShadow: glow
          ? `0 0 5px rgba(0, 120, 180, 0.5), 
            0 0 20px rgba(0, 100, 160, 0.3), 
            0 0 30px rgba(0, 80, 140, 0.25),
            0 0 40px rgba(0, 60, 120, 0.3)`
          : `0 0 3px rgba(0, 100, 160, 0.2), 
            0 0 8px rgba(0, 80, 140, 0.18), 
            0 0 12px rgba(0, 60, 120, 0.15)`,
        transition: 'text-shadow 1.5s ease-in-out',
        filter: 'drop-shadow(0px 0px 15px rgba(0, 100, 160, 0.4))',
      }}
    >
      Dev Sketch
      <p className="text-sm font-medium text-[#cecece] mt-3">개발을 더 쉽게, 더 빠르게</p>
    </h1>
  );
};

const OnboardingPage = () => {
  const sectionsRef = useRef([]);
  const splineRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();

  const splineScenes = [
    'https://prod.spline.design/sHgTaG64SnS6eQYL/scene.splinecode',
    'https://prod.spline.design/yv9b6mRJsyD71IF5/scene.splinecode',
    'https://prod.spline.design/7IInnHw1sbK2Iaa8/scene.splinecode',
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

    gsap.to('body', {
      backgroundColor: '#000000',
      duration: 0.5,
      ease: 'power2.out',
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
      gsap.from('.final-text', {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.start-button', {
        y: -200,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power4.out',
      });
    }
  }, [currentSection]);

  return (
    <div className="relative h-full overflow-hidden">
      <Helmet>
        <title>Onboarding Page</title>
        <meta name="description" content="Welcome to our onboarding experience!" />
      </Helmet>

      {/* 페이지 섹션 */}
      <div className="h-full snap-y snap-mandatory overflow-y-scroll">
        {/* 1번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="flex h-screen w-full items-center justify-center relative"
          style={{
            backgroundImage: `url(${gradationBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div ref={(el) => (splineRefs.current[0] = el)} className="absolute inset-0 z-0">
            <Spline scene={splineScenes[0]} />
          </div>
          <div className="absolute z-10 right-[38rem] top-[12rem] text-center">
            <AnimatedTitle />
          </div>
          <div className="absolute bottom-0 right-2 w-[10rem] h-16 bg-[#000000]"></div>
        </section>

        {/* 2번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="flex h-screen w-full items-center justify-center relative z-10"
        >
          <div ref={(el) => (splineRefs.current[1] = el)} className="absolute inset-0 z-0">
            <Spline scene={splineScenes[1]} />
          </div>
          <div className="relative w-full h-[40rem]">
            {/* 개발의 시작 박스 1 (왼쪽에 꼬리) */}
            <div className="relative top-[4rem] left-[22rem] bg-[#272727] bg-opacity-70 p-6 rounded-lg shadow-xl text-[#e57373] 
       w-[18rem] h-[6rem] flex flex-col items-center justify-center text-center 
       after:content-[''] after:absolute after:-bottom--1 after:left-[-1rem] 
       after:border-8 after:border-transparent after:border-r-[#272727]">
              <ul className="space-y-1 text-[#e0e0e0] text-[0.9rem]">
                <li>POC 설계, API & ERD 작성이 어려워요</li>
              </ul>
            </div>

            {/* 개발의 시작 박스 2 (오른쪽에 꼬리) */}
            <div className="relative top-[1rem] left-[45rem] bg-[#272727] bg-opacity-70 p-6 rounded-lg shadow-xl text-[#e57373] 
       w-[18rem] h-[6rem] flex flex-col items-center justify-center text-center 
       after:content-[''] after:absolute after:-bottom--1 after:right-[-1rem] 
       after:border-8 after:border-transparent after:border-l-[#272727]">
              <ul className="space-y-1 text-[#e0e0e0] text-[0.9rem]">
                <li>FE/BE 환경세팅이 번거로워요</li>
              </ul>
            </div>
          </div>

          <div className="absolute top-[22rem] left-[40rem] transform -translate-x-1/2 bg-[#051c2b] bg-opacity-70 
  p-6 rounded-lg shadow-xl text-[#64b5f6] w-[22rem] h-[9rem] flex flex-col items-center justify-center text-center 
  after:content-[''] after:absolute after:-right-4 after:top-1/2 after:transform after:-translate-y-1/2 
  after:border-8 after:border-transparent after:border-l-[#193e56]">
  <h3 className="text-xl font-semibold mb-4">Dev Sketch가 해결합니다!</h3>
  <ul className="space-y-1 text-[#e0e0e0] text-[0.9rem]">
    <li>API & ERD & Diagram 생성</li>
    <li>개발 초기환경 세팅</li>
  </ul>
</div>
          <div className="absolute bottom-0 right-2 w-[10rem] h-16 bg-[#000000]"></div>
        </section>

        {/* 3번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="flex h-screen w-full items-center justify-center relative"
          style={{
            backgroundImage: `url(${gradationBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div ref={(el) => (splineRefs.current[2] = el)} className="absolute inset-0 z-0">
            <Spline scene={splineScenes[2]} />
          </div>
          <div className="absolute z-10 top-[20rem] text-center">
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-[#9ef3f3]">Dev Sketch</h1>
            </div>
            <div>
              <button
                onClick={() => navigate('/')}
                className="absolute w-[10rem] h-[2.5rem] top-[6rem] left-[3.4rem] start-button bg-[#1b2d48]
                bg-opacity-70 text-[rgb(220,220,220)] text-[1rem] font-medium px-6 py-2 rounded-lg"
              >
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
