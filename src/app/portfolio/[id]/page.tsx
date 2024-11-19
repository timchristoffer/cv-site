import { notFound } from 'next/navigation';
import styles from './Project.module.css';
import Copyright from '@/components/Copyright/Copyright';
import NavBar from '@/components/NavBar/NavBar';
import Image from 'next/image';

const projects = [
  {
    id: 'project1',
    title: 'Project One',
    description: 'This is a detailed description of project one.',
    image: '/Images/spike_bomb.png',
    languages: ['JavaScript', 'React', 'CSS'],
  },
  {
    id: 'project2',
    title: 'Project Two',
    description: 'This is a detailed description of project two.',
    image: '/Images/spike_bomb.png',
    languages: ['Python', 'Django', 'HTML'],
  },
  // Add more projects here
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="project-container">
      <NavBar />
      <div className={styles.projectContainer}>
        <Image
          src={project.image}
          alt={project.title}
          className={styles.projectImage}
          width={800}
          height={600}
          priority
        />
        <h1 className={styles.projectTitle}>{project.title}</h1>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectLanguages}>
          {project.languages.map((language, index) => (
            <span key={index} className={styles.languageBadge}>
              {language}
            </span>
          ))}
        </div>
      </div>
      <Copyright />
    </div>
  );
}