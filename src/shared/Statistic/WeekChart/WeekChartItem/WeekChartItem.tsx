import { useEffect, useState } from 'react';
import styles from './weekchartitem.module.scss';

interface IWeekChartItem {
  day: string;
  active?: boolean;
  value: number;
  getTime: number;
  handleClickThisDay: (N: number) => void;
}

export function WeekChartItem({ day, active, value, getTime, handleClickThisDay }: IWeekChartItem) {
  
  return (
    <li className={styles.weekChartItem} key={(() => Math.random().toString())()}>
      <button
        className={styles.weekChartButton}
        onClick={() => handleClickThisDay(getTime)}
        style={{
          'color': active ? '#DC3E22'  : '#999',
        }}
      >
        {day}
        <span
          className={styles.weekChartValue}
          style={{
            'height': value > 0 ? 'calc(' + value + '% - 51px)' : '4px',
            'backgroundColor': active && value > 0 ? '#DC3E22' : (value > 0 ? '#EA8A79' : '#C4C4C4'),
          }}
        ></span>
      </button>
    </li>
  );
}
