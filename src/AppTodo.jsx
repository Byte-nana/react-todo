import { FiSun } from 'react-icons/fi';
import { FaTrashCan } from 'react-icons/fa6';
import './App.css';

export default function AppTodo() {
  return (
    <>
      <header>
        <button>
          <FiSun />
        </button>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </header>
      <main>
        <ul>
          <li>
            <input type='checkbox' name='checkbox' id='' />
            <span>Studying React</span>
            <button>
              <FaTrashCan />
            </button>
          </li>{' '}
          <li>
            <input type='checkbox' name='checkbox' id='' />
            <span>Studying React</span>
            <button>
              <FaTrashCan />
            </button>
          </li>
        </ul>
      </main>
      <footer>
        <form action=''>
          <input type='text' />
          <button>Add</button>
        </form>
      </footer>
    </>
  );
}
