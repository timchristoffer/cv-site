import React from 'react';
import styles from './Copyright.module.css';

const Copyright = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Tim. All rights reserved.</p>
    </footer>
  );
};

export default Copyright;