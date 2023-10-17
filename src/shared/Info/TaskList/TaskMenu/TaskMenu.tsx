
import { useCallback, useState } from 'react';
import { DotsIcon } from '../../../icons/Dots';
import { MinusIcon } from '../../../icons/Minus';
import { PencilIcon } from '../../../icons/Pencil';
import { PlusIcon } from '../../../icons/Plus';
import { TrashIcon } from '../../../icons/Trash';
import './taskmenu.scss';

export function TaskMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="task-menu">

      <button
        className="task-menu__open-btn"
        aria-label='меню задачи'
        onClick={() => setShowMenu(!showMenu)}
      >
        <DotsIcon />
      </button>

      {showMenu &&
        <div className="task-menu__hide-box">
          <ul className="task-menu__list">
            <li className="task-menu__item">
              <button className="task-menu__button">
                <PlusIcon /> Увеличить
              </button>
            </li>

            <li className="task-menu__item">
              <button className="task-menu__button">
                <MinusIcon /> Уменьшить
              </button>
            </li>

            <li className="task-menu__item">
              <button className="task-menu__button">
                <PencilIcon /> Редактировать
              </button>
            </li>

            <li className="task-menu__item">
              <button className="task-menu__button">
                <TrashIcon /> Удалить
              </button>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}
