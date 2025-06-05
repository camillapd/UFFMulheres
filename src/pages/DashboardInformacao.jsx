import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/InfoCardGroup";

export default function DashboardInformacao() {
  const charts = (
    <>
      <ChartCard
        title="Alunos ativos por situação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_situacao.csv",
          xColumn: "Situação",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          legendOffsetBt: 35,
          legendOffsetLeft: -42,
          marginLeft: 48,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos em Sistemas de Informação por situação",
        }}
      />

      <ChartCard
        title="Alunos ativos por forma de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_forma_ingresso.csv",
          xColumn: "Forma de ingresso",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          legendOffsetLeft: -180,
          tickTextAnchor: "end",
          marginLeft: 190,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos de Sistemas de Informação por forma de ingresso",
        }}
      />

      <ChartCard
        title="Alunos ativos por ano de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_ano_ingresso.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          tickRotation: -90,
          tickPaddingBt: 0,
          legendOffsetBt: 50,
          marginBottom: 90,
          tickTextAnchor: "end",
          xMode: "anoSemestre",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos de Sistemas de Informação por ano de ingresso",
        }}
      />

      <ChartCard
        title="Alunos inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffsetBt: 50,
          marginBottom: 90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos inscritos por ano em Sistemas de Informação",
        }}
      />

      <ChartCard
        title="Alunos formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffsetBt: 50,
          marginBottom: 90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos formados por ano em Sistemas de Informação",
        }}
      />

      <ChartCard
        title="Alunos desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffsetBt: 50,
          marginBottom: 90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano em Sistemas de Informação",
        }}
      />

      <ChartCard
        title="Alunos ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/informacao/si_ativos_historico.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          tickPaddingBt: 1,
          legendOffsetBt: 55,
          marginBottom: 100,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos ao longo dos anos em Sistemas de Informação",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath="/assets/data/graduacao/alunos_ativos_geral.csv"
      selectedMajor="Sistemas de Informação"
      cardTitle="Total de alunos ativos"
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
