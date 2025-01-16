import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const OnboardingPage = () => {
  const sectionsRef = useRef([]); // 각 섹션 참조
  const [currentSection, setCurrentSection] = useState(0); // 현재 섹션 상태

  // 스크롤 이벤트 처리
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;
    if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
      setCurrentSection(nextSection);
    }
  };

  // 현재 섹션으로 스크롤 이동
  useEffect(() => {
    const section = sectionsRef.current[currentSection];
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection, handleScroll]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
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
            className={`flex h-screen snap-start items-center justify-center bg-gray-${(index + 1) * 100}`}
          >
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold text-white">
                Section {index + 1}
              </h1>
              <p className="text-lg text-gray-200">
                This is the content for section {index + 1}.
              </p>
            </div>
          </section>
        ))}
      </div>
      {/* Section 1 */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex h-screen snap-start flex-col items-center justify-center bg-purple-700 text-white"
      >
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-extrabold">
            Welcome to Our Service
          </h1>
          <p className="text-lg">
            Discover the best features tailored for you.
          </p>
          <button className="mt-8 rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600">
            Get Started
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flex h-screen snap-start flex-col items-center justify-center bg-blue-600 text-white"
      >
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">Explore Features</h1>
          <p className="text-lg">
            Our platform provides tools that make your experience amazing.
          </p>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Features"
            className="mt-6 rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/* Section 3 */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flex h-screen snap-start flex-col items-center justify-center bg-green-600 text-white"
      >
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Stay Connected</h1>
          <p className="text-lg">Connect with people and share your journey.</p>
          <div className="mt-8 flex space-x-4">
            <button className="rounded-lg bg-green-500 px-4 py-2 hover:bg-green-700">
              Learn More
            </button>
            <button className="rounded-lg bg-white px-4 py-2 text-green-600 hover:bg-green-200">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className="flex h-screen snap-start flex-col items-center justify-center bg-yellow-500 text-black"
      >
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold">Easy Integration</h1>
          <p className="text-lg">
            Seamlessly integrate with your existing tools and workflow.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section
        ref={(el) => (sectionsRef.current[4] = el)}
        className="flex h-screen snap-start flex-col items-center justify-center bg-red-600 text-white"
      >
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-extrabold">Enhanced Security</h1>
          <p className="text-lg">Your data is safe and secure with us.</p>
        </div>
      </section>

      {/* Section 6 */}
      <section
        ref={(el) => (sectionsRef.current[5] = el)}
        className="flex h-screen snap-start flex-col items-center justify-center bg-gray-900 text-white"
      >
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-extrabold">Get Started Today!</h1>
          <p className="text-lg">
            Join thousands of users who are already benefiting from our service.
          </p>
          <button className="mt-8 rounded-lg bg-purple-500 px-6 py-3 text-white hover:bg-purple-600">
            Sign Up
          </button>
        </div>
      </section>
      {/* 페이지 내비게이션 */}
      <div className="fixed right-4 top-1/2 flex -translate-y-1/2 transform flex-col space-y-2">
        {[...Array(6)].map((_, index) => (
          <button key={index} onClick={() => setCurrentSection(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default OnboardingPage;
