import './header.scss';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { StatisticBtn } from '../StatisticBtn';

export function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <Logo />

          <StatisticBtn />
        </div>
      </Container>
    </header>
  );
}
