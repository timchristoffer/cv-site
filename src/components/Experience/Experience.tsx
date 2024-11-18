import React from 'react';
import styles from './Experience.module.css'; // Ensure you import the CSS module

const Experience = () => {
  return (
    <div className={styles['exp-container']}>
      <div className={styles['exp-list']}>
        <div className={styles['exp-item']}>Card 1</div>
        <div className={styles['exp-item']}>Card 2</div>
        <div className={styles['exp-item']}>Card 3</div>
        <div className={styles['exp-item']}>Card 4</div>
        <div className={styles['exp-item']}>Card 5</div>
      </div>
      <div className={styles['exp-text-container']}>
        <div className={styles['exp-text']}>See more</div>
      </div>
    </div>
  );
}

export default Experience;