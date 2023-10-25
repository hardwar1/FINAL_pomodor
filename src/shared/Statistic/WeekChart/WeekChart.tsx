
import { useEffect } from 'react';
import { workDay } from '../../../store/statisticSlice';
import { WeekChartItem } from './WeekChartItem';
import styles from './weekchart.module.scss';

interface IWeekChart {
  renderWeek: workDay[];
}

const weekDays = [
  'Пн',
  'вт',
  'ср',
  'чт',
  'Пт',
  'сб',
  'вс',
];

export function WeekChart({ renderWeek }: IWeekChart) {
  useEffect(()=>{
    console.log(renderWeek);
    const timesWork = renderWeek.map(day => day.workTime / 60000 );

    console.log(timesWork);
  });

  return (
    <div className={styles.weekChart}>

      <ul className={styles.weekChartBody }>
        <WeekChartItem
          value={renderWeek[0]?.workTime / 60000}
          day={weekDays[0]}
        />
        <WeekChartItem
          value={renderWeek[1]?.workTime / 60000}
          day={weekDays[1]}
        />
        <WeekChartItem
          value={renderWeek[2]?.workTime / 60000}
          day={weekDays[2]}
        />
        <WeekChartItem
          value={renderWeek[3]?.workTime / 60000}
          day={weekDays[3]}
        />
        <WeekChartItem
          value={renderWeek[4]?.workTime / 60000}
          day={weekDays[4]}
        />
        <WeekChartItem
          value={renderWeek[5]?.workTime / 60000}
          day={weekDays[5]}
        />
        <WeekChartItem
          value={renderWeek[6]?.workTime / 60000}
          day={weekDays[6]}
        />
      </ul>

      <div className={styles.weekChartTopBg}>
        <div className={styles.weekChartRelative}>
          <span className={`${styles.weekChartPersent} ${styles.weekChartPersent20}`}>
            1ч 40мин
          </span>
          <span className={`${styles.weekChartPersent} ${styles.weekChartPersent40}`}>
            1ч 40мин
          </span>
          <span className={`${styles.weekChartPersent} ${styles.weekChartPersent60}`}>
            1ч 40мин
          </span>
          <span className={`${styles.weekChartPersent} ${styles.weekChartPersent80}`}>
            1ч 40мин
          </span>
        </div>
      </div>
    </div>
  );
}
