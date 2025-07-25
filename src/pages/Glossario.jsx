import GlossaryCard from "../components/Cards/GlossaryCard";
import { glossaryGrad } from "../glossaries/glossaryGrad";
import { glossaryEad } from "../glossaries/glossaryEad";
import { glossaryPos } from "../glossaries/glossaryPos";
import { formatGlossary } from "../utils/formatGlossary";
import SidebarHeader from "../components/Sidebar/SidebarHeader";
import "../components/Layouts/Layout.css";

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
    <div className="content-layout">
      <div className="mobile-header">
        <SidebarHeader />
      </div>
      <header className="content-header">
        <div className="header-title">
          <h2>Glossário de termos</h2>
        </div>
      </header>

      <section>{glossaryCardGrad}</section>
      <section>{glossaryCardEad}</section>
      <section>{glossaryCardPos}</section>
    </div>
  );
}
