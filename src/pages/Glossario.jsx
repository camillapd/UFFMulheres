import GlossaryCard from "../components/GlossaryCard";
import { glossaryGrad } from "../glossaries/glossaryGrad";
import { glossaryEad } from "../glossaries/glossaryEad";
import { glossaryPos } from "../glossaries/glossaryPos";
import { formatGlossary } from "../utils/formatGlossary";
import "../components/DashboardLayout.css";

export default function Glossario() {
  const glossaryCardGrad = (
    <>
      <GlossaryCard title="Graduação" content={formatGlossary(glossaryGrad)} />
    </>
  );

  const glossaryCardEad = (
    <>
      <GlossaryCard
        title="Curso a distância"
        content={formatGlossary(glossaryEad)}
      />
    </>
  );

  const glossaryCardPos = (
    <>
      <GlossaryCard
        title="Pós-Graduação"
        content={formatGlossary(glossaryPos)}
      />
    </>
  );

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <div className="header-title">
          <h2>Glossário de termos</h2>
        </div>
      </header>

      <section className="content-glossary">{glossaryCardGrad}</section>
      <section className="content-glossary">{glossaryCardEad}</section>
      <section className="content-glossary">{glossaryCardPos}</section>
    </div>
  );
}
