import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant = 'default' }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
