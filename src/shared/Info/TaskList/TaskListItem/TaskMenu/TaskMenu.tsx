
import { useCallback, useEffect, useState } from 'react';
import { DotsIcon } from '../../../../icons/Dots';
import { MinusIcon } from '../../../../icons/Minus';
import { PencilIcon } from '../../../../icons/Pencil';
import { PlusIcon } from '../../../../icons/Plus';
import { TrashIcon } from '../../../../icons/Trash';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks/redux';
import './taskmenu.scss';
import { decrement, increment, removeTodo } from '../../../../../store/todoSlice';

interface ITaskMenu {
  taskId: string;
  setChangeNameFn: ()=> void;
}

export function TaskMenu({ taskId, setChangeNameFn }: ITaskMenu) {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector(state => state.todoReducer);

  const handleDel = () => {
    dispatch(removeTodo(taskId))
  }

  const handleIncrement = () => {
    dispatch(increment(taskId))
  }

  const handleDecrement = () => {
    dispatch(decrement(taskId));
  }

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
              <button className="task-menu__button" onClick={handleIncrement}>
                <PlusIcon /> Увеличить
              </button>
            </li>

            <li className="task-menu__item">
              <button className="task-menu__button" onClick={handleDecrement}>
                <MinusIcon /> Уменьшить
              </button>
            </li>

            <li className="task-menu__item">
              <button className="task-menu__button" onClick={setChangeNameFn}>
                <PencilIcon /> Редактировать 
              </button>
            </li>

            <li className="task-menu__item">
              <button className="task-menu__button" onClick={handleDel}>
                <TrashIcon /> Удалить
              </button>
            </li>
          </ul>
        </div>
      }
    </div>
  );
}
