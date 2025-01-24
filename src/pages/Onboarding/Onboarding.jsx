import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import Spline from '@splinetool/react-spline'; // Spline import

const OnboardingPage = () => {
  const sectionsRef = useRef([]); // 각 섹션 참조
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 상태

  // Spline 장면 URL 배열
  const splineScenes = [
    "https://prod.spline.design/RFuBm9dVosE8CymG/scene.splinecode", // 1번 페이지
    "https://prod.spline.design/PhSvli-1CdxPi0KU/scene.splinecode", // 2번 페이지
    "https://prod.spline.design/O3aE1dJDLj6pMxOi/scene.splinecode", // 3번 페이지
    // 추가 페이지가 있다면 여기에 URL을 추가하세요.
  ];

  // 섹션 초기 애니메이션
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.set(section, { opacity: 0, y: 50 }); // 초기 상태 설정
    });
  }, []);

  // 스크롤 이벤트 처리
  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;
    if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
      setCurrentSection(nextSection);
    }
  };

  // 현재 섹션으로 스크롤 이동 및 애니메이션 실행
  useEffect(() => {
    const section = sectionsRef.current[currentSection];
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
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

      {/* 페이지 섹션 */}
      <div className="h-full snap-y snap-mandatory overflow-y-scroll">
        {[...Array(6)].map((_, index) => (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="flex h-screen w-full items-center justify-center"
          >
            {/* Spline 3D 장면 추가 */}
            <div className="absolute inset-0 z-0">
              {/* 현재 섹션에 맞는 Spline 장면을 렌더링 */}
              <Spline scene={splineScenes[index] || splineScenes[0]} />
            </div>
          </section>
        ))}
      </div>

      {/* 페이지 내비게이션 */}
      <div className="fixed top-1/2 right-4 -translate-y-1/2 transform flex flex-col space-y-2">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSection === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingPage;