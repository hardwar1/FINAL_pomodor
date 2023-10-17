import './content.scss';
import { Container } from '../Container';
import { Timer } from '../Timer';
import { Info } from '../Info';

export function Content() {
  return (
    <main className="main">
      <Container>
        <div className="main__content">
          <Info />
            
          <Timer />
        </div>
      </Container>
    </main>
  );
}
