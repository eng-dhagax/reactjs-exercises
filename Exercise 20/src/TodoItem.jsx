import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="group flex items-center px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
        className="w-5 h-5 mr-3 accent-violet-600 cursor-pointer shrink-0"
      />
      <span
        className={`flex-1 text-sm ${
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch({ type: 'delete', payload: todo.id })}
        className="text-rose-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;