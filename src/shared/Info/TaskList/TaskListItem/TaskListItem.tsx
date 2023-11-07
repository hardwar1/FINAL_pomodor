import { FormEvent, useState } from 'react';
import { TaskMenu } from './TaskMenu';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks/redux';
import { changeTodo, setTaskId } from '../../../../store/todoSlice';

import './tasklistitem.css';
interface ITaskListItem {
  task: {
    id: string;
    text: string;
    timesCount: number;
  }
}

export function TaskListItem({ task }: ITaskListItem) {
  const [active, setActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const [message, setMessage] = useState(task.text);
  const { startWorkTime } = useAppSelector(state => state.statisticReducer);
  const { startPauseTime } = useAppSelector(state => state.statisticReducer);

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
    if (!startWorkTime && !startPauseTime) {
      dispatch(setTaskId(task.id));

    }
    else {
      setErrorMessage(true);
      setTimeout(() => {
        setActive(true);
      }, 0);
    }
  }

  return (
    <li className="task-list__item" key={task.id}>
      <span className="task-list__time-count">
        {task.timesCount}
      </span>

      {!changeName &&
        <span >{task.text}</span>
      }

      {changeName &&
        <form className="task-list__form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message} onChange={(e) => setMessage(e.target.value)}
            aria-label='Название задачи'
          />
        </form>
      }

      <button
        className="task-list__hide-btn"
        aria-label="включить задачу"
        onClick={pickTask}
      ></button>

      <TaskMenu taskId={task.id} setChangeNameFn={setChangeNameFn} />

      {errorMessage &&
        <div
          className={`warning ${active ? 'active' : ''}`}
          onClick={() => {
            setActive(false),
              setTimeout(() => {

                setErrorMessage(false)
              }, 201);
          }}
        >
          <div className="warning__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="warning__closed-btn"
              aria-label="закрыть окошко"
              onClick={() => {
                setActive(false),
                  setTimeout(() => {

                    setErrorMessage(false)
                  }, 201);
              }}
            ></button>
              <div className='warning__title'>
                опомнись, сейчас время поработать, а не кликать !
              </div>
          </div>
        </div>

      }
    </li>
  );
}
