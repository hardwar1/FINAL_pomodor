import { Btn } from '../Btn';
import { PlusBtn } from '../PlusBtn';
import './timer.scss';

export function Timer() {
  return (
    <div className="timer">
      <div className="timer__head">
        <span className="timer__text">
          Сверстать сайт
        </span>

        <span className="timer__text">
          Помидор 1
          <span className="timer__count">
            1
          </span>
        </span>
      </div>

      <div className="timer__body">
        <div className="timer__time">
          <span className="timer__minute">25</span>:<span className="timer__second">00</span>
          <PlusBtn parrentClass='timer' ariaLabel='добавить'/>
        </div>

        <div className="timer__task"> Задача 1 - <b>Сверстать сайт</b></div>

        <div className="timer__btns">
          <Btn
            parrentClass='timer'
            text='Старт'
            type='button'
          />

          <Btn
            parrentClass='timer'
            text='Стоп'
            mode='gray'
          />
        </div>

      </div>
    </div>
  );
}
