import React from 'react';
import Button from './Button.jsx';
import styles from './Addform.module.css';

export default function Addform() {
  return (
    <form className={styles.form}>
      <input type='text' className={styles.addInput} />
      <label className={styles.addInput__label}>Add Todo</label>
      <Button variant='add-btn'>Add</Button>
    </form>
  );
}
