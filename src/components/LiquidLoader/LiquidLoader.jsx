import { motion } from "framer-motion";
import styles from "./LiquidLoader.module.scss";

export default function LiquidLoader({ onFinish }) {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.drop}
        initial={{ y: -200, x: 0, scale: 0.8 }}
        animate={{
          y: [-200, 200, 180, 200], 
          x: [0, 0, 0, 250], 
          scale: [0.8, 1.2, 1, 1],
        }}
        transition={{
          duration: 2,
          times: [0, 0.6, 0.75, 1],
          ease: "easeInOut",
        }}
        onAnimationComplete={onFinish}
      />
    </div>
  );
}
