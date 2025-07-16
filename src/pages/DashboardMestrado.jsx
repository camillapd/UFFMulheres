import DashboardLayout from "../components/Layouts/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/Cards/InfoCardGroup";

export default function DashboardMestrado() {
  const charts = (
    <>
      <ChartCard
        title="Estudantes ativos por tipo de matrícula"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_tipo_matricula.csv",
          xColumn: "Tipo",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos no mestrado",
        }}
      />

      <ChartCard
        title="Estudantes ativos que pediram prorrogação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_prorrogacao.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes que pediram prorrogação no mestrado",
        }}
      />

      <ChartCard
        title="Estudantes que foram desligados da UFF por razão"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_desligados.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes do mestrado que foram desligados da UFF, por razão",
        }}
      />

      <ChartCard
        title="Estudantes inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes inscritos por ano no mestrado",
        }}
      />

      <ChartCard
        title="Estudantes formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes formados por ano no mestrado",
        }}
      />

      <ChartCard
        title="Estudantes desligados por rendimento por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_rendimento_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes desligados, por rendimento insuficiente, por ano no mestrado",
        }}
      />

      <ChartCard
        title="Estudantes desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes desistentes por ano no mestrado",
        }}
      />

      <ChartCard
        title="Estudantes trancados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/mestrado/mestrado_trancados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes que pediram trancamento, por ano no mestrado",
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
      cardTitle="Total de estudantes ativos"
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
