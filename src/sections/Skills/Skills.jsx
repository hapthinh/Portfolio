import { skillGroups, skillHighlights } from "../../data/skills";
import styles from "./Skills.module.scss";

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
        <div style={{ overflow: "hidden" }}>
          <div className={styles.highlightRow}>
            {skillHighlights.map((item) => (
              <span key={item} className={styles.highlightChip}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article key={group.title} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>

                  <h3 className={styles.cardTitle}>{group.title}</h3>
                </div>

                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;