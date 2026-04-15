import { FaLaptopCode, FaAnglesDown, FaHandPeace } from 'react-icons/fa6';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <p className={styles.greeting}>👋 Hi,</p>
        <p className={styles.subtitle}>My name is</p>
        <h1>HA PHUC THINH</h1>
        <p className={styles.role}>I am a Web Developer 💻</p>

        <a href="#about" className={styles.scrollDown}>
          <FaAnglesDown />
        </a>
      </div>
    </section>
  );
}

export default Hero;