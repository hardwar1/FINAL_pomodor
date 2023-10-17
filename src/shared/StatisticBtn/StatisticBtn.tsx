import { StatIcon } from '../icons/StatIcon';
import './statistic.scss';

export function StatisticBtn() {
  return (
    <button className="statisticBtn">
      <StatIcon />

      Статистика
    </button>
  );
}
