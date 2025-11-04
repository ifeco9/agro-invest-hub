import { useEffect, useRef } from 'react';

const SparkleEffect = () => {
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sparkleContainerRef.current) return;

    const container = sparkleContainerRef.current;
    const sparkleCount = 120; // More sparkles

    // Create sparkling dots
    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 5}s`;
      sparkle.style.animationDuration = `${2 + Math.random() * 4}s`;
      container.appendChild(sparkle);
    }

    // Cleanup
    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={sparkleContainerRef} className="sparkle-container" />;
};

export default SparkleEffect;
