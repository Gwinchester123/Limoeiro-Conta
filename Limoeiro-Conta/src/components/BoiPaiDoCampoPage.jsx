import { Link } from "react-router-dom";
import Header from "./Header";
import boiPaiDoCampo from "../assets/boi_pai_do_campo.png";

const personagens = [
  { nome: "Boi Pai do Campo", funcao: "Personagem central" },
  { nome: "Mestre da folia", funcao: "Liderança e condução" },
  { nome: "Vaqueiro", funcao: "Símbolo do campo" },
  { nome: "Coro e dançarinos", funcao: "Encenação e tradição" },
];

const registros = [
  { label: "Fotografia", title: "Boi Pai do Campo" },
  { label: "Vídeo", title: "Encenação e dança" },
  { label: "Documento", title: "Memória e tradições" },
];

export default function BoiPaiDoCampoPage() {
  return (
    <div className="manifestation-page">
      <Header />

      <main className="manifestation-shell">
        <div className="manifestation-topline">
          <span>Manifestações</span>
          <span className="manifestation-slash">/</span>
          <span>Boi Pai do Campo</span>
        </div>

        <section className="manifestation-header">
          <div className="manifestation-title-wrap">
            <span className="manifestation-kicker">Manifestações culturais</span>
            <h1>Boi Pai do Campo</h1>
          </div>

        </section>

        <div className="manifestation-image-box">
          <img src={boiPaiDoCampo} alt="Boi Pai do Campo" />
        </div>

        <section className="manifestation-row">
          <div className="manifestation-copy">
            <h2>História e origem</h2>
            <p>
              Esta manifestação relata a rica trajetória cultural do município, reunindo
              narrativas, personagens e tradições que foram transmitidas entre gerações.
            </p>
            <p>
              A partir dos registros e do corpo de saberes locais, o Boi Pai do Campo
              continua representando uma dimensão central da memória cultural popular do
              território.
            </p>
          </div>

          <aside className="manifestation-highlight">
            <span>Em destaque</span>
            <p>
              A expressão carrega simbolismos, valores e práticas coletivas que ajudam a
              fortalecer a identidade da comunidade.
            </p>
          </aside>
        </section>

        <section className="manifestation-section">
          <h2>Personagens relacionados</h2>
          <div className="manifestation-person-grid">
            {personagens.map((item) => (
              <article key={item.nome} className="manifestation-person-card">
                <div className="manifestation-person-figure" aria-hidden="true" />
                <strong>{item.nome}</strong>
                <span>{item.funcao}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="manifestation-section">
          <div className="manifestation-header-inline">
            <h2>Registros relacionados</h2>
            <Link className="manifestation-link" to="/galeria">
              Ver galeria
            </Link>
          </div>

          <div className="manifestation-record-grid">
            {registros.map((item) => (
              <article key={item.title} className="manifestation-record-card">
                <div className="manifestation-record-content">
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="manifestation-actions">
          <Link className="button button-primary" to="/">
            Voltar para a home
          </Link>
        </div>
      </main>

    </div>
  );
}
