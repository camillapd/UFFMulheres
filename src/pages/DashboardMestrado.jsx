import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCard from "../components/InfoCard";
import Glossario from "../components/Glossario";

export default function DashboardMestrado() {
  const charts = (
    <>
      <ChartCard
        title="Alunos inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino", "Total"],
          tickRotation: -90,
          legendOffset: 50,
        }}
      />

      <ChartCard
        title="Alunos formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffset: 50,
        }}
      />

      <ChartCard
        title="Alunos desligados por rendimento por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_rendimento_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
        }}
      />

      <ChartCard
        title="Alunos desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
        }}
      />

      <ChartCard
        title="Alunos trancados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_trancados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
        }}
      />

      <ChartCard
        title="Alunos que foram desligados da UFF por razão"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_desligados.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],

          groupMode: "grouped",
        }}
      />

      <ChartCard
        title="Alunos ativos que pediram prorrogação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_prorrogacao.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
        }}
      />

      <ChartCard
        title="Alunos ativos por tipo de matrícula"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "mestrado/mestrado_tipo_matricula.csv",
          xColumn: "Tipo",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
        }}
      />
    </>
  );

  const cards = (
    <>
      <InfoCard title="Total de alunos Ativos" value={169} />
      <InfoCard title="Alunas Ativas" value={27} />
      <InfoCard title="Alunos Ativos" value={142} />
    </>
  );

  const glossary = (
    <>
      <Glossario />
    </>
  );

  return (
    <DashboardLayout
      titulo="Dashboard do Mestrado"
      cards={cards}
      charts={charts}
      glossary={glossary}
    ></DashboardLayout>
  );
}
