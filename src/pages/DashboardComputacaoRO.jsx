import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/Cards/InfoCardGroup";

export default function DashboardComputacaoRO() {
  const charts = (
    <>
      <ChartCard
        title="Alunos ativos por situação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_situacao.csv",
          xColumn: "Situação",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos em Ciência da Computação em Rio das Ostras por situação",
        }}
      />

      <ChartCard
        title="Alunos ativos por forma de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_forma_ingresso.csv",
          xColumn: "Forma de ingresso",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos de Ciência da Computação em Rio das Ostras por forma de ingresso",
        }}
      />

      <ChartCard
        title="Alunos ativos por ano de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_ano_ingresso.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          xMode: "anoSemestre",
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos de Ciência da Computação em Rio das Ostras por ano de ingresso",
        }}
      />

      <ChartCard
        title="Alunos inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos inscritos por ano em Ciência da Computação em Rio das Ostras",
        }}
      />

      <ChartCard
        title="Alunos formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos formados por ano em Ciência da Computação em Rio das Ostras",
        }}
      />

      <ChartCard
        title="Alunos desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano em Ciência da Computação em Rio das Ostras",
        }}
      />

      <ChartCard
        title="Alunos ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_ativos_historico.csv",
          xColumn: "Semestre",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          forceHorizontalOnMobile: true,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos ao longo dos anos em Ciência da Computação em Rio das Ostras",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath="/assets/data/graduacao/alunos_ativos_geral.csv"
      selectedMajor="Ciência da Computação (RO)"
      cardTitle="Total de alunos ativos"
    />
  );

  return (
    <DashboardLayout
      title="Dashboard de Ciência da Computação em Rio das Ostras"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
