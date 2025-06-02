import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import InfoCard from "../components/InfoCard";
import PieChart from "../components/Charts/PieChart";
import BarChart from "../components/Charts/BarChart";
import RadarChart from "../components/Charts/RadarChart";

export default function Home() {
  const charts = (
    <>
      <ChartCard
        title="Total de alunas ativas da Graduação por curso"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "graduacao/total_alunas.csv",
          xColumn: "Curso",
          valueColumns: ["Total"],
        }}
      />
      <ChartCard
        title="Total de alunos ativos da Graduação por curso"
        ChartComponent={RadarChart}
        chartProps={{
          csvFileName: "graduacao/alunos_ativos_geral.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino", "Masculino"],
        }}
      />

      <ChartCard
        title="Total de alunas ativas da Pós Graduação por curso"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "posgrad/total_alunas.csv",
          xColumn: "Curso",
          valueColumns: ["Total"],
        }}
      />
      <ChartCard
        title="Alunos com formação em Graduação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/formacao_em_graduacao.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino", "Masculino"],
          layout: "horizontal",
          legendOffsetBt: 35,
          legendOffsetLeft: -220,
          tickTextAnchor: "end",
          marginLeft: 230,
        }}
      />
      <ChartCard
        title="Alunos com formação em Mestrado"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/formacao_em_mestrado.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino", "Masculino"],
        }}
      />
    </>
  );

  const cards = (
    <>
      <div>
        <InfoCard title="Total de alunos Ativos da Graduação" value={6449} />
        <InfoCard title="Alunas Ativas" value={1157} />
        <InfoCard title="Alunos Ativos" value={5292} />
      </div>
      <div>
        <InfoCard title="Total de alunos Ativos da Pós Graduação" value={232} />
        <InfoCard title="Alunas Ativas" value={43} />
        <InfoCard title="Alunos Ativos" value={189} />
      </div>
    </>
  );

  return (
    <DashboardLayout
      title="Home"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
