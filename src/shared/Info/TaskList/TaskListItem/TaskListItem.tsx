import { FormEvent, useRef, useState } from 'react';
import { TaskMenu } from './TaskMenu';
import { useAppDispatch } from '../../../../store/hooks/redux';
import { addTodo, changeTodo, setTaskId } from '../../../../store/todoSlice';

import './tasklistitem.css';


interface ITaskListItem {
  task: {
    id: string;
    text: string;
    timesCount: number;
  }
}

export function TaskListItem({ task }: ITaskListItem) {
  const [changeName, setChangeName] = useState(false);
  const [message, setMessage] = useState(task.text);
  const dispatch = useAppDispatch();
  // const inputRef = useRef<HTMLInputElement>();

  const setChangeNameFn = () => {
    setChangeName(true);
  }

  const handleSubmit = (e: FormEvent<Element>) => {
    e.preventDefault();
    const text = message.trim();
    if (text.length > 0) {
      dispatch(changeTodo({ text: text, id: task.id }));
      setChangeName(false);
    }
  }

  const pickTask = () => {
    // if ( task.timesCount <= 0) {

    // } else {
      dispatch(setTaskId(task.id));
    // }
  }

  return (
    <li className="task-list__item" key={task.id}>
      <span className="task-list__time-count">{task.timesCount}</span>
      {!changeName &&
        <span >{task.text}</span>
      }

      {changeName &&
        <form className="task-list__form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message} onChange={(e) => setMessage(e.target.value)}
            aria-label='Название задачи'
          // ref={inputRef}
          />
        </form>
      }

      <button
        className="task-list__hide-btn"
        aria-label="включить задачу"
        onClick={pickTask}
      ></button>

      <TaskMenu taskId={task.id} setChangeNameFn={setChangeNameFn} />
    </li>
  );
}
