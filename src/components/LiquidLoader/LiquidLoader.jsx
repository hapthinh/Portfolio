import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./LiquidLoader.module.scss";

export default function LiquidLoader({ onFinish }) {
  const [explode, setExplode] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExplode(true), 1350);
    const t2 = setTimeout(() => setHide(true), 2100);
    const t3 = setTimeout(() => onFinish?.(), 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  return (
    <motion.div
      className={styles.wrapper}
      animate={hide ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={styles.scene}>
        <motion.div
          className={styles.drop}
          initial={{ y: -200, scaleX: 0.9, scaleY: 1.1, opacity: 0 }}
          animate={{
            y: [-220, 0, 50, 188, 182],
            scaleX: [0.9, 1, 1, 1.25, 1.05],
            scaleY: [1.1, 1, 1, 0.7, 0.95],
            opacity: [0, 1, 1, 1, 1],
          }}
          transition={{
            duration: 1.35,
            times: [0, 0.18, 0.78, 0.9, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.div
          className={styles.shadow}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{
            scale: [0.2, 0.35, 0.9, 1.2],
            opacity: [0, 0.08, 0.18, 0.1],
          }}
          transition={{
            duration: 1.35,
            times: [0, 0.4, 0.8, 1],
            ease: "easeOut",
          }}
        />

        {explode && (
          <>
            <motion.div
              className={styles.splashLeft}
              initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
              animate={{ x: -36, y: -22, scale: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            <motion.div
              className={styles.splashRight}
              initial={{ x: 0, y: 0, scale: 0.4, opacity: 0 }}
              animate={{ x: 36, y: -22, scale: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
            <motion.div
              className={styles.ring}
              initial={{ scale: 0.2, opacity: 0.45 }}
              animate={{ scale: 2.8, opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}