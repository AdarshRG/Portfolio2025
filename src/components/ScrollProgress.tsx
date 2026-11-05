import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-portfolio-accent to-cyan-400 z-50 origin-left shadow-[0_0_12px_rgba(139,92,246,0.8)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;

