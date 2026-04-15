import styles from './SectionTitle.module.scss';

function SectionTitle({ title }) {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <span className={styles.line}></span>
    </div>
  );
}

export default SectionTitle;