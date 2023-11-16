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
          <Route path="/" element={
            <div className="main__content">
              <Info />

              <Timer />
            </div>
          }>
          </Route>

          <Route path="statistic" element={
              <Statistic />
            } />

          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
      </Container>

    </main>
  );
}
