import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="topbar">
      <Link className="brand" to="/">
        Limoeiro Conta
      </Link>

      <nav>
        <Link to="/">Início</Link>
        <a href="/#manifestacoes">Manifestações</a>
        <Link to="/galeria">Galeria</Link>
        <Link to="/acervo">Acervo</Link>
        <Link to="/eventos">Eventos</Link>
        <a href="/#sobre">Sobre</a>
      </nav>
    </header>
  );
}
