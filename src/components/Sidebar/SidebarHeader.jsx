import "./SidebarHeader.css";
import logo from "../../assets/uff_logo.png";

const SidebarHeader = () => {
  return (
    <div>
      <h2 className="sidebarheader-title">
        <img src={logo} alt="UFF logo" /> Mulheres
      </h2>
    </div>
  );
};

export default SidebarHeader;
