import { useEffect, useRef, useState } from 'react';
import { ArrowBottom } from '../../icons/ArrowBottom';
import styles from './weekchoice.module.scss';

interface IWeekChoice {
  week?: 'this week' | 'week ago' | 'two weeks ago'
}

export function WeekChoice({ week = 'this week' }: IWeekChoice) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const list = useRef<HTMLUListElement>(null);

  const HandleClick = (setWeek: string) => {
    // week = setWeek

  }

  useEffect(() => {
    if (open) {
      setHeight(list.current?.clientHeight || 0);
      console.log(list.current?.clientHeight);
    } else {
      setHeight(0)
    }
    // console.log(hideBox.current?.clientHeight);
  }, [open])

  return (
    <div className={styles.weekChoice}>
      <button className={styles.weekChoiceButton}
        onClick={() => setOpen(!open)}
      >
        {week === 'this week' &&
          <>Эта неделя</>
        }

        {week === 'week ago' &&
          <>Прошедшая неделя</>
        }

        {week === 'two weeks ago' &&
          <>2 недели назад</>
        }

        <ArrowBottom />
      </button>

      <div
        className={styles.weekChoiceHideWrapper}
        style={{ height: height }}
      >
        <ul className={styles.weekChoiceList} ref={list} >
          {week !== 'this week' &&
            <li className={styles.weekChoiceItem}>
              <button
                className={styles.weekChoiceButton}
                onClick={() => HandleClick('this week')}
              >
                Эта неделя
              </button>
            </li>
          }

          {week !== 'week ago' &&
            <li className={styles.weekChoiceItem}>
              <button
                className={styles.weekChoiceButton}
                onClick={() => HandleClick('week ago')}
              >
                Прошедшая неделя
              </button>
            </li>
          }

          {week !== 'two weeks ago' &&
            <li className={styles.weekChoiceItem}>
              <button
                className={styles.weekChoiceButton}
                onClick={() => HandleClick('two weeks ago')}
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
