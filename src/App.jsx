import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PaginaInicial from "./paginas/Pagina_Inicial/Pagina_Inicial";
import BoiPaiDoCampoPage from "./paginas/Boi_Pai_do_Campo/BoiPaiDoCampoPage";
import LouceirasPage from "./paginas/Louceiras/LouceirasPage";
import FogosaPage from "./paginas/Fogosa/FogosaPage";
import PatrimonioMaterialPage from "./paginas/Patrimonio_Material/PatrimonioMaterialPage";
import GalleryPage from "./paginas/Galeria/GalleryPage";
import AcervoPage from "./paginas/Acervo/AcervoPage";

function ScrollManifestationToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (
      ["/boi-pai-do-campo", "/louceiras", "/fogosa", "/patrimonio-material"].includes(pathname)
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollManifestationToTop />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/boi-pai-do-campo" element={<BoiPaiDoCampoPage />} />
        <Route path="/louceiras" element={<LouceirasPage />} />
        <Route path="/fogosa" element={<FogosaPage />} />
        <Route path="/patrimonio-material" element={<PatrimonioMaterialPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/acervo" element={<AcervoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;