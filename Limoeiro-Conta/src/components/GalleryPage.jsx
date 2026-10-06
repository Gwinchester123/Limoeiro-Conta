import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer/Footer";
import boiPaiDoCampo from "../assets/boi_pai_do_campo.png";
import fogosa from "../assets/fogosa.jpeg";
import louceiras from "../assets/louceiras.jpeg";
import "../styles/LimoeiroHome.css";

const filters = ["Todos", "Boi Pai do Campo", "Louceiras", "Fogosa"];

const galleryEntries = [
  { category: "Boi Pai do Campo", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 01", image: boiPaiDoCampo, count: "8 registros", link: "/boi-pai-do-campo" },
  { category: "Boi Pai do Campo", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 02", image: boiPaiDoCampo, count: "8 registros", link: "/boi-pai-do-campo" },
  { category: "Boi Pai do Campo", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 03", image: boiPaiDoCampo, count: "8 registros", link: "/boi-pai-do-campo" },
  { category: "Boi Pai do Campo", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 04", image: boiPaiDoCampo, count: "8 registros", link: "/boi-pai-do-campo" },
  { category: "Boi Pai do Campo", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 05", image: boiPaiDoCampo, count: "8 registros", link: "/boi-pai-do-campo" },
  { category: "Boi Pai do Campo", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 06", image: boiPaiDoCampo, count: "8 registros", link: "/boi-pai-do-campo" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 01", image: louceiras, count: "8 registros", link: "/louceiras" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 02", image: louceiras, count: "8 registros", link: "/louceiras" },
  { category: "Louceiras", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 03", image: louceiras, count: "8 registros", link: "/louceiras" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 04", image: louceiras, count: "8 registros", link: "/louceiras" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 05", image: louceiras, count: "8 registros", link: "/louceiras" },
  { category: "Louceiras", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 06", image: louceiras, count: "8 registros", link: "/louceiras" },
  { category: "Fogosa", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 01", image: fogosa, count: "8 registros", link: "/fogosa" },
  { category: "Fogosa", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 02", image: fogosa, count: "8 registros", link: "/fogosa" },
  { category: "Fogosa", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 03", image: fogosa, count: "8 registros", link: "/fogosa" },
  { category: "Fogosa", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 04", image: fogosa, count: "8 registros", link: "/fogosa" },
  { category: "Fogosa", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 05", image: fogosa, count: "8 registros", link: "/fogosa" },
  { category: "Fogosa", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 06", image: fogosa, count: "8 registros", link: "/fogosa" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const totalRecords = 24;
  const itemsPerPage = 6;

  const filteredEntries =
    activeFilter === "Todos"
      ? galleryEntries
      : galleryEntries.filter((entry) => entry.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const visibleEntries = filteredEntries.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="gallery-page">
      <Header />

      <main className="gallery-shell">
        <div className="gallery-header">
          <div className="gallery-heading">
            <span className="gallery-kicker">GALERIA</span>
            <h1>Imagens e vídeos da cultura local</h1>
          </div>

          <div className="gallery-total">
            <span className="gallery-total-value">{totalRecords}</span>
            <span className="gallery-total-label">registros cadastrados</span>
          </div>
        </div>

        <p className="gallery-intro">
          Explore registros organizados por manifestação cultural. Selecione um filtro
          para encontrar imagens e vídeos de cada tradição local.
        </p>

        <div className="gallery-toolbar">
          <span className="gallery-label">Filtrar por:</span>

          <div className="gallery-filters" role="tablist" aria-label="Filtros da galeria">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "filter-button active" : "filter-button"}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {visibleEntries.map((entry) => (
            <article className="gallery-card" key={`${entry.category}-${entry.meta}`}>
              <div className="gallery-card-top">
                <span className="gallery-card-tag">{entry.category}</span>
                <span className="gallery-card-count">{entry.count}</span>
              </div>

              <div className="gallery-card-thumb">
                <img src={entry.image} alt={entry.title} />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-type">{entry.type}</span>
                  <span className="gallery-card-meta">{entry.meta}</span>
                </div>
              </div>

              <div className="gallery-card-body">
                <Link className="gallery-card-link" to={entry.link}>
                  Abrir / ampliar
                </Link>
              </div>

              <div className="gallery-card-footer">
                <h3>{entry.title}</h3>
                <div className="gallery-card-line">
                  <span>{entry.category}</span>
                  <span>Data / crédito</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="gallery-pagination" aria-label="Paginação da galeria">
          <button
            type="button"
            className="page-button page-button-prev"
            aria-label="Página anterior"
            onClick={() => handlePageChange(safePage - 1)}
            disabled={safePage === 1}
          >
            ← Anterior
          </button>

          <div className="page-number-group">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                type="button"
                className={page === safePage ? "page-number active" : "page-number"}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="page-button page-button-next"
            aria-label="Próxima página"
            onClick={() => handlePageChange(safePage + 1)}
            disabled={safePage === totalPages}
          >
            Próxima →
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
