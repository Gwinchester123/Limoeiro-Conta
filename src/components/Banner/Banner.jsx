import "./Banner.css";

export default function Banner() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="eyebrow light">
          LIMOEIRO DO NORTE · CEARÁ · BRASIL
        </span>

        <h1>
          Limoeiro
          <em>Conta</em>
        </h1>

        <a className="button button-primary" href="#manifestacoes">
          Conheça as manifestações <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
