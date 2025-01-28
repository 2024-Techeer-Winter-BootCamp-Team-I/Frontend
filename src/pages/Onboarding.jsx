import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline';

const Onboarding = () => {
  const sectionsRef = useRef([]);
  const splineRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();

  const splineScenes = [
    'https://prod.spline.design/5PtFfbmEsFmAlvgE/scene.splinecode',
    'https://prod.spline.design/CBzOZ-bcn5ZQEJ3X/scene.splinecode',
    'https://prod.spline.design/cB5066qJF-2OCY7z/scene.splinecode',
    'https://prod.spline.design/cB5066qJF-2OCY7z/scene.splinecode',
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
      // 4번 페이지 애니메이션
      gsap.from('.final-text', {
        y: -200, // 시작 위치: 화면 위로 크게 벗어남
        opacity: 0,
        duration: 1, // 애니메이션 속도
        ease: 'power4.out', // 더 드라마틱한 ease
      });
      gsap.from('.start-button', {
        y: -200, // 시작 위치: 화면 위로 크게 벗어남
        opacity: 0,
        duration: 1.2, // 버튼은 살짝 느리게
        delay: 0.3, // 텍스트 뒤에 나타남
        ease: 'power4.out', // 동일한 ease
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
          className="relative flex h-screen w-full items-center justify-center"
        >
          <div
            ref={(el) => (splineRefs.current[0] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[0]} />
          </div>
          <div className="absolute z-10 text-center">
            <h1 className="mb-4 text-6xl font-medium tracking-wider text-gray-200">
              Dev Sketch
            </h1>
          </div>
          <div className="absolute bottom-0 right-2 h-16 w-[10rem] bg-black"></div>
        </section>

        {/* 2번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="relative flex h-screen w-full items-center justify-center"
        >
          <div
            ref={(el) => (splineRefs.current[1] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[1]} />
          </div>

          {/* Left Top Box Text */}
          <div className="absolute left-[31rem] top-[15rem] text-[0.7rem] text-[#cecece]">
            <p>
              개발할 때 poc가 어려워요
              <br />
              API와 ERD 작성도 번거로워요
            </p>
          </div>

          {/* Right Top Box Text */}
          <div className="absolute right-[32.2rem] top-[17rem] text-[0.7rem] text-[#cecece]">
            <p>
              서비스 개발 전 환경 세팅에서
              <br />
              시간이 오래 걸리고 복잡해요
            </p>
          </div>

          {/* Bottom Box Text */}
          <div className="absolute bottom-[12rem] text-center text-[0.7rem] leading-[1.2rem] text-[#cecece]">
            <h2 className="mb-1 text-[1.2rem]">
              So We took the direction of our Service
            </h2>
            <p>따라서 다음 고충을 보완하도록 방향성을 잡았습니다.</p>

            <div className="mt-6 flex justify-center space-x-16">
              {/* PoC Section */}
              <div className="text-center">
                <h3 className="mb-2 text-[1rem] text-[#9EA9DB]">PoC</h3>
                <p>
                  사용자의 요구대로 API, ERD
                  <br />및 시스템 시나리오를 만들어주는 시스템
                </p>
                <p className="mt-2.5 text-[0.6rem] leading-[0.9rem] text-[#cecece]">
                  API, ERD as required by the user
                  <br />
                  and systems that create system scenarios
                </p>
              </div>

              {/* Setting Section */}
              <div className="text-center">
                <h3 className="mb-2 text-[1rem] text-[#9EA9DB]">Setting</h3>
                <p>
                  사용자가 원하는 분야(FE/BE)와
                  <br />
                  Docker까지 세팅해주는 시스템
                </p>
                <p className="mt-2.5 text-[0.6rem] leading-[0.9rem] text-[#cecece]">
                  A system that sets the users desired
                  <br />
                  conditions (FE/BE) and Docker
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-2 h-16 w-[10rem] bg-[#010016]"></div>
        </section>

        {/* 3번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="relative flex h-screen w-full items-center justify-center bg-[#02001C]"
        >
          <div
            ref={(el) => (splineRefs.current[2] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[2]} />
          </div>
          <div className="absolute z-10 text-center">
            {/* 상단 네모 박스 */}
            <div className="mx-auto h-[8rem] w-[48rem] max-w-3xl rounded-2xl bg-[#162053] bg-opacity-70 p-6 text-center shadow-lg">
              <p className="mt-5 text-[0.9rem] text-[#cecece]">
                Sketch는 &quot;완성된 그림의 기초로 쓰이는 대략적인 그림
                &quot;이라는 뜻을 가지고 있습니다.
              </p>
              <p className="mt-2 font-sans text-[0.85rem] text-[#cecece]">
                Dev Sketch는 &quot;스케치 &quot;라는 단어처럼, 스케치에서
                시작하여 완성된 프로젝트로 나아가는 여정의 첫걸음을 돕겠습니다.
              </p>
            </div>

            {/* 중앙 점과 대시 라인 */}
            <div className="relative flex flex-col items-center">
              <div
                className="absolute h-36 border-l border-dashed border-[#3C4BA7]"
                style={{
                  borderWidth: '1px',
                  borderImage:
                    'repeating-linear-gradient(#3C4BA7 0 3px, transparent 0 6px) 1',
                }}
              ></div>
              <div className="h-2 w-2 rounded-full bg-[#7592B7]"></div>
              <div className="mt-36 h-2 w-2 rounded-full bg-[#7592B7]"></div>
            </div>

            {/* 하단 텍스트 */}
            <div className="mt-10 text-center">
              <h1 className="text-3xl font-bold text-[#7592B7]">Dev Sketch</h1>
              <p className="mt-4 text-[#cecece]">
                초보 개발자들이 더 큰 가능성을 향해 나아갈 수 있도록, <br />
                Dev Sketch와 함께 작은 아이디어를 거대한 프로젝트로 키워보세요.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-2 h-16 w-[10rem] bg-[#010016]"></div>
        </section>

        {/* 4번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="relative flex h-screen w-full items-center justify-center"
        >
          <div
            ref={(el) => (splineRefs.current[3] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[3]} />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="final-text font-sans text-3xl font-bold leading-relaxed text-[#cecece]">
              DevSketch와 함께 <br />
              프로젝트를 만들어보시겠습니까?
            </h1>
            <button
              onClick={() => navigate('/')}
              className="start-button absolute left-1/2 top-[15rem] flex h-[3rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-lg bg-[#142850] text-[1.2rem] font-semibold text-[#cecece] hover:bg-[#0D1A34]"
            >
              Start now
            </button>
          </div>
          <div className="absolute bottom-0 right-2 h-16 w-[10rem] bg-[#010016]"></div>
        </section>
      </div>
    </div>
  );
};

export default Onboarding;
