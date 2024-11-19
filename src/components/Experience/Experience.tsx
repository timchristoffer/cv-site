'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Experience.module.css';

type Card = {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: string;
};

const cards: Card[] = [
  {
    description: "A modern web application for managing tasks.",
    title: "Task Manager",
    src: "/Images/spike_bomb.png",
    ctaText: "Read more",
    ctaLink: "https://example.com/task-manager",
    content: "This project is a modern web application built with React and Node.js for managing tasks. It features user authentication, real-time updates, and a responsive design. The backend is powered by Express and MongoDB, ensuring fast and reliable data storage and retrieval."
  },
  {
    description: "An e-commerce platform for selling products online.",
    title: "E-Commerce Platform",
    src: "/Images/spike_bomb.png",
    ctaText: "Read more",
    ctaLink: "https://example.com/e-commerce",
    content: "This e-commerce platform is built with Next.js and Tailwind CSS. It includes features such as product listings, a shopping cart, and a secure checkout process. The platform is optimized for performance and scalability, making it suitable for businesses of all sizes."
  },
  {
    description: "A portfolio website showcasing web development projects.",
    title: "Portfolio Website",
    src: "/Images/spike_bomb.png",
    ctaText: "Read more",
    ctaLink: "https://example.com/portfolio",
    content: "This portfolio website is built with Gatsby and GraphQL. It features a clean and modern design, with sections for projects, skills, and contact information. The site is fully responsive and optimized for SEO, ensuring a great user experience on all devices."
  },
  {
    description: "A blog platform for sharing articles and tutorials.",
    title: "Blog Platform",
    src: "/Images/spike_bomb.png",
    ctaText: "Read more",
    ctaLink: "https://example.com/blog",
    content: "This blog platform is built with Jekyll and GitHub Pages. It allows users to create and share articles and tutorials on various topics. The platform includes features such as categories, tags, and a search function, making it easy for readers to find content."
  },
  {
    description: "A social media application for connecting with friends.",
    title: "Social Media App",
    src: "/Images/spike_bomb.png",
    ctaText: "Read more",
    ctaLink: "https://example.com/social-media",
    content: "This social media application is built with Flutter and Firebase. It allows users to create profiles, post updates, and connect with friends. The app includes features such as real-time messaging, notifications, and a news feed, providing a seamless social experience."
  },
];

const Experience = () => {
  const [activeCard, setActiveCard] = useState<Card | null>(null);

  const handleCardClick = (card: Card) => {
    setActiveCard(card);
  };

  const handleCloseClick = () => {
    setActiveCard(null);
  };

  return (
    <div className={styles['exp-container']}>
      <div className={styles['exp-list']}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles['exp-item']}
            onClick={() => handleCardClick(card)}
          >
            <Image
              src={card.src}
              alt={card.title}
              width={100}
              height={100}
              className={styles['exp-image']}
            />
            <h3 className={styles['exp-title']}>{card.title}</h3>
            <p className={styles['exp-description']}>{card.description}</p>
          </div>
        ))}
      </div>
      {activeCard && (
        <div className={styles['exp-modal']}>
          <div className={styles['exp-modal-content']}>
            <button className={styles['exp-close']} onClick={handleCloseClick}>
              &times;
            </button>
            <Image
              src={activeCard.src}
              alt={activeCard.title}
              width={500}
              height={500}
              className={styles['exp-modal-image']}
            />
            <h3 className={styles['exp-modal-title']}>{activeCard.title}</h3>
            <p className={styles['exp-modal-description']}>{activeCard.content}</p>
            <a
              href={activeCard.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['exp-modal-cta']}
            >
              {activeCard.ctaText}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;