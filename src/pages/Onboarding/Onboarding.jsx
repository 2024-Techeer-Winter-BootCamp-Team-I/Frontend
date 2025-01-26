import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline'; // Spline import

const OnboardingPage = () => {
  const sectionsRef = useRef([]); // 각 섹션 참조
  const splineRefs = useRef([]); // 각 Spline 인스턴스 참조
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 상태

  // Spline 장면 URL 배열 (5개로 변경)
  const splineScenes = [
    "https://prod.spline.design/5PtFfbmEsFmAlvgE/scene.splinecode", // 1번 페이지
    "https://prod.spline.design/CBzOZ-bcn5ZQEJ3X/scene.splinecode", // 3번 페이지
    "https://prod.spline.design/cB5066qJF-2OCY7z/scene.splinecode", // 4번 페이지
    "https://prod.spline.design/cB5066qJF-2OCY7z/scene.splinecode", // 5번 페이지
  ];

  // 섹션 초기 애니메이션
  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      if (index !== currentSection) {
        // 현재 섹션 외의 모든 섹션을 숨김
        gsap.set(section, { opacity: 0, y: 50, visibility: 'hidden' });
      } else {
        // 현재 섹션만 보이도록 설정
        gsap.set(section, { opacity: 1, y: 0, visibility: 'visible' });
      }
    });
  }, [currentSection]);

  // 스크롤 이벤트 처리
  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;
    // 마지막 페이지에서 스크롤을 막음
    if (nextSection >= 0 && nextSection < splineScenes.length) {
      setCurrentSection(nextSection);
    }
  };

  // 현재 섹션으로 스크롤 이동 및 애니메이션 실행
  useEffect(() => {
    const section = sectionsRef.current[currentSection];
    gsap.to(section, {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      duration: 1,
      ease: 'power2.out',
    });

    // 이전 섹션 숨기기
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

      {/* 페이지 섹션 (5개로 변경) */}
      <div className="h-full snap-y snap-mandatory overflow-y-scroll">
        {/* 1번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="flex h-screen w-full items-center justify-center relative"
        >
          {/* Spline 3D 장면 추가 */}
          <div
            ref={(el) => (splineRefs.current[0] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[0]} />
          </div>

          {/* 텍스트 추가 */}
          <div className="absolute z-10 text-center">
            <h1 className="text-gray-200 text-6xl font-medium mb-4 tracking-wider">
              Dev Sketch
            </h1>
          </div>
        </section>

        {/* 2번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="flex h-screen w-full items-center justify-center relative"
        >
          {/* Spline 3D 장면 추가 */}
          <div
            ref={(el) => (splineRefs.current[1] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[1]} />
          </div>

          {/* 텍스트 추가 */}
          <div className="absolute z-10 text-center">
            <h1 className="text-gray-200 text-[1rem] font-sans font-medium mb-4 tracking-wider">
              
            </h1>
          </div>
        </section>

        {/* 3번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="flex h-screen w-full items-center justify-center relative"
        >
          {/* Spline 3D 장면 추가 */}
          <div
            ref={(el) => (splineRefs.current[2] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[2]} />
          </div>

          {/* 텍스트 추가 */}
          <div className="absolute z-10 text-center">
            <h1 className="text-gray-200 text-6xl font-medium mb-4 tracking-wider">
             
            </h1>
          </div>
        </section>

        {/* 4번 페이지 */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="flex h-screen w-full items-center justify-center relative"
        >
          {/* Spline 3D 장면 추가 */}
          <div
            ref={(el) => (splineRefs.current[3] = el)}
            className="absolute inset-0 z-0"
          >
            <Spline scene={splineScenes[3]} />
          </div>

          {/* 텍스트 추가 */}
          <div className="absolute z-10 text-center">
            <h1 className="text-gray-200 text-6xl font-medium mb-4 tracking-wider">
             
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnboardingPage;