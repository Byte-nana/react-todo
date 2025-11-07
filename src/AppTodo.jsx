import Button from './components/Button.jsx';
import TodoItem from './components/TodoItem.jsx';
import Addform from './components/Addform.jsx';
import { FiSun } from 'react-icons/fi';
import styles from './AppTodo.module.css';

export default function AppTodo() {
  return (
    <section className={styles.todo}>
      <header className={styles.todo__header}>
        <Button variant='theme-toggle'>
          <FiSun />
        </Button>
        <div className={styles.header__btns}>
          <Button variant='filter-btn'>All</Button>
          <Button variant='filter-btn'>Active</Button>
          <Button variant='filter-btn'>Completed</Button>
        </div>
      </header>
      <main className={styles.main}>
        <ul className={styles.main__items}>
          <TodoItem todoText='Studying react' />
          <TodoItem todoText='Finishing game-project' />
        </ul>
      </main>
      <footer className={styles.footer}>
        <Addform />
      </footer>
    </section>
  );
}
