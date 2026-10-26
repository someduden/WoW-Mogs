import { Link } from 'react-router';

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src="/assets/homepage" alt="Homepage Picture" />
      </a>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tmog">Transmog</Link>
      </nav>
    </header>
  );
}
