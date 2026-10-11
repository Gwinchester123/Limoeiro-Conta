import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="acervo">
      <div>
        <strong>Limoeiro Conta</strong>

        <p>
          Cultura e memória de Limoeiro do Norte reunidas em um portal feito
          para conhecer, preservar e compartilhar.
        </p>
      </div>

      <div>
        <span className="footer-title">ATALHOS</span>

        <p>Manifestações · Galeria · Acervo · Sobre</p>
      </div>

      <div>
        <span className="footer-title">CONTATO E REDES SOCIAIS</span>

        <p>
          [E-mail do projeto]
          <br />
          [Instagram] · [YouTube] · [Facebook]
        </p>
      </div>

      <div className="footer-bottom">
        <span>© Limoeiro Conta · projeto de portal cultural</span>

        <span>Limoeiro do Norte · Ceará</span>
      </div>
    </footer>
  );
}
