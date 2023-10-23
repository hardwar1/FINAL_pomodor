
import { WeekChartItem } from './WeekChartItem';
import styles from './weekchart.module.scss';

interface IWeekChart {
  weekStat?: {

  };
}

const weekStatistic = [
  {
    value: 10,
    day: 'Пн',
    date: new Date(),
  },
  {
    value: 20,
    day: 'вт',
    date: new Date(),
  },
  {
    value: 30,
    day: 'ср',
    date: new Date(),
  },
  {
    value: 40,
    day: 'чт',
    date: new Date(),
  },
  {
    value: 50,
    day: 'Пт',
    date: new Date(),
  },
  {
    value: 0,
    day: 'сб',
    date: new Date(),
  },
  {
    value: 0,
    day: 'вс',
    date: new Date(),
  },
];

export function WeekChart({ weekStat }: IWeekChart) {
  return (
    <div className={styles.weekChart}>

      <ul className={styles.weekChartBody}>
        <WeekChartItem
          value={weekStatistic[0].value}
          day={weekStatistic[0].day}
        />
        <WeekChartItem
          value={weekStatistic[1].value}
          day={weekStatistic[1].day}
        />
        <WeekChartItem
          value={weekStatistic[2].value}
          day={weekStatistic[2].day}
        />
        <WeekChartItem
          value={weekStatistic[3].value}
          day={weekStatistic[3].day}
        />
        <WeekChartItem
          value={weekStatistic[4].value}
          day={weekStatistic[4].day}
        />
        <WeekChartItem
          value={weekStatistic[5].value}
          day={weekStatistic[5].day}
        />
        <WeekChartItem
          value={weekStatistic[6].value}
          day={weekStatistic[6].day}
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
