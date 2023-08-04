import { motion, AnimatePresence, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
interface FrammerProps {
  children: ReactNode;
}

export const Framer: React.FC<FrammerProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main ref={ref}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ delay: 0.3, duration: 0.23 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
