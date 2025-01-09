import Link from 'next/link';
import styles from './Portfolio.module.css';
import Image from 'next/image';
import { projects } from '@/data/projects'; // Importera projektdata

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      {projects.map((project) => (
        <Link href={`/portfolio/${project.id}`} key={project.id}>
          <div className={styles.portfolioCard}>
            <Image
              src={project.images[0]} // Använd den första bilden i arrayen
              alt={project.title}
              className={styles.portfolioImage}
              width={300}
              height={200}
            />
            <h3 className={styles.portfolioTitle}>{project.title}</h3>
            <p className={styles.portfolioDescription}>{project.shortDescription}</p>
            <div className={styles.portfolioLanguages}>
              {project.languages.map((language, index) => (
                <span key={index} className={styles.languageBadge}>{language}</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;