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
          <a href={project.repoUrl} target="_blank" rel="noreferrer">
            <FaGithub /> Repo
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <FaLaptop /> Live
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;