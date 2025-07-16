import DashboardLayout from "../components/Layouts/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/Cards/InfoCardGroup";

export default function DashboardComputacao() {
  const charts = (
    <>
      <ChartCard
        title="Estudantes ativos por situação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_situacao.csv",
          xColumn: "Situação",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos em Ciência da Computação por situação",
        }}
      />

      <ChartCard
        title="Estudantes ativos por forma de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_forma_ingresso.csv",
          xColumn: "Forma de ingresso",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos de Ciência da Computação por forma de ingresso",
        }}
      />

      <ChartCard
        title="Estudantes ativos por ano de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_ano_ingresso.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          xMode: "anoSemestre",
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos de Ciência da Computação por ano de ingresso",
        }}
      />

      <ChartCard
        title="Estudantes inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos inscritos por ano em Ciência da Computação",
        }}
      />

      <ChartCard
        title="Estudantes formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos formados por ano em Ciência da Computação",
        }}
      />

      <ChartCard
        title="Estudantes desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano em Ciência da Computação",
        }}
      />

      <ChartCard
        title="Estudantes ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao/cc_ativos_historico.csv",
          xColumn: "Semestre",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          forceHorizontalOnMobile: true,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos ao longo dos anos em Ciência da Computação",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath={`${
        import.meta.env.BASE_URL
      }assets/data/graduacao/alunos_ativos_geral.csv`}
      selectedMajor="Ciência da Computação"
      cardTitle="Total de estudantes ativos"
    />
  );

  return (
    <DashboardLayout
      title="Dashboard de Ciência da Computação"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
