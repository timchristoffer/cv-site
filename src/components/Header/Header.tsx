import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css'; // Ensure you import the CSS module

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-content']}>
        <Image src="/Images/header.png" alt="headerArt" width={100} height={100} />
        <h1 className={styles['filled-text']}>.NET DEVELOPER</h1>
        <h1 className={styles['outlined-text']}>.NET DEVELOPER</h1>
        <Image src="/Images/06.png" alt="headerImage" width={100} height={100} />
      </div>
    </div>
  );
}

export default Header;