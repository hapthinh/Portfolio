import styles from "./Journey.module.scss";

export default function JourneyCard({ journey }) {
  return (
    <div className={styles["experience-card"]}>
      <div className={styles["card-header"]}>
        <h2>{journey.jobTitle}</h2>
        <span className={styles.company}>{journey.companyAndTime}</span>
      </div>

      <p className={styles.description}>{journey.description}</p>

      <div className={styles.skills}>
        {journey.skills?.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
