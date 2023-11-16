import { Link } from 'react-router-dom';
import { StatIcon } from '../icons/Stat';
import './statistic.scss';

export function StatisticBtn() {
  return (
    <Link to='/Tomato-timer/statistic' className="statisticBtn">
      <StatIcon />

      Статистика
    </Link>
  );
}
