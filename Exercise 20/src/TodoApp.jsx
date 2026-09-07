import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="max-w-md mx-auto mt-12 p-8 rounded-3xl bg-white shadow-xl shadow-gray-200">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          My Todo List
        </h2>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;