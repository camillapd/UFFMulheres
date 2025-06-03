import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/InfoCardGroup";
import Glossary from "../components/Glossary";
import { glossaryPos } from "../glossaries/glossaryPos";
import { formatGlossary } from "../utils/formatGlossary";

export default function DashboardMestrado() {
  const charts = (
    <>
      <ChartCard
        title="Alunos ativos por tipo de matrícula"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_tipo_matricula.csv",
          xColumn: "Tipo",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          legendOffsetBt: 35,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos no mestrado",
        }}
      />

      <ChartCard
        title="Alunos ativos que pediram prorrogação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_prorrogacao.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          legendOffsetBt: 35,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos que pediram prorrogação no mestrado",
        }}
      />

      <ChartCard
        title="Alunos que foram desligados da UFF por razão"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_desligados.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          legendOffsetBt: 35,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos do mestrado que foram desligados da UFF, por razão",
        }}
      />

      <ChartCard
        title="Alunos inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffset: 50,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos inscritos por ano no mestrado",
        }}
      />

      <ChartCard
        title="Alunos formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffset: 50,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos formados por ano no mestrado",
        }}
      />

      <ChartCard
        title="Alunos desligados por rendimento por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_rendimento_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desligados, por rendimento insuficiente, por ano no mestrado",
        }}
      />

      <ChartCard
        title="Alunos desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano no mestrado",
        }}
      />

      <ChartCard
        title="Alunos trancados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_trancados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos que pediram trancamento, por ano no mestrado",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath="/assets/data/posgrad/alunos_ativos_geral.csv"
      selectedMajor="Mestrado"
      cardTitle="Total de alunos ativos"
    />
  );

  const glossary = (
    <>
      <Glossary content={formatGlossary(glossaryPos)} />
    </>
  );

  return (
    <DashboardLayout
      title="Dashboard do Mestrado"
      cards={cards}
      charts={charts}
      glossary={glossary}
    ></DashboardLayout>
  );
}
