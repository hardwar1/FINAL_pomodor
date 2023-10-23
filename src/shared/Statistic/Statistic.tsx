import { LogoPomodor } from '../icons/LogoPomodor';
import { StatCard } from './StatCard';
import { WeekChart } from './WeekChart';
import { WeekChoice } from './WeekChoice';
import './statistic.scss';

export function Statistic() {
  return (
    <div className="statistic">
      <div className="statistic__head">
        <h1 className="statistic__h1 h1">
          Ваша активность
        </h1>

        <WeekChoice />
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
