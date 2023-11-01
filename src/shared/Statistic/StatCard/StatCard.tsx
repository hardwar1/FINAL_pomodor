import { Clock } from '../../icons/statistic/Clock';
import { Pause } from '../../icons/statistic/Pause';
import { Darts } from '../../icons/statistic/Darts';
import './statcard.scss';

interface IStatCard {
  mode: 'focus' | 'time-on-pause' | 'pause-count';
  value: number;
}

export function StatCard({ mode, value }: IStatCard) {

  return (
    <div className={`stat-card ${mode ? 'stat-card--' + mode : ''}`}>
      <div className="stat-card__info">
        {mode == 'focus' &&
          <h3 className="stat-card__title">Фокус</h3>
        }

        {mode == 'time-on-pause' &&
          <h3 className="stat-card__title">Время на паузе</h3>
        }

        {mode == 'pause-count' &&
          <h3 className="stat-card__title">Остановки</h3>
        }

        <span className="stat-card__number">
          {value}
          {mode == 'focus' &&
            <>%</>
          }

          {mode == 'time-on-pause' &&
            <>м</>
          }
        </span>
      </div>

      {mode == 'focus' &&
        <Darts />
      }

      {mode == 'time-on-pause' &&
        <Clock />
      }

      {mode == 'pause-count' &&
        <Pause />
      }
    </div>
  );
}
