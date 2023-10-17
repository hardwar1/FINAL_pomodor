import './timer.css';

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
    </div>
  );
}
