
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../store/hooks/redux';
import { TaskListItem } from './TaskListItem';
import './tasklist.scss';

let workTime = 25;

export function TaskList() {
  const [total, setTotal] = useState(0);
  const { todos } = useAppSelector(state => state.todoReducer);

  useEffect(() => {
    setTotal(todos.reduce((total, task) => {
      return total + task.timesCount * workTime
    }, 0))
  }, [todos]);

  return (
    <div className="task-list">
      <ul className="task-list__list">
        {todos.length > 0 && todos.map((task) => (
          <TaskListItem task={task} key={task.id || (()=> Math.random().toString())()} />
        ))}
      </ul>

      <span className="task-list__total">{total} мин</span>
    </div>
  );
}
