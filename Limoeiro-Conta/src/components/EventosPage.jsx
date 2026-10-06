import { Link } from "react-router-dom";

export default function EventosPage() {
  return (
    <main className="event-page">
      <div className="event-page-inner">
        <span className="event-meta">Eventos</span>
        <h1>Eventos e atividades culturais</h1>

        <p>
          Esta página foi criada para centralizar os principais eventos e encontros
          ligados às manifestações culturais de Limoeiro do Norte, com espaço para
          futuras inclusões e atualizações.
        </p>

        <p>
          Aqui será possível registrar datas, locais, descrições e informações
          relevantes sobre celebrações, apresentações, reuniões e atividades de
          preservação cultural.
        </p>

        <div className="event-list">
          <article className="event-card">
            <span className="event-card-date">Em breve</span>
            <h2>Evento 01</h2>
            <p>Adicionar título, data, local e descrição do próximo evento.</p>
          </article>

          <article className="event-card">
            <span className="event-card-date">Em breve</span>
            <h2>Evento 02</h2>
            <p>Adicionar título, data, local e descrição do próximo evento.</p>
          </article>

          <article className="event-card">
            <span className="event-card-date">Em breve</span>
            <h2>Evento 03</h2>
            <p>Adicionar título, data, local e descrição do próximo evento.</p>
          </article>
        </div>

        <Link className="button button-primary" to="/">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
