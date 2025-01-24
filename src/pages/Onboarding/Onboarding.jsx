import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';

const OnboardingPage = () => {
  const sectionsRef = useRef([]); // 각 섹션 참조
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 상태

  // 섹션 초기 애니메이션
  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.set(section, { opacity: 0, y: 50 }); // 초기 상태 설정
    });
  }, []);

  // 스크롤 이벤트 처리
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [currentSection, handleScroll]);

  return (
    <div className="onboarding-page">
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
            className="section"
          >
            <div>
              <h1 className="text-4xl font-bold">Section {index + 1}</h1>
              <p className="text-lg">
                This is the content for section {index + 1}.
              </p>
            </div>
          </section>
        ))}
      </div>

      {/* 페이지 내비게이션 */}
      <div className="fixed right-4 top-1/2 flex -translate-y-1/2 transform flex-col">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`nav-button ${currentSection === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingPage;