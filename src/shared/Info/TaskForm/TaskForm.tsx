
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { addTodo } from '../../../store/todoSlice';
import { Btn } from '../../Btn';
import './taskform.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/redux';

export function TaskForm() {
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  function handleSubmit(e: FormEvent<Element>) {
    e.preventDefault();
    const text = message.trim();
    if (text.length > 0) {
      dispatch(addTodo(text));
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input input"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="taskName"
        aria-label="Название задачи"
        placeholder="Название задачи"
        required
      />

      <Btn text='Добавить' type='submit' />
    </form>
  );
}
