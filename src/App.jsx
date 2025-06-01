import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardComputacao from "./pages/DashboardComputacao";
import DashboardInformacao from "./pages/DashboardInformacao";
import DashboardMestrado from "./pages/DashboardMestrado";
import DashboardDoutorado from "./pages/DashboardDoutorado";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/computacao" element={<DashboardComputacao />} />
            <Route path="/informacao" element={<DashboardInformacao />} />
            <Route path="/mestrado" element={<DashboardMestrado />} />
            <Route path="/doutorado" element={<DashboardDoutorado />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
