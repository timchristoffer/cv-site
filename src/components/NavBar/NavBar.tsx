'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Tim.</div>
      <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact" className={styles.hireButton}>Hire me!</Link>
      </div>
      <div className={styles['menu-toggle']} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default NavBar;