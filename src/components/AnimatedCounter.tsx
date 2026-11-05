import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({
  from = 0,
  to,
  duration = 1.8,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView) return;

    const start = from;
    const end = to;
    const totalFrames = Math.max(Math.round(duration * 60), 20);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      // easeOutExpo for natural deceleration
      const progress = 1 - Math.pow(2, -10 * (frame / totalFrames));
      const current = Math.round(start + (end - start) * progress);
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;

