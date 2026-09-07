import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-violet-500 transition-colors"
      />
      <button
        onClick={handleAdd}
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-colors"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;