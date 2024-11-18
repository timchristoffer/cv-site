import React from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles['portfolio-container']}>
      <div className={styles['portfolio-list']}>
        <div className={styles['portfolio-item']}>
          <Image src="/Images/heart-spiked.png" alt="portfolioArt" width={100} height={100} />
          <div className={styles['portfolio-content']}>
            <h1 className={styles['portfolio-title']}>PORTFOLIO 1</h1>
            <p className={styles['portfolio-desc']}>To style the portfolio items in a 2x2 grid with the image on the left and the title and description on the right, you can use CSS Grid and Flexbox. This will ensure a modern and sleek layout.</p>
          </div>
        </div>
        <div className={styles['portfolio-item']}>
          <Image src="/Images/heart-spiked.png" alt="portfolioArt" width={100} height={100} />
          <div className={styles['portfolio-content']}>
            <h1 className={styles['portfolio-title']}>PORTFOLIO 2</h1>
            <p className={styles['portfolio-desc']}>To style the portfolio items in a 2x2 grid with the image on the left and the title and description on the right, you can use CSS Grid and Flexbox. This will ensure a modern and sleek layout.</p>
          </div>
        </div>
        <div className={styles['portfolio-item']}>
          <Image src="/Images/heart-spiked.png" alt="portfolioArt" width={100} height={100} />
          <div className={styles['portfolio-content']}>
            <h1 className={styles['portfolio-title']}>PORTFOLIO 3</h1>
            <p className={styles['portfolio-desc']}>To style the portfolio items in a 2x2 grid with the image on the left and the title and description on the right, you can use CSS Grid and Flexbox. This will ensure a modern and sleek layout.</p>
          </div>
        </div>
        <div className={styles['portfolio-item']}>
          <Image src="/Images/heart-spiked.png" alt="portfolioArt" width={100} height={100} />
          <div className={styles['portfolio-content']}>
            <h1 className={styles['portfolio-title']}>PORTFOLIO 4</h1>
            <p className={styles['portfolio-desc']}>To style the portfolio items in a 2x2 grid with the image on the left and the title and description on the right, you can use CSS Grid and Flexbox. This will ensure a modern and sleek layout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;