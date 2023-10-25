import { useEffect, useState } from 'react';
import { Btn } from '../Btn';
import { PlusBtn } from '../PlusBtn';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { decrement, todo } from '../../store/todoSlice';
import { addPauseTime, addStopCount, addWorkTime, pushStatEndPomodor } from '../../store/statisticSlice';
import './timer.scss';

export function Timer() {
  const [stop, setStop] = useState(false);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);
  const [breakNow, setBreakNow] = useState(false);
  const [second, setSecond] = useState('00');
  const [menuts, setMenuts] = useState('01');
  const [addMinute, setAddMinute] = useState(false);
  const [emptyTime, setEmptyTime] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [timeWork, setTimeWork] = useState(0);

  const [activeStyles, setActiveStyles] = useState({
    headStyle: {}
  });

  const { todos } = useAppSelector(state => state.todoReducer);
  const { activeTaskId } = useAppSelector(state => state.todoReducer);
  const { noTodo } = useAppSelector(state => state.todoReducer);

  const dispatch = useAppDispatch();


  const [filterTodo] = todos.filter(todo => todo.id == activeTaskId);
  let thisTodo: todo =
    filterTodo?.id ? filterTodo
      : todos[0] ? todos[0] : noTodo;

  const breakTime = 1;
  const workTime = 1;

  useEffect(() => {
    if (!start || !thisTodo || pause) return;

    let menutsNum = 0;
    let isWork: boolean;

    if (Number(menuts) || Number(second)) {
      menutsNum = Number(menuts);

      if (breakNow) {
        isWork = false;
      } else {
        isWork = true;
        setIsWork(true);
      }
    } else {
      if (thisTodo.timesCount <= 0) {
        setStart(false);
        setEmptyTime(true);
        return
      } else {
        setEmptyTime(false);
      }

      menutsNum = workTime;

      if (breakNow) {
        isWork = false;
      } else {
        isWork = true;
        setIsWork(true);
      }
    }

    let secondNum = Number(second);
    setMenuts(('0' + menutsNum).slice(-2));

    if (addMinute) {
      menutsNum++;
      setMenuts(('0' + menutsNum).slice(-2));
      setAddMinute(false)
    }

    let startTime = new Date().getTime();

    let timerId = setInterval(() => {
      if (secondNum <= 0 && menutsNum <= 0) {
        if (thisTodo.id !== 'no') {
          dispatch(decrement(thisTodo.id));
        }

        if (isWork == true) {
          menutsNum = breakTime;
          setMenuts(('0' + menutsNum).slice(-2));
          isWork = false;
          setIsWork(false);
          dispatch(pushStatEndPomodor(timeWork));
          dispatch(addWorkTime(startTime));
          setTimeWork(0);
        } else {
          if (thisTodo.timesCount - 1 <= 0) setEmptyTime(true);
          clearInterval(timerId);
          setStart(false);
          setIsWork(true);
        }

      } else if (secondNum <= 0) {
        menutsNum--;
        setMenuts(('0' + menutsNum).slice(-2));
        secondNum = 5;
        setSecond('05');

      } else {
        secondNum--;
        setSecond(('0' + secondNum).slice(-2));
        if (isWork) setTimeWork(timeWork + 1);
      }
    }, 1000);

    if (pause) {
      dispatch(addWorkTime(startTime));
      clearInterval(timerId);
    };

    if (stop) {
      clearInterval(timerId);
      if (thisTodo.id !== 'no') {
        dispatch(decrement(thisTodo.id));
      }
      dispatch(addStopCount());
      // console.log(isWork);
      if (isWork) {
        dispatch(pushStatEndPomodor(timeWork));
        dispatch(addWorkTime(startTime));
      }
      if (thisTodo.timesCount - 1 <= 0) setEmptyTime(true);
      setSecond('00');
      setMenuts('00');
      setStart(false);
      setIsWork(true);
    };

    return () => clearInterval(timerId);
  }, [start, stop, addMinute, pause, breakNow]);

  const addMinuteFn = () => {
    if (start && !stop) {
      setAddMinute(true);
    }
  }

  useEffect(() => {
    if (!isWork && !stop && start) {
      setActiveStyles({
        headStyle: { 'backgroundColor': '#A8B64F' },
      })
    } else if ((isWork && !stop && start)) {
      setActiveStyles({
        headStyle: { 'backgroundColor': '#DC3E22' },
      })
    } else {
      setActiveStyles({
        headStyle: {},
      })
    }
  }, [isWork, stop, start]);

  useEffect(() => {
    let pauseTime = 0;

    if (pause) {
      pauseTime = new Date().getTime();
    } else if (pauseTime > 0) {
      dispatch(addPauseTime(pauseTime))
    }
  }, [pause])

  return (
    <div className="timer">
      <div className="timer__head" style={activeStyles.headStyle}>
        <span className="timer__text" >
          {thisTodo.text}
        </span>

        <span className="timer__text">
          Помидор {thisTodo.timesCount}
        </span>
      </div>

      <div className="timer__body">
        <div className="timer__time">
          <span className="timer__minute">{menuts}</span>:<span className="timer__second">{second}</span>
          <PlusBtn parrentClass='timer' ariaLabel='добавить' addMinute={addMinuteFn} />
        </div>

        <div className="timer__task"> Задача 1 - <b>{thisTodo.text}</b></div>

        {emptyTime &&
          <span style={{ fontSize: 28 }}>Запланированное время истекло</span>
        }

        <div className="timer__btns">
          {!start && !pause &&
            < Btn
              parrentClass='timer'
              text='Старт'
              type='button'
              onClick={() => { setStop(false), setPause(false), setStart(true), setBreakNow(false) }}
            />
          }

          {start && !pause &&
            <Btn
              parrentClass='timer'
              text='пауза'
              type='button'
              onClick={() => { setPause(true), setStart(false) }}
            />
          }

          {!start && pause &&
            <Btn
              parrentClass='timer'
              text='Продолжить'
              type='button'
              onClick={() => { setStop(false), setBreakNow(!isWork), setPause(false), setStart(true) }}
            />
          }

          {isWork && !pause &&
            <Btn
              parrentClass='timer'
              text='Стоп'
              mode='red'
              onClick={() => { setPause(false), setStart(true), setStop(true) }}
            />
          }

          {!start && isWork && pause &&
            <Btn parrentClass='timer'
              text='Сделано'

              mode='red'
              onClick={() => { setPause(false), setStart(true), setStop(true) }}
            />
          }

          {!isWork &&
            <Btn
              parrentClass='timer'
              text='Пропустить'
              mode='red'
              onClick={() => { setPause(false), setStop(true), setBreakNow(false) }}
            />
          }

        </div>
      </div>
    </div>
  );
}
