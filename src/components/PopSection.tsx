import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface PopSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const PopSection = ({ children, delay = 0, className = "" }: PopSectionProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: 0.8, 
        y: 60,
        filter: "blur(10px)"
      }}
      animate={inView ? { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration: 0.7, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={className}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export default PopSection;
