import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCard from "../components/InfoCard";
import Glossary from "../components/Glossary";
import { glossaryGrad } from "../glossaries/glossaryGrad";
import { formatGlossary } from "../utils/formatGlossary";

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
          legendOffsetBt: 35,
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
          legendOffsetBt: 35,
          legendOffsetLeft: -180,
          tickTextAnchor: "end",
          marginLeft: 190,
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
          tickRotation: -90,
          tickPaddingBt: 0,
          legendOffsetBt: 51,
          tickTextAnchor: "end",
          xMode: "anoSemestre",
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
          tickRotation: -90,
          legendOffset: 50,
          tickTextAnchor: "end",
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
          tickRotation: -90,
          legendOffset: 50,
          tickTextAnchor: "end",
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
          tickRotation: -90,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos desistentes por ano em Ciência da Computação em Rio das Ostras",
        }}
      />

      <ChartCard
        title="Alunos ativos ao longo dos anos"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "graduacao/computacao(ro)/ro_ativos_historico.csv",
          xColumn: "Ano",
          valueColumns: ["Feminino", "Masculino"],
          tickRotation: -90,
          tickPaddingBt: 1,
          legendOffset: 50,
          tickTextAnchor: "end",
          ariaLabel:
            "Gráfico de barras mostrando a quantidade de alunos ativos ao longo dos anos em Ciência da Computação em Rio das Ostras",
        }}
      />
    </>
  );

  const cards = (
    <>
      <InfoCard title="Total de alunos Ativos" value={367} />
      <InfoCard title="Alunas Ativas" value={81} />
      <InfoCard title="Alunos Ativos" value={448} />
    </>
  );

  const glossary = (
    <>
      <Glossary content={formatGlossary(glossaryGrad)} />
    </>
  );

  return (
    <DashboardLayout
      title="Dashboard de Ciência da Computação em Rio das Ostras"
      cards={cards}
      charts={charts}
      glossary={glossary}
    ></DashboardLayout>
  );
}
