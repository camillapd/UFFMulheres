import "./SidebarHeader.css";
import logo from "../../assets/uff_logo.png";
import { Link } from "react-router-dom";

const SidebarHeader = () => {
  return (
    <div>
      <h2 className="sidebarheader-title">
        <Link to="/">
          <img src={logo} alt="UFF logo" /> Mulheres
        </Link>
      </h2>
    </div>
  );
};

export default SidebarHeader;
