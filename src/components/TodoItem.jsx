import React, { forwardRef, useState } from 'react';
import Button from './Button.jsx';
import styles from './TodoItem.module.css';
import { FaTrashCan } from 'react-icons/fa6';

const TodoItem = forwardRef(function TodoItem(
  { todoText, completed, onCheck, onDelete },
  ref
) {
  return (
    <li ref={ref} className={styles.item}>
      <label htmlFor='checkbox' className={styles.item__label}>
        <input
          type='checkbox'
          id='checkbox'
          name='checkbox'
          checked={completed}
          className={styles.item__checkbox}
          onChange={onCheck}
        />
        <span>{todoText}</span>
      </label>
      <Button variant='delete-btn' onClick={onDelete}>
        <FaTrashCan />
      </Button>
    </li>
  );
});
export default TodoItem;
