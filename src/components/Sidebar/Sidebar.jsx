import "./Sidebar.css";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import DropdownMenu from "../DropdownMenu";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const cursosGraduacao = [
    <Link to="/computacao">Ciência da Computação (Niterói)</Link>,
    <Link to="/informacao">Sistemas de Informação (Niterói)</Link>,
    <Link to="/computacaoro">Ciência da Computação (Rio das Ostras)</Link>,
    <Link to="/sistemas">Tecnologia em Sistemas de Computação (Niterói)</Link>,
  ];

  const cursosPos = [
    <Link to="/mestrado">Mestrado (IC-UFF)</Link>,
    <Link to="/doutorado">Doutorado (IC-UFF)</Link>,
  ];

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : ""}`}
      >
        ☰
      </button>
      <div
        className={`sidebar-container responsive-sidebar ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="sidebar-header-notmobile">
          <SidebarHeader />
        </div>
        <div className="sidebar-menus sidebar">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/glossario")}>Glossário</button>
          <DropdownMenu title="Graduação" items={cursosGraduacao} />
          <DropdownMenu title="Pós-Graduação" items={cursosPos} />
        </div>
        <SidebarFooter />
      </div>
    </>
  );
};

export default Sidebar;
