import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/InfoCardGroup";

export default function DashboardDoutorado() {
  const charts = (
    <>
      <ChartCard
        title="Alunos ativos por tipo de matrícula"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_tipo_matricula.csv",
          xColumn: "Tipo",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos no doutorado",
        }}
      />

      <ChartCard
        title="Alunos ativos que pediram prorrogação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_prorrogacao.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos que pediram prorrogação no doutorado",
        }}
      />

      <ChartCard
        title="Alunos que foram desligados da UFF por razão"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_desligados.csv",
          xColumn: "Razão",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          desligadosPos: true,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos do doutorado que foram desligados da UFF, por razão",
        }}
      />

      <ChartCard
        title="Alunos inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos inscritos por ano no doutorado",
        }}
      />

      <ChartCard
        title="Alunos formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos formados por ano no doutorado",
        }}
      />

      <ChartCard
        title="Alunos desligados por rendimento por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_rendimento_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desligados, por rendimento insuficiente, por ano no doutorado",
        }}
      />

      <ChartCard
        title="Alunos desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano no doutorado",
        }}
      />

      <ChartCard
        title="Alunos trancados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/doutorado/doutorado_trancados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos que pediram trancamento, por ano no doutorado",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath="/assets/data/posgrad/alunos_ativos_geral.csv"
      selectedMajor="Doutorado"
      cardTitle="Total de alunos ativos"
    />
  );

  return (
    <DashboardLayout
      title="Dashboard do Doutorado"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
