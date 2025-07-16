import DashboardLayout from "../components/Layouts/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/Cards/InfoCardGroup";

export default function DashboardSistemas() {
  const charts = (
    <>
      <ChartCard
        title="Estudantes ativos por situação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_situacao.csv",
          xColumn: "Situação",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos em Superior de Tecnologia em Sistemas de Computação por situação",
        }}
      />

      <ChartCard
        title="Estudantes ativos por forma de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_forma_ingresso.csv",
          xColumn: "Forma de ingresso",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes de Superior de Tecnologia em Sistemas de Computação por forma de ingresso",
        }}
      />

      <ChartCard
        title="Estudantes ativos por ano de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_ano_ingresso.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          xMode: "anoSemestre",
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos de Superior de Tecnologia em Sistemas de Computação por ano de ingresso",
        }}
      />

      <ChartCard
        title="Estudantes inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes inscritos por ano em Superior de Tecnologia em Sistemas de Computação",
        }}
      />

      <ChartCard
        title="Estudantes formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes formados por ano em Superior de Tecnologia em Sistemas de Computação",
        }}
      />

      <ChartCard
        title="Estudantes desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          preset: "rotatedAxis",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes desistentes por ano em Superior de Tecnologia em Sistemas de Computação",
        }}
      />

      <ChartCard
        title="Estudantes ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_ativos_historico.csv",
          xColumn: "Semestre",
          valueColumns: ["Feminino", "Masculino"],
          preset: "rotatedAxis",
          forceHorizontalOnMobile: true,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de estudantes ativos ao longo dos anos em Superior de Tecnologia em Sistemas de Computação",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath={`${
        import.meta.env.BASE_URL
      }assets/data/graduacao/alunos_ativos_geral.csv`}
      selectedMajor="Sistemas de Computação"
      cardTitle="Total de estudantes ativos"
    />
  );

  return (
    <DashboardLayout
      title="Dashboard de Superior de Tecnologia em Sistemas de Computação"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
