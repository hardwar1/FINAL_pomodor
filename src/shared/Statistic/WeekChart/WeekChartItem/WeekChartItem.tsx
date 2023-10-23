import styles from './weekchartitem.module.scss';

interface IWeekChartItem {
  day: string;
  active?: string;
  value: number;
}

export function WeekChartItem({ day, active, value }: IWeekChartItem) {
  return (
    <li className={styles.weekChartItem} key={(() => Math.random().toString())()}>
      <button className={styles.weekChartButton}>
        {day}
        <span
          className={styles.weekChartValue}
          style={{
            'height': value > 0 ? 'calc('+ value + '% - 51px)' : '4px',
            'backgroundColor': active ? '#DC3E22' : (value > 0 ? '#EA8A79' : '#C4C4C4'),
          }}
        ></span>
      </button>
    </li>
  );
}
