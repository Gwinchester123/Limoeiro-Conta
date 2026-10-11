import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./paginas/Pagina_Inicial/Pagina_Inicial";
import BoiPaiDoCampoPage from "./paginas/Boi_Pai_do_Campo/BoiPaiDoCampoPage";
import LouceirasPage from "./paginas/Louceiras/LouceirasPage";
import FogosaPage from "./paginas/Fogosa/FogosaPage";
import GalleryPage from "./paginas/Galeria/GalleryPage";
import AcervoPage from "./paginas/Acervo/AcervoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/boi-pai-do-campo" element={<BoiPaiDoCampoPage />} />
        <Route path="/louceiras" element={<LouceirasPage />} />
        <Route path="/fogosa" element={<FogosaPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/acervo" element={<AcervoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;