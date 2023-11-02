
import { useEffect, useState } from 'react';
import { workDay } from '../../../store/statisticSlice';
import { WeekChartItem } from './WeekChartItem';
import { useAppSelector } from '../../../store/hooks/redux';
import styles from './weekchart.module.scss';

interface IWeekChart {
  // renderWeek: workDay[];
  handleClickThisDay: (getTime: number) => void;
  activeDay: number;
}

interface ITimesChartValue {
  hour: number;
  minute: string;
  maxValue: number;
  persent: number;
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

const calcAllTime = (num: number, maxValue: number) =>
  Math.floor((maxValue - maxValue * num) / 60);


const calcMinute = (num: number, maxValue: number) =>
  ('0' + ((maxValue - maxValue * num) % 60)).slice(-2);

export function WeekChart({ handleClickThisDay, activeDay = 0 }: IWeekChart) {
  const { renderWeek } = useAppSelector(state => state.statisticReducer);
  const [chartValues, setChartValues] = useState<ITimesChartValue[]>([])

  useEffect(() => {
    if (renderWeek.length < 1) return;
    const topTimeWork = Math.max(...renderWeek.map(day => Math.floor(day.workTime)))

    const maxValue = (Math.floor(topTimeWork / 60) + 1) * 60;

    setChartValues([
      {
        maxValue: maxValue,
        hour: calcAllTime(0.2, maxValue),
        minute: calcMinute(0.2, maxValue),
        persent: 20,
      },
      {
        maxValue: maxValue,
        hour: calcAllTime(0.4, maxValue),
        minute: calcMinute(0.4, maxValue),
        persent: 40,
      },
      {
        maxValue: maxValue,
        hour: calcAllTime(0.6, maxValue),
        minute: calcMinute(0.6, maxValue),
        persent: 60,
      },
      {
        maxValue: maxValue,
        hour: calcAllTime(0.8, maxValue),
        minute: calcMinute(0.8, maxValue),
        persent: 80,
      },
    ])
  }, [renderWeek]);

  return (
    <div className={styles.weekChart}>

      <ul className={styles.weekChartBody}>
        <WeekChartItem
          value={renderWeek[0]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[0]}
          getTime={renderWeek[0]?.date}
          handleClickThisDay={handleClickThisDay}
          active={activeDay - 1 === 0}
        />
        <WeekChartItem
          value={renderWeek[1]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[1]}
          getTime={renderWeek[1]?.date}
          active={activeDay - 1 === 1}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[2]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[2]}
          getTime={renderWeek[2]?.date}
          active={activeDay - 1 === 2}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[3]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[3]}
          getTime={renderWeek[3]?.date}
          active={activeDay - 1 === 3}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[4]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[4]}
          getTime={renderWeek[4]?.date}
          active={activeDay - 1 === 4}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[5]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[5]}
          getTime={renderWeek[5]?.date}
          active={activeDay - 1 === 5}
          handleClickThisDay={handleClickThisDay}
        />
        <WeekChartItem
          value={renderWeek[6]?.workTime * 100 / chartValues[0]?.maxValue}
          day={weekDays[6]}
          getTime={renderWeek[6]?.date}
          active={activeDay - 1 === -1}
          handleClickThisDay={handleClickThisDay}
        />
      </ul>

      <div className={styles.weekChartTopBg}>
        <div className={styles.weekChartRelative}>
          {chartValues.length > 0 && chartValues.map((chartValue) => (
            <span
              className={`${styles.weekChartPersent} ${styles['weekChartPersent' + chartValue.persent]}`}
              key={(() => Math.random())()}
            >
              {chartValue.hour > 0 &&
                chartValue.hour + 'ч'
              }

              {chartValue.minute}
              мин
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
