'use client';

import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles['about-container']}>
      <div className={styles['image-container']}>
        <Image
          src="/Images/fangs1.png"
          alt="About Image"
          width={800}
          height={600}
          className={styles.image}
        />
      </div>
      <div className={styles['divider']}></div>
      <div className={styles['text-container']}>
        <h1 className={styles['about-title']}>About Me</h1>
        <p className={styles['about-text']}>
          Hej! Jag heter Tim och jag studerar till .NET Developer med en förkärlek för webbutveckling. Jag älskar att skapa moderna och användarvänliga applikationer som gör livet enklare för användarna. När jag inte kodar, tycker jag om att utforska nya teknologier och förbättra mina färdigheter.
        </p>
        <div className={styles['social-icons']}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/Icons/instagram.svg" alt="Instagram" className={styles['social-icon']} width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/Icons/linkedin.svg" alt="LinkedIn" className={styles['social-icon']} width={24} height={24} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <Image src="/Icons/github.svg" alt="GitHub" className={styles['social-icon']} width={24} height={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;