import "./Pagina_Inicial.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main";

export default function Pagina_Inicial() {
  return (
    <div className="site">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}
