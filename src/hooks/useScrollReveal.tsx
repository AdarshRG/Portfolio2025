
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const { current } = ref;
    const { threshold = 0.1, rootMargin = '0px' } = options;
    
    if (!current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(current);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(current);
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [options]);
  
  return { ref, isVisible };
}
