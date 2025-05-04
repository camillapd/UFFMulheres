import "./Sidebar.css";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import DropdownMenu from "../DropdownMenu";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const cursosGraduacao = [
    <Link to="">Ciência da Computação</Link>,
    <Link to="">Sistemas de Informação</Link>,
    <Link to="">Ciência da Computação (Rio das Ostras)</Link>,
    <Link to="">Tecnologia em Sistemas de Computação</Link>,
  ];
  const cursosPos = [
    <Link to="/mestrado">Mestrado</Link>,
    <Link to="/doutorado">Doutorado</Link>,
  ];
  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <SidebarHeader />
      <div className="sidebar-menus sidebar">
        <button onClick={() => navigate("/")}>Home</button>
        <DropdownMenu title="Graduação" items={cursosGraduacao} />
        <DropdownMenu title="Pós Graduação" items={cursosPos} />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
