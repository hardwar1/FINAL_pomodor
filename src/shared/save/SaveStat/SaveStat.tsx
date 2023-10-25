import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/redux';

export function SaveStat() {
  const { statistic } = useAppSelector(state => state.statisticReducer);

  useEffect(() => {
    if (statistic.length > 0)
      localStorage.setItem('statistic', JSON.stringify(statistic));
  }, [statistic]);

  return (
    <></>
  );
}
