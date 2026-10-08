import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <Link className="brand" to="/">
        Limoeiro Conta
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? "nav-open" : ""}
      >
        <Link to="/" onClick={closeMenu}>Início</Link>
        <a href="/#manifestacoes" onClick={closeMenu}>Manifestações</a>
        <Link to="/galeria" onClick={closeMenu}>Galeria</Link>
        <Link to="/acervo" onClick={closeMenu}>Acervo</Link>
        <a href="/#sobre" onClick={closeMenu}>Sobre</a>
      </nav>
    </header>
  );
}
