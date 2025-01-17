import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const OnboardingPage = () => {
  const sectionsRef = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = currentSection + direction;
    if (nextSection >= 0 && nextSection < sectionsRef.current.length) {
      setCurrentSection(nextSection);
    }
  };

  useEffect(() => {
    const section = sectionsRef.current[currentSection];
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  return (
    <div className="bg-animate relative h-screen w-full overflow-hidden">
      <Helmet>
        <title>Onboarding Page</title>
        <meta
          name="description"
          content="Welcome to our onboarding experience!"
        />
      </Helmet>

      <div className="h-full snap-y snap-mandatory overflow-y-scroll">
        {[...Array(6)].map((_, index) => (
          <section
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="flex h-screen snap-start items-center justify-center"
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h1 className="mb-4 text-4xl font-bold text-white">
                Section {index + 1}
              </h1>
              <p className="text-lg text-gray-200">
                This is the content for section {index + 1}.
              </p>
            </motion.div>
          </section>
        ))}
      </div>

      <div className="fixed right-4 top-1/2 flex -translate-y-1/2 transform flex-col space-y-2">
        {[...Array(6)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
              currentSection === index ? 'scale-125 bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OnboardingPage;
