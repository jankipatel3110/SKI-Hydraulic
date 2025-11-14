
import React, { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });
    
    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if(current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`scroll-animation ${isVisible ? 'visible' : ''} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
