import DashboardLayout from "../components/Layouts/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/Cards/InfoCardGroup";

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
          preset: "defaultFilter",
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
          preset: "defaultFilter",
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
          layout: "horizontal",
          preset: "defaultHorizontal",
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
          preset: "rotatedAxis",
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
          preset: "rotatedAxis",
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
          preset: "rotatedAxis",
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
          preset: "rotatedAxis",
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
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos que pediram trancamento, por ano no mestrado",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath={`${
        import.meta.env.BASE_URL
      }assets/data/posgrad/alunos_ativos_geral.csv`}
      selectedMajor="Mestrado"
      cardTitle="Total de alunos ativos"
    />
  );

  return (
    <DashboardLayout
      title="Dashboard do Mestrado"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
