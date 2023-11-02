
import { useCallback, useEffect, useRef, useState } from 'react';
import { DotsIcon } from '../../../../icons/Dots';
import { MinusIcon } from '../../../../icons/Minus';
import { PencilIcon } from '../../../../icons/Pencil';
import { PlusIcon } from '../../../../icons/Plus';
import { TrashIcon } from '../../../../icons/Trash';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks/redux';
import './taskmenu.scss';
import { decrement, increment, removeTodo } from '../../../../../store/todoSlice';
import { Btn } from '../../../../Btn';
import { EscapeIcon } from '../../../../icons/escapeIcon';

interface ITaskMenu {
  taskId: string;
  setChangeNameFn: () => void;
}

export function TaskMenu({ taskId, setChangeNameFn }: ITaskMenu) {
  const [active, setActive] = useState(false);
  const refDropMenu = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useAppDispatch();
  // const { todos } = useAppSelector(state => state.todoReducer);

  const handleDel = () => {
    dispatch(removeTodo(taskId))
  }

  const handleIncrement = () => {
    dispatch(increment(taskId))
  }

  const handleDecrement = () => {
    dispatch(decrement(taskId));
  }

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node &&
        !refDropMenu.current?.contains(event.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <div className="task-menu" ref={refDropMenu}>
      <button
        className="task-menu__open-btn"
        aria-label='меню задачи'
        onClick={() => setShowMenu(!showMenu)}
      >
        <DotsIcon />
      </button>

      {showMenu && <>
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
              <button className="task-menu__button" onClick={() => setActive(!active)}>
                <TrashIcon /> Удалить
              </button>
            </li>
          </ul>
        </div>

        <div className={`warning ${active ? 'active' : ''}`} onClick={() => setActive(false)}>
          <div className="warning__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="warning__closed-btn"
              aria-label="закрыть окошко"
              onClick={() => setActive(false)}
            >
              <EscapeIcon />
            </button>

            <h3 className="warning__title">
              Удалить задачу?
            </h3>

            <Btn text="Удалить" mode="red" onClick={handleDel} />

            <button className="warning__btn" onClick={() => setActive(false)}>
              Отмена
            </button>
          </div>
        </div>
      </>}
    </div>
  );
}
