import { Link } from "react-router-dom";
import boiPaiDoCampo from "../assets/boi_pai_do_campo.png";
import fogosa from "../assets/fogosa.jpeg";
import louceiras from "../assets/louceiras.jpeg";

export default function GalleryPage() {
  return (
    <main className="event-page">
      <div className="event-page-inner">
        <span className="event-meta">Galeria</span>
        <h1>Galeria do Acervo</h1>

        <p>
          Fotografias e registros que ajudam a preservar a memória das manifestações
          culturais de Limoeiro do Norte.
        </p>

        <div className="gallery-grid">
          <img src={boiPaiDoCampo} alt="Boi Pai do Campo" />
          <img src={louceiras} alt="Louceiras" />
          <img src={fogosa} alt="Fogosa" />
        </div>

        <Link className="button button-primary" to="/">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
