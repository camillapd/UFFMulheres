import "./AccessibilityMenu.css";
import { FaAccessibleIcon } from "react-icons/fa";
import { useAccessibilityStore } from "../../store/accessibilityStore";
import { useState } from "react";

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { increaseFont, decreaseFont, resetAccessibility } =
    useAccessibilityStore();

  return (
    <div className={`accessibility-container ${isOpen ? "open" : ""}`}>
      <button
        className="accessibility-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen
            ? "Fechar menu de acessibilidade"
            : "Abrir menu de acessibilidade"
        }
      >
        <FaAccessibleIcon />
      </button>

      <div
        className="accessibility-menu"
        role="region"
        aria-label="Menu de acessibilidade"
      >
        <button onClick={increaseFont}>Aumentar fonte</button>
        <button onClick={decreaseFont}>Diminuir fonte</button>
        <button onClick={resetAccessibility}>Resetar</button>
      </div>
    </div>
  );
};

export default AccessibilityMenu;
