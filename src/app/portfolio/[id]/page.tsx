import { notFound } from 'next/navigation';
import styles from './Project.module.css';
import Copyright from '@/components/Copyright/Copyright';
import NavBar from '@/components/NavBar/NavBar';
import Image from 'next/image';
import { projects } from '@/data/projects'; // Import project data

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
    <div className={styles.projectContainer}>
      <NavBar />
      <div className={styles.projectContent}>
        <div className={styles.projectLanguages}>
          {project.languages.map((language, index) => (
            <span key={index} className={styles.languageBadge}>
              {language}
            </span>
          ))}
        </div>
        <div className={styles.projectImages}>
          {project.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${project.title} image ${index + 1}`}
              className={styles.projectImage}
              width={500}
              height={400}
              priority
            />
          ))}
        </div>
        <div className={styles.projectDetails}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>
      </div>
      <Copyright />
    </div>
  );
}