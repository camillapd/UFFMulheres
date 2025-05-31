import "./Glossary.css";

const Glossary = ({ content }) => (
  <section className="glossary-card" aria-label="Glossário de termos">
    <h2>Glossário</h2>

    <dl>{content}</dl>
  </section>
);

export default Glossary;
