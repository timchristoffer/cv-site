import { notFound } from 'next/navigation';
import styles from './Project.module.css';
import Copyright from '@/components/Copyright/Copyright';
import NavBar from '@/components/NavBar/NavBar';

const projects = [
  {
    id: 'project1',
    title: 'Project One',
    description: 'This is a detailed description of project one.',
    image: '/images/project1.jpg',
    languages: ['JavaScript', 'React', 'CSS'],
  },
  {
    id: 'project2',
    title: 'Project Two',
    description: 'This is a detailed description of project two.',
    image: '/images/project2.jpg',
    languages: ['Python', 'Django', 'HTML'],
  },
  // Lägg till fler projekt här
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageParams {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageParams) {
  const { id } = params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className='project-container'>
        <NavBar />
    <div className={styles.projectContainer}>
      <img src={project.image} alt={project.title} className={styles.projectImage} />
      <h1 className={styles.projectTitle}>{project.title}</h1>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectLanguages}>
        {project.languages.map((language, index) => (
          <span key={index} className={styles.languageBadge}>{language}</span>
        ))}
      </div>
    </div>
    <Copyright />
    </div>
  );
}