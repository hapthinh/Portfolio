import { FaArrowUp } from 'react-icons/fa';
import styles from './BackToTop.module.scss';

function BackToTop() {
  return (
    <a href="#hero" className={styles.button}>
      <FaArrowUp />
    </a>
  );
}

export default BackToTop;