import { BrowserRouter, Routes, Route } from "react-router-dom";
import LimoeiroHome from "./components/LimoeiroHome";
import BoiPaiDoCampoPage from "./components/BoiPaiDoCampoPage";
import LouceirasPage from "./components/LouceirasPage";
import FogosaPage from "./components/FogosaPage";
import GalleryPage from "./components/GalleryPage";
import AcervoPage from "./components/AcervoPage";
import EventosPage from "./components/EventosPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LimoeiroHome />} />
        <Route path="/boi-pai-do-campo" element={<BoiPaiDoCampoPage />} />
        <Route path="/louceiras" element={<LouceirasPage />} />
        <Route path="/fogosa" element={<FogosaPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/acervo" element={<AcervoPage />} />
        <Route path="/eventos" element={<EventosPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;