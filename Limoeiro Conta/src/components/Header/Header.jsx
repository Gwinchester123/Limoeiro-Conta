import "./Header.css";

export default function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio">
        Limoeiro Conta
      </a>

      <nav>
        <a href="#inicio">Início</a>
        <a href="#manifestacoes">Manifestações</a>
        <a href="#galeria">Galeria</a>
        <a href="#acervo">Acervo</a>
        <a href="#sobre">Sobre</a>
      </nav>
    </header>
  );
}
