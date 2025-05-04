import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import InfoCard from "../components/InfoCard";
import PieChart from "../components/Charts/PieChart";
import BarChart from "../components/Charts/BarChart";

export default function Home() {
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

  const dados_grad = [
    { id: "Ciência da Computação", label: "Ciência da Computação", value: 131 },
    {
      id: "Sistemas de Informação",
      label: "Sistemas de Informação",
      value: 132,
    },
    {
      id: "Ciência da Computação (RO)",
      label: "Ciência da Computação (RO)",
      value: 81,
    },
    {
      id: "Tecnologia em Sistemas de Computação",
      label: "Tecnologia em Sistemas de Computação",
      value: 813,
    },
  ];

  const charts = (
    <>
      <div className="flex-item">
        <ChartCard
          title="Total de alunas da Graduação"
          ChartComponent={PieChart}
          chartProps={{ data: dados_grad }}
        />
      </div>
    </>
  );

  return (
    <DashboardLayout
      titulo="Home"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
