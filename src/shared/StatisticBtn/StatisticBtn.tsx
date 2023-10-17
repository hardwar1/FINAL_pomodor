import { StatIcon } from '../icons/Stat';
import './statistic.scss';

export function StatisticBtn() {
  return (
    <button className="statisticBtn">
      <StatIcon />

      Статистика
    </button>
  );
}
