import { useState, useRef, useEffect } from 'react';
import styles from './AppTodo.module.css';
import Button from './components/Button.jsx';
import TodoItem from './components/TodoItem.jsx';
import Addform from './components/Addform.jsx';
import { FiSun } from 'react-icons/fi';

export default function AppTodo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [theme, setTheme] = useState('light');
  const lastItemRef = useRef();

  const handleAdd = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);

    requestAnimationFrame(() => {
      if (lastItemRef.current) {
        lastItemRef.current.scrollIntoView();
      }
    });
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add('light');
  }, []);
  const filterTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.completed;
    }
    if (filter === 'completed') {
      return todo.completed;
    }
    return todo;
  });

  return (
    <section className={styles.todo}>
      <header className={styles.todo__header}>
        <Button variant='theme-toggle' onClick={handleThemeToggle}>
          <FiSun />
        </Button>
        <div className={styles.header__btns}>
          <Button variant='filter-btn' onClick={() => setFilter('all')}>
            All
          </Button>
          <Button variant='filter-btn' onClick={() => setFilter('active')}>
            Active
          </Button>
          <Button variant='filter-btn' onClick={() => setFilter('completed')}>
            Completed
          </Button>
        </div>
      </header>
      <main className={styles.main}>
        <ul className={styles.main__items}>
          {filterTodos.map((todo, index) => {
            return (
              <TodoItem
                ref={index === filterTodos.length - 1 ? lastItemRef : null}
                key={todo.id}
                todoText={todo.text}
                completed={todo.completed}
                onCheck={() => handleCheck(todo.id)}
                onDelete={() => handleDelete(todo.id)}
              />
            );
          })}
        </ul>
      </main>
      <footer className={styles.footer}>
        <Addform onAdd={handleAdd} />
      </footer>
    </section>
  );
}
