import { Container } from '../Container';
import { Timer } from '../Timer';
import { Info } from '../Info';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Statistic } from '../Statistic';
import './content.scss';


export function Content() {
  return (
    <main className="main">
      <Container>
        <Routes>
          <Route path="/Tomato-timer/" element={
            <div className="main__content">
              <Info />

              <Timer />
            </div>
          }>
          </Route>

          <Route path="/Tomato-timer/statistic" element={
              <Statistic />
            } />

          <Route path="*" element={<Navigate to={'/Tomato-timer/'} replace />} />
        </Routes>
      </Container>

    </main>
  );
}
