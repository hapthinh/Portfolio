import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./LiquidLoader.module.scss";

export default function LiquidLoader({ onFinish }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHide(true), 2100);
    const finishTimer = setTimeout(() => onFinish?.(), 2500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      className={styles.wrapper}
      role="status"
      aria-label="Loading portfolio"
      animate={hide ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className={styles.capybaraLoader} aria-hidden="true">
        <div className={styles.capybara}>
          <div className={styles.capyHead}>
            <div className={styles.capyEar}>
              <div className={styles.capyEarInner} />
            </div>
            <div className={styles.capyEar} />
            <div className={styles.capyMouth}>
              <div className={styles.capyLips} />
              <div className={styles.capyLips} />
            </div>
            <div className={styles.capyEye} />
            <div className={styles.capyEye} />
          </div>
          <div className={styles.capyLegBack} />
          <div className={styles.capyLeg} />
          <div className={styles.capyLeg} />
          <div className={styles.capyBody} />
        </div>
        <div className={styles.loaderTrack}>
          <div className={styles.loaderLine} />
        </div>
      </div>
    </motion.div>
  );
}
