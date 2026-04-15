import SectionTitle from "../../components/SectionTitle/SectionTitle";
import styles from "./MyJourney.module.scss";
import { experiences } from "../../data/experiences";
import JourneyCard from "../../components/Journey/Journey";

export default function MyJourney() {
  return (
    <section id="myJourney" className="section">
      <div className="container">
        <SectionTitle title="My Journey"></SectionTitle>
        <div className={styles.column}>
          {experiences.map((experience) => (
            <JourneyCard key={experience.jobTitle} journey={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
