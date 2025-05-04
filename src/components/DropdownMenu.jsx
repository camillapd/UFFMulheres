import "./DropdownMenu.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button className="dropdown-button" onClick={() => setOpen(!open)}>
        {title}
        <FaChevronDown size={16} color="white" />
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
