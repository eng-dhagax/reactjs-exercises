import { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className="flex flex-col gap-3 list-none p-0 m-0">
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;