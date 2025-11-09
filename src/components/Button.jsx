import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant = 'default', onClick }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
