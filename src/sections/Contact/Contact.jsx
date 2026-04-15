import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`container ${styles.contact}`}>
        <SectionTitle title="Get in touch" />

        <p className={styles.desc}>
          Feel free to reach out if you have any questions or opportunities.
        </p>

        <div className={styles.contactGrid}>
          <a
            href="https://github.com/hapthinh"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/toby-ha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a href="mailto:thinh.haphuc18@gmail.com">
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a href="tel:0917558807">
            <FaPhone />
            <span>Phone</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
