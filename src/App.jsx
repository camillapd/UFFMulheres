import "./App.css";
import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useAccessibilityStore } from "./store/accessibilityStore";
import AccessibilityMenu from "./components/AccessibilityMenu/AccessibilityMenu";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardComputacao from "./pages/DashboardComputacao";
import DashboardInformacao from "./pages/DashboardInformacao";
import DashboardComputacaoRO from "./pages/DashboardComputacaoRO";
import DashboardSistemas from "./pages/DashboardSistemas";
import DashboardMestrado from "./pages/DashboardMestrado";
import DashboardDoutorado from "./pages/DashboardDoutorado";
import About from "./pages/About";
import Glossario from "./pages/Glossario";
import Home from "./pages/Home";

function App() {
  const { fontSize } = useAccessibilityStore();

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  return (
    <HashRouter>
      <div className="main-container">
        <Sidebar />
        <AccessibilityMenu />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/glossario" element={<Glossario />} />
            <Route path="/computacao" element={<DashboardComputacao />} />
            <Route path="/informacao" element={<DashboardInformacao />} />
            <Route path="/computacaoro" element={<DashboardComputacaoRO />} />
            <Route path="/sistemas" element={<DashboardSistemas />} />
            <Route path="/mestrado" element={<DashboardMestrado />} />
            <Route path="/doutorado" element={<DashboardDoutorado />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
