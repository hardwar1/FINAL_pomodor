import './content.scss';
import { Container } from '../Container';
import { Timer } from '../Timer';
import { Info } from '../Info';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Statistic } from '../Statistic';
import { useAppSelector } from '../../store/hooks/redux';
import { SaveStat } from '../SaveStat';

export function Content() {
  // const { statistic } = useAppSelector(state => state.statisticReducer);
  // console.log(statistic);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={
          <Container>
            <div className="main__content">
              <Info />

              <Timer />
            </div>
          </Container>
        }>
        </Route>

        <Route path="/statistic" element={
          <Container>
            <Statistic />
          </Container>
        }>
        </Route>

        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
      <SaveStat />
    </main>
  );
}
