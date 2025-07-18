import DashboardLayout from "../components/Layouts/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/Cards/InfoCardGroup";

export default function DashboardInformacao() {
  const charts = (
    <>
      <ChartCard
        title="Estudantes ativos por situação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_situacao.csv",
          xColumn: "Situação",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "defaultFilter",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos em Sistemas de Informação por situação",
        }}
      />

      <ChartCard
        title="Estudantes ativos por forma de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_forma_ingresso.csv",
          xColumn: "Forma de ingresso",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes de Sistemas de Informação por forma de ingresso",
        }}
      />

      <ChartCard
        title="Estudantes ativos por ano de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_ano_ingresso.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          xMode: "anoSemestre",
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos de Sistemas de Informação por ano de ingresso",
        }}
      />

      <ChartCard
        title="Estudantes inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes inscritos por ano em Sistemas de Informação",
        }}
      />

      <ChartCard
        title="Estudantes formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes formados por ano em Sistemas de Informação",
        }}
      />

      <ChartCard
        title="Estudantes desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes desistentes por ano em Sistemas de Informação",
        }}
      />

      <ChartCard
        title="Estudantes ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_ativos_historico.csv",
          xColumn: "Semestre",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          forceHorizontalOnMobile: true,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos ao longo dos anos em Sistemas de Informação",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath={`${
        import.meta.env.BASE_URL
      }assets/data/graduacao/alunos_ativos_geral.csv`}
      selectedMajor="Sistemas de Informação"
      cardTitle="Total de estudantes ativos"
    />
  );

  return (
    <DashboardLayout
      title="Dashboard de Sistemas de Informação"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
