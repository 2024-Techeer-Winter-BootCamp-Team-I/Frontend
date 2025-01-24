// BackgroundAnimation.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const symbolsRef = useRef([]);

  useEffect(() => {
    symbolsRef.current.forEach((symbol, index) => {
      gsap.fromTo(
        symbol,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        },
      );
    });
  }, []);

  return (
    <div className="background-animation">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={`symbol symbol-${index + 1}`}
          ref={(el) => (symbolsRef.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
