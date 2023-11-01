
import { useEffect, useState } from 'react';
import { workDay } from '../../../store/statisticSlice';
import { WeekChartItem } from './WeekChartItem';
import styles from './weekchart.module.scss';

interface IWeekChart {
  renderWeek: workDay[];
  handleClickThisDay: (getTime: number) => void;
  activeDay: number;
}

interface ITimesChartValue {
  hour: number;
  minute: string;
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

const calcHour = (num: number, maxValue: number) =>
  Math.floor(maxValue - maxValue * num);

const calcMinute = (num: number, maxValue: number) =>
  ('0' + calcHour(num, maxValue)).slice(-2);

export function WeekChart({ renderWeek, handleClickThisDay, activeDay = 0 }: IWeekChart) {
  const chartValues: ITimesChartValue[] = []
  useEffect(() => {
    if (renderWeek.length < 1) return;
    const topTimeWork = Math.max(...renderWeek.map(day => Math.floor(day.workTime)))

    const maxValue = (Math.floor(topTimeWork / 60) + 1) * 60;

    chartValues.push( ...[
      {
        hour: calcHour(0.2, maxValue),
        minute: calcMinute(0.2, maxValue),
      },
      {
        hour: calcHour(0.4, maxValue),
        minute: calcMinute(0.4, maxValue),
      },
      {
        hour: calcHour(0.6, maxValue),
        minute: calcMinute(0.6, maxValue),
      },
      {
        hour: calcHour(0.8, maxValue),
        minute: calcMinute(0.8, maxValue),
      },
    ])
  });

  return (
    <div className={styles.weekChart}>

      <ul className={styles.weekChartBody}>
        <WeekChartItem
          value={renderWeek[0]?.workTime / 60000}
          day={weekDays[0]}
          getTime={renderWeek[0]?.date}
          handleClickThisDay={handleClickThisDay}
          active={activeDay - 1 === 0}
        />
        <WeekChartItem
          value={renderWeek[1]?.workTime / 60000}
          day={weekDays[1]}
          getTime={renderWeek[1]?.date}
          active={activeDay - 1 === 1}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[2]?.workTime / 60000}
          day={weekDays[2]}
          getTime={renderWeek[2]?.date}
          active={activeDay - 1 === 2}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[3]?.workTime / 60000}
          day={weekDays[3]}
          getTime={renderWeek[3]?.date}
          active={activeDay - 1 === 3}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[4]?.workTime / 60000}
          day={weekDays[4]}
          getTime={renderWeek[4]?.date}
          active={activeDay - 1 === 4}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[5]?.workTime / 60000}
          day={weekDays[5]}
          getTime={renderWeek[5]?.date}
          active={activeDay - 1 === 5}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[6]?.workTime / 60000}
          day={weekDays[6]}
          getTime={renderWeek[6]?.date}
          active={activeDay - 1 === -1}
          handleClickThisDay={handleClickThisDay}
        />
      </ul>

      <div className={styles.weekChartTopBg}>
        <div className={styles.weekChartRelative}>
          <span className={`${styles.weekChartPersent} ${styles.weekChartPersent20}`}>
            {chartValues[0]?.hour > 0 &&
              chartValues[0].hour + 'ч'
            }

            {chartValues[0]?.minute}
            мин
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
