const manifestations = [
  {
    title: "Boi Pai do Campo",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    description:
      "Memórias, personagens e registros de uma manifestação da cultura local.",
  },
  {
    title: "Louceiras",
    image:
      "https://images.unsplash.com/photo-1597696929736-6d13e8f0d8b4?auto=format&fit=crop&w=800&q=80",
    description:
      "Saberes manuais, histórias de vida e vínculos com o território.",
  },
  {
    title: "Fogosa",
    image:
      "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=800&q=80",
    description:
      "Relatos, imagens e registros reunidos para preservar sua memória.",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Main() {
  return (
    <main>
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

          <p>
            Um portal dedicado à preservação e divulgação das manifestações
            culturais de Limoeiro do Norte — memórias vivas do povo cearense.
          </p>

          <a className="button button-primary" href="#manifestacoes">
            Conheça as manifestações <Arrow />
          </a>
        </div>
      </section>

      <section className="manifestations section" id="manifestacoes">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MANIFESTAÇÕES CULTURAIS</span>

            <h2>Histórias que vivem no território</h2>

            <p>
              Conheça expressões culturais prioritárias reunidas pelo Limoeiro
              Conta.
            </p>
          </div>

          <a className="small-link" href="#galeria">
            Ver todas <Arrow />
          </a>
        </div>

        <div className="cards">
          {manifestations.map((item) => (
            <article className="card" key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="card-body">
                <span className="card-line"></span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a href="#acervo">
                  Conhecer manifestação <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-copy">
          <span className="eyebrow">O PROJETO</span>

          <h2>
            Sobre o <em>Limoeiro Conta</em>
          </h2>

          <p>
            O Limoeiro Conta é um portal dedicado à preservação e divulgação das
            manifestações tradicionais de Limoeiro do Norte, município
            localizado na região do Baixo Jaguaribe, no Ceará.
          </p>

          <p>
            O projeto nasce do reconhecimento de que a cultura popular é
            patrimônio vivo, construída por gerações e registrada ao garantir
            que ela continue existindo.
          </p>

          <p>
            Trata-se de um projeto acadêmico, desenvolvido com o objetivo de
            criar um espaço digital acessível onde visitantes possam conhecer as
            manifestações, suas histórias e suas expressões atuais.
          </p>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
            <span>▧</span>

            <small>IMAGEM</small>
          </div>
        </div>
      </section>

      <section className="gallery-cta section" id="galeria">
        <span className="eyebrow">GALERIA E ACERVO</span>

        <h2>Explore o acervo e a galeria</h2>

        <p>
          Fotografias, registros históricos e documentos sobre a cultura de
          Limoeiro do Norte.
        </p>

        <div className="cta-actions">
          <a className="button button-primary" href="#galeria">
            Ver Galeria <Arrow />
          </a>

          <a className="button button-outline" href="#acervo">
            Acervo Histórico <Arrow />
          </a>
        </div>
      </section>
    </main>
  );
}
