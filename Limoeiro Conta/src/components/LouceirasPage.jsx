import { Link } from "react-router-dom";
import louceiras from "../assets/louceiras.jpeg";

export default function LouceirasPage() {
  return (
    <main className="event-page">
      <div className="event-page-inner">
        <img src={louceiras} alt="Louceiras" />

        <span className="event-meta">Manifestação Cultural</span>

        <h1>Louceiras</h1>

        <p>
          As Louceiras representam uma forma viva de expressão cultural do território,
          unindo memória, trabalho manual e saberes tradicionais transmitidos entre
          gerações.
        </p>

        <p>
          A manifestação guarda marcas da rotina, dos ofícios e da relação profunda
          entre o povo e o lugar em que vive, reafirmando o valor da cultura popular
          como patrimônio de identidade e pertencimento.
        </p>

        <Link className="button button-primary" to="/">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
