import { FaGithub, FaLaptop } from 'react-icons/fa';
import styles from './ProjectCard.module.scss';

function ProjectCard({ project }) {
  return (
    <article className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />

      <div className={styles.body}>
        <div className={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.actions}>
          {project.repoUrl ? (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <FaGithub /> Repo
            </a>
          ) : (
            <span className={styles.unavailable} aria-label="Repository is private">
              <FaGithub /> Private
            </span>
          )}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <FaLaptop /> Live
            </a>
          ) : (
            <span className={styles.unavailable} aria-label="Live demo coming soon">
              <FaLaptop /> Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
