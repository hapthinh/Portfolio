import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './Projects.module.scss';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle title="My projects" />
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;