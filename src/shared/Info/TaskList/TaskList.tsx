
import { DotsIcon } from '../../icons/DotsIcon';
import './tasklist.scss';


export function TaskList() {
  return (
    <div className="tasklist">
      <ul className="taskList__list">
        <li className="taskList__item">
          <span className="taskList__timeCount">1</span>
          Сверстать сайт
          <button className="taskList__menuBtn" aria-label='меню задачи'>
            <DotsIcon />
          </button>
        </li>

      </ul>
      <span className="taskList__total">50 мин</span>
    </div>
  );
}
