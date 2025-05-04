import "./SidebarFooter.css";

const SidebarFooter = () => {
  return (
    <footer className="footer">
      <p>© 2025 Universidade Federal Fluminense — Projeto de Conclusão de Curso</p>

      <div className="footer-links">
        <a
          href="https://github.com/camillapd/UFFMulheres"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação / GitHub
        </a>
      </div>

      <p className="footer-version">Versão 1.0 - Projeto Final II</p>
    </footer>
  );
};

export default SidebarFooter;
