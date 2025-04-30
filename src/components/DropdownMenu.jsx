import "./DropdownMenu.css";
import { useState } from "react";

const DropdownMenu = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {title} 
        {/* <i className="fas fa-chevron-down">

        </i> */}
      </button>
      {open && (
        <div className="dropdown-list">
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
