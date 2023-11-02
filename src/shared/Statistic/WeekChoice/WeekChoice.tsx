import { useEffect, useRef, useState } from 'react';
import { ArrowBottom } from '../../icons/ArrowBottom';
// import { workDay } from '../../../store/statisticSlice';
import styles from './weekchoice.module.scss';

interface IWeekChoice {
  week?: 0 | -1 | -2;
  changeWeek: (week: 0 | -1 | -2)=> void;
}

export function WeekChoice({ week = 0, changeWeek}: IWeekChoice) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const list = useRef<HTMLUListElement>(null);
  const refDropMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setHeight(list.current?.clientHeight || 0);
    } else {
      setHeight(0)
    }
  }, [open])

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node &&
        !refDropMenu.current?.contains(event.target)) {
          setOpen(false)
      }
    }

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <div className={styles.weekChoice} ref={refDropMenu}>
      <button className={styles.weekChoiceButton}
        onClick={() => setOpen(!open)}
      >
        {week === 0 &&
          <>Эта неделя</>
        }

        {week === -1 &&
          <>Прошедшая неделя</>
        }

        {week === -2 &&
          <>2 недели назад</>
        }

        <ArrowBottom />
      </button>

      <div
        className={styles.weekChoiceHideWrapper}
        style={{ height: height }}
      >
        <ul className={styles.weekChoiceList} ref={list} >
          {week !== 0 &&
            <li className={styles.weekChoiceItem}>
              <button
                className={styles.weekChoiceButton}
                onClick={() => changeWeek(0)}
              >
                Эта неделя
              </button>
            </li>
          }

          {week !== -1 &&
            <li className={styles.weekChoiceItem}>
              <button
                className={styles.weekChoiceButton}
                onClick={() => changeWeek(-1)}
              >
                Прошедшая неделя
              </button>
            </li>
          }

          {week !== -2 &&
            <li className={styles.weekChoiceItem}>
              <button
                className={styles.weekChoiceButton}
                onClick={() => changeWeek(-2)}
              >
                2 недели назад
              </button>
            </li>
          }
        </ul>

      </div>

    </div>
  );
}
