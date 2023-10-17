
import { useEffect, useState } from 'react';
import { TaskMenu } from './TaskMenu';
import './tasklist.scss';

interface ITask {
  timeCount: number;
  text: string;
}

const tasks: ITask[] = [
  {
    timeCount: 1,
    text: 'Сверстать сайт',
  },
  {
    timeCount: 2,
    text: 'Выйти на крыльцо почесать своё ...',
  },
];

export function TaskList() {
  const [taskList, setTasklist] = useState(tasks);
  const [total, setTotal] = useState(0);

  const workTime = 25;

  useEffect(() => {
    setTotal(taskList.reduce((total, task) => {
      return total + task.timeCount * workTime
    }, 0))
  }, taskList);

  return (
    <div className="task-list">
      <ul className="task-list__list">

        {taskList.map((task) => (
          <li className="task-list__item">
            <span className="task-list__time-count">{task.timeCount}</span>
            <span >{task.text}</span>

            <TaskMenu />
          </li>
        ))}

      </ul>
      <span className="task-list__total">{total} мин</span>
    </div>
  );
}
