import React from 'react';
import Button from './Button.jsx';
import styles from './TodoItem.module.css';
import { FaTrashCan } from 'react-icons/fa6';

export default function TodoItem({ todoText }) {
  return (
    <li className={styles.item}>
      <label htmlFor='' className={styles.item__label}>
        <input
          type='checkbox'
          name='checkbox'
          id=''
          className={styles.item__checkbox}
        />
        <span>{todoText}</span>
      </label>
      <Button variant='delete-btn'>
        <FaTrashCan />
      </Button>
    </li>
  );
}
