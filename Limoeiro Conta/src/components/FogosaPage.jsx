import { Link } from "react-router-dom";
import fogosa from "../assets/fogosa.jpeg";

export default function FogosaPage() {
  return (
    <main className="event-page">
      <div className="event-page-inner">
        <img src={fogosa} alt="Fogosa" />

        <span className="event-meta">Manifestação Cultural</span>

        <h1>Fogosa</h1>

        <p>
          A Fogosa é uma expressão cultural marcada pela memória coletiva, pelos
          registros de vida e pela força dos símbolos que acompanham as comunidades do
          território.
        </p>

        <p>
          Sua presença materializa narrativas, experiências e tradições que contribuem
          para a preservação da identidade cultural local, reunindo histórias e
          experiências que continuam vivas na memória do povo.
        </p>

        <Link className="button button-primary" to="/">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
