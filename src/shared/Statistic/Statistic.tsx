import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks/redux';
import { LogoPomodor } from '../icons/LogoPomodor';
import { StatCard } from './StatCard';
import { WeekChart } from './WeekChart';
import { WeekChoice } from './WeekChoice';
import './statistic.scss';
import { workDay } from '../../store/statisticSlice';

const emptyDay = {
  pomodor: 0,
  workTime: 0,
  stopCount: 0,
  timeOnPause: 0,
};

export function Statistic() {
  const [week, setWeek] = useState<0 | -1 | -2 >(0);
  const [weeksStat, setWeeksStat] = useState<workDay[]>([]);
  const [nowDate, setNowDate] = useState(new Date().getTime());

  const { statistic } = useAppSelector(state => state.statisticReducer);
  // const nowMonth = new Date().getMonth();
  // const nowMonthDay = new Date().getDate();
  let nowWeekDay = new Date().getDay();

  let renderWeek: workDay[] = [];

  useEffect(() => {
    nowWeekDay += 14;
    let result: workDay[] = [];

    for (let weekDay = 1; weekDay <= 21; weekDay++) {
      const tempDate = new Date(nowDate + (weekDay - nowWeekDay) * 24 * 60 * 60 * 1000);

      if (weekDay <= nowWeekDay) {
        const tempMonth = tempDate.getMonth();
        const tempMonthDay = tempDate.getDate();

        const dayStat = statistic.filter((day) =>
          new Date(day.date).getMonth() == tempMonth &&
          new Date(day.date).getDate() == tempMonthDay
        )

        if (dayStat.length > 0) {
          result.push(...dayStat);
        } else {
          result.push({
            date: tempDate.getTime(),
            ...emptyDay
          })
        }
      } else {
        result.push({
          date: tempDate.getTime(),
          ...emptyDay
        })
      }
    }

    setWeeksStat([...result]);

  }, [statistic]);

  useEffect(() => {
    if (week == 0) {
      renderWeek = weeksStat.slice(-7);
    }
    if (week == -1) {
      renderWeek = weeksStat.slice(7, 14);
    }
    if (week == -2) {
      renderWeek = weeksStat.slice(0, 7);
    }

    // console.log(renderWeek);
  }, [weeksStat, week]);

  useEffect(() => {
    console.log(nowDate);
  }, [nowDate]);

  return (
    <div className="statistic">
      <div className="statistic__head">
        <h1 className="statistic__h1 h1">
          Ваша активность
        </h1>

        <WeekChoice changeWeek={setWeek} week={week} />
      </div>

      <div className="statistic__body">
        <div className="statistic__top">
          <div className="statistic__day-info">
            <div className="statistic__day">
              <h2 className="statistic__h2 h1">
                Понедельник
              </h2>
              <p className="statistic__day-text">
                Вы работали над задачами в течении <strong>51 минуты</strong>
              </p>
            </div>

            <div className="statistic__pomodor">
              <span className="statistic__pomodor-count">
                <LogoPomodor /> х 2
              </span>
              <span className="statistic__pomodor-text">
                2 помидора
              </span>
            </div>
          </div>

          {/* <WeekChart weekStat={weekStat}/> */}

          <WeekChart />
        </div>

        <div className="statistic__bottom">
          <StatCard mode={'focus'} />
          <StatCard mode={'time-on-pause'} />
          <StatCard mode={'pause-count'} />
        </div>
      </div>

    </div>
  );
}
