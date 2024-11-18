'use client';

import React, { useState } from 'react';
import styles from './Skills.module.css';
import Image from 'next/image';

const Skills = () => {
  const [showMoreFrontend, setShowMoreFrontend] = useState(false);

  const toggleMoreFrontend = () => {
    setShowMoreFrontend(!showMoreFrontend);
  };

  return (
    <div className={styles['skills-container']}>
      <div className={styles['skills-list']}>
        <div className={styles['skills-item']}>
          <Image src="/Images/heart-spiked.png" alt="Frontend Development" className={styles['skills-item-img']} width={100} height={100} />
          <div className={styles['skills-content']}>
            <h1 className={styles['skills-title']}>Frontend Development</h1>
            <div className={styles['skills-desc']}>
              <p>HTML</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '90%' }}></div></div>
              <p>CSS</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '85%' }}></div></div>
              <p>JavaScript</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '80%' }}></div></div>
              <p>React</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '75%' }}></div></div>
              <p>Next.js</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '70%' }}></div></div>
              {showMoreFrontend && (
                <>
                  <p>TypeScript</p>
                  <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '85%' }}></div></div>
                </>
              )}
              <button className={styles['toggle-button']} onClick={toggleMoreFrontend}>
                {showMoreFrontend ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
        <div className={styles['skills-item']}>
          <Image src="/Images/heart-spiked.png" alt="Backend Development" className={styles['skills-item-img']} width={100} height={100} />
          <div className={styles['skills-content']}>
            <h1 className={styles['skills-title']}>Backend Development</h1>
            <div className={styles['skills-desc']}>
              <p>Node.js</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '85%' }}></div></div>
              <p>Express</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '80%' }}></div></div>
              <p>Django</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '70%' }}></div></div>
              <p>Ruby on Rails</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '65%' }}></div></div>
            </div>
          </div>
        </div>
        <div className={styles['skills-item']}>
          <Image src="/Images/heart-spiked.png" alt="Database Management" className={styles['skills-item-img']} width={100} height={100} />
          <div className={styles['skills-content']}>
            <h1 className={styles['skills-title']}>Database Management</h1>
            <div className={styles['skills-desc']}>
              <p>MySQL</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '90%' }}></div></div>
              <p>PostgreSQL</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '85%' }}></div></div>
              <p>Prisma</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '80%' }}></div></div>
              <p>MongoDB</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '75%' }}></div></div>
            </div>
          </div>
        </div>
        <div className={styles['skills-item']}>
          <Image src="/Images/heart-spiked.png" alt="Other" className={styles['skills-item-img']} width={100} height={100} />
          <div className={styles['skills-content']}>
            <h1 className={styles['skills-title']}>Other</h1>
            <div className={styles['skills-desc']}>
              <p>Figma</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '85%' }}></div></div>
              <p>Trello</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '80%' }}></div></div>
              <p>Git</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '75%' }}></div></div>
              <p>JIRA</p>
              <div className={styles['progress-bar']}><div className={styles['progress']} style={{ width: '70%' }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;