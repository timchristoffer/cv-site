import React from 'react';
import styles from './Header.module.css'; // Ensure you import the CSS module

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-content']}>
        <img src="/Images/header.png" alt="headerArt" />
        <h1 className={styles['filled-text']}>.NET DEVELOPER</h1>
        <h1 className={styles['outlined-text']}>.NET DEVELOPER</h1>
        <img src="/Images/06.png" alt="headerImage" />
      </div>
    </div>
  );
}

export default Header;