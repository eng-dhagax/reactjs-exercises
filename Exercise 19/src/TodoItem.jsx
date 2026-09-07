import { useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
      />
      <span
        className={`${styles.text} ${todo.completed ? styles.completed : ''}`}
      >
        {todo.text}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch({ type: 'delete', payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;