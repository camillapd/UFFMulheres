import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import InfoCard from "../components/InfoCard";
import PieChart from "../components/Charts/PieChart";
import BarChart from "../components/Charts/BarChart";

export default function Home() {
  const charts = (
    <>
      <ChartCard
        title="Total de alunas da Graduação"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "graduacao/total_alunas.csv",
          xColumn: "Curso",
          valueColumns: ["Total"],
        }}
      />
    </>
  );

  const cards = (
    <>
      <InfoCard title="Total de alunos Ativos da Graduação" value={6449} />
      <InfoCard title="Alunas Ativas" value={1157} />
      <InfoCard title="Alunos Ativos" value={5292} />

      <InfoCard title="Total de alunos Ativos da Pós Graduação" value={232} />
      <InfoCard title="Alunas Ativas" value={43} />
      <InfoCard title="Alunos Ativos" value={189} />
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
