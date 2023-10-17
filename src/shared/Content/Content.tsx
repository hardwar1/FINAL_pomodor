import './content.css';
import { Container } from '../Container';
import { Timer } from '../Timer';
import { Info } from '../Info';

export function Content() {
  return (
    <main className="main">
      <Container>
        <div className="content">
          <Info />

          <Timer />
        </div>
      </Container>
    </main>
  );
}
