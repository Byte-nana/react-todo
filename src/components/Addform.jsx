import React, { useRef, useState } from 'react';
import Button from './Button.jsx';
import styles from './Addform.module.css';

export default function Addform({ onAdd }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setText('');
      inputRef.current.focus();
      return;
    }
    onAdd(text);
    setText('');
    inputRef.current.focus();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type='text'
        id='text'
        name='text'
        value={text}
        className={styles.addInput}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor='text' className={styles.addInput__label}>
        Add Todo
      </label>
      <Button type='submit' variant='add-btn'>
        Add
      </Button>
    </form>
  );
}
