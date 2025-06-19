import "./GlossaryCard.css";

const GlossaryCard = ({ content, title }) => (
  <section className="glossary-card" aria-label="Glossário de termos">
    <h2>{title}</h2>

    <dl>{content}</dl>
  </section>
);

export default GlossaryCard;
