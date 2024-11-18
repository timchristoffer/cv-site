import React from 'react';
import Image from 'next/image';
import styles from './CodeSlider.module.css'; 

const CodeSlider = () => {
  return (
    <div className={styles.logoSlider} style={{ '--width': '100px', '--height': '50px', '--quantity': '7' } as React.CSSProperties}>
      <div className={styles.logoList}>
        <div className={styles.logoItem} style={{ '--position': 1 } as React.CSSProperties}>
          <Image src="/Icons/csharp.svg" alt='C#' width={100} height={50} />
          <h1>C#</h1>
        </div>
        <div className={styles.logoItem} style={{ '--position': 2 } as React.CSSProperties}>
          <Image src="/Icons/css.svg" alt='CSS' width={100} height={50} />
          <h1>CSS</h1>
        </div>
        <div className={styles.logoItem} style={{ '--position': 3 } as React.CSSProperties}>
          <Image src="/Icons/html.svg" alt='HTML' width={100} height={50} />
          <h1>HTML</h1>
        </div>
        <div className={styles.logoItem} style={{ '--position': 4 } as React.CSSProperties}>
          <Image src="/Icons/javascript.svg" alt='JavaScript' width={100} height={50} />
          <h1>JavaScript</h1>
        </div>
        <div className={styles.logoItem} style={{ '--position': 5 } as React.CSSProperties}>
          <Image src="/Icons/nextjs.svg" alt='React' width={100} height={50} />
          <h1>React</h1>
        </div>
        <div className={styles.logoItem} style={{ '--position': 6 } as React.CSSProperties}>
          <Image src="/Icons/tailwindcss.svg" alt='Tailwind' width={100} height={50} />
          <h1>Tailwind</h1>
        </div>
        <div className={styles.logoItem} style={{ '--position': 7 } as React.CSSProperties}>
          <Image src="/Icons/typescript.svg" alt='TypeScript' width={100} height={50} />
          <h1>TypeScript</h1>
        </div>
      </div>
    </div>
  );
};

export default CodeSlider;