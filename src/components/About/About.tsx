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
        Hello! My name is Tim, and I am currently studying to become a .NET Developer with a strong passion for web development. I thoroughly enjoy building modern, intuitive, and user-friendly applications that simplify and enhance users&rsquo; everyday lives. Designing solutions that not only look great but also function seamlessly is something I take pride in. <br /> When I&rsquo;m not coding, I&rsquo;m often diving into new technologies, exploring innovative tools, and finding ways to sharpen my skills. Whether it&rsquo;s experimenting with a new framework or learning about the latest industry trends, I&rsquo;m always eager to grow as a developer. I believe that continuous learning and curiosity are key to becoming a great programmer.        </p>
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