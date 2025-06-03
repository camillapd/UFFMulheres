import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCardGroup from "../components/InfoCardGroup";
import Glossary from "../components/Glossary";
import { glossaryEad } from "../glossaries/glossaryEad";
import { formatGlossary } from "../utils/formatGlossary";

export default function DashboardSistemas() {
  const charts = (
    <>
      <ChartCard
        title="Alunos ativos por situação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_situacao.csv",
          xColumn: "Situação",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          legendOffsetBt: 35,
          legendOffsetLeft: -180,
          tickTextAnchor: "end",
          marginLeft: 190,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos em Superior de Tecnologia em Sistemas de Computação por situação",
        }}
      />

      <ChartCard
        title="Alunos ativos por forma de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_forma_ingresso.csv",
          xColumn: "Forma de ingresso",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          layout: "horizontal",
          legendOffsetBt: 35,
          legendOffsetLeft: -180,
          tickTextAnchor: "end",
          marginLeft: 190,
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos de Superior de Tecnologia em Sistemas de Computação por forma de ingresso",
        }}
      />

      <ChartCard
        title="Alunos ativos por ano de ingresso"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_ano_ingresso.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "stacked",
          tickRotation: -90,
          tickPaddingBt: 0,
          legendOffsetBt: 51,
          tickTextAnchor: "end",
          xMode: "anoSemestre",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos de Superior de Tecnologia em Sistemas de Computação por ano de ingresso",
        }}
      />

      <ChartCard
        title="Alunos inscritos por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_inscritos_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffset: 50,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos inscritos por ano em Superior de Tecnologia em Sistemas de Computação",
        }}
      />

      <ChartCard
        title="Alunos formados por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_formados_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          legendOffset: 50,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos formados por ano em Superior de Tecnologia em Sistemas de Computação",
        }}
      />

      <ChartCard
        title="Alunos desistentes por ano"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_desistentes_ano.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          groupMode: "grouped",
          tickRotation: -90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano em Superior de Tecnologia em Sistemas de Computação",
        }}
      />

      <ChartCard
        title="Alunos ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/sistemas/sc_ativos_historico.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          tickPaddingBt: 1,
          legendOffset: 50,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos ao longo dos anos em Superior de Tecnologia em Sistemas de Computação",
        }}
      />
    </>
  );

  const cards = (
    <InfoCardGroup
      csvPath="/assets/data/graduacao/alunos_ativos_geral.csv"
      selectedMajor="Sistemas de Computação"
      cardTitle="Total de alunos ativos"
    />
  );

  const glossary = (
    <>
      <Glossary content={formatGlossary(glossaryEad)} />
    </>
  );

  return (
    <DashboardLayout
      title="Dashboard de Superior de Tecnologia em Sistemas de Computação"
      cards={cards}
      charts={charts}
      glossary={glossary}
    ></DashboardLayout>
  );
}
