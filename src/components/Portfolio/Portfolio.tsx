import Link from 'next/link';
import styles from './Portfolio.module.css';
import Image from 'next/image';

const projects = [
  {
    id: 'project1',
    title: 'Project One',
    description: 'This is a description of project one.',
    image: '/images/project1.jpg',
    languages: ['JavaScript', 'React', 'CSS'],
  },
  {
    id: 'project2',
    title: 'Project Two',
    description: 'This is a description of project two.',
    image: '/images/project2.jpg',
    languages: ['Python', 'Django', 'HTML'],
  },
  // Lägg till fler projekt här
];

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      {projects.map((project) => (
        <Link href={`/portfolio/${project.id}`} key={project.id}>
          <div className={styles.portfolioCard}>
            <Image src={project.image} alt={project.title} className={styles.portfolioImage} />
            <h3 className={styles.portfolioTitle}>{project.title}</h3>
            <p className={styles.portfolioDescription}>{project.description}</p>
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