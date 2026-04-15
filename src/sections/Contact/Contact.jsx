import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.scss';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`container ${styles.contact}`}>
        <SectionTitle title="Get in touch" />
        <p>Please feel free to contact me if you have any questions.</p>
        <p>I'll try to get back to you.</p>

        <div className={styles.links}>
          <a href="https://github.com/your-account" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-account" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;