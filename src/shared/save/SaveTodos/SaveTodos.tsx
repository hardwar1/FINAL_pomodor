import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/redux';

export function SaveTodos() {
  const { todos } = useAppSelector(state => state.todoReducer);

  useEffect(() => {
    if (todos.length > 0)
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <></>
  );
}
