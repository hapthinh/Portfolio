import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./About.module.scss";
import {
  FaStar,
  FaBolt,
  FaUsers,
  FaUser,
  FaInfinity,
  FaHandPeace,
} from "react-icons/fa";

const traits = [
  { icon: <FaStar />, label: "Innovative" },
  { icon: <FaBolt />, label: "Fast Learner" },
  { icon: <FaUsers />, label: "Teamwork spirit" },
  { icon: <FaUser />, label: "Strong self-competence" },
  { icon: <FaInfinity />, label: "Problem Solver" },
  { icon: <FaHandPeace />, label: "Quickly adapt" },
];

function About() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.about}`}>
        <SectionTitle title="About me" />

        <div className={styles.textBox}>
          <p>
            Hi, my name is <span>Toby Ha</span>. I am a frontend developer
            focused on building clean, responsive and user-friendly web
            interfaces.
          </p>
          <p>
            I enjoy working with <span>React</span>, modern UI architecture,
            reusable components, and performance optimization.
          </p>
          <p>
            My goal is to build products that are both visually polished and
            practical for real users.
          </p>
        </div>
        <div className={styles.traits}>
          {traits.map((item) => (
            <div key={item.label} className={styles.trait}>
              <span className={styles.icon}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
