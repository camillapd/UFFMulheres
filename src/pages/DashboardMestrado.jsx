import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCard from "../components/InfoCard";

export default function DashboardMestrado() {
 
  const charts = (
    <>
      <div className="flex-item">
        <ChartCard
          title="Alunos inscritos por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_inscritos_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
            tickRotation: -90,
            legendOffset: 50,
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos formados por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_formados_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
            tickRotation: -90,
            legendOffset: 50,
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos desligados por insuficiência de rendimento por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_rendimento_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos desistentes por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_desistentes_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos desistentes por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_desistentes_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos que pediram trancamento por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_trancados_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos que foram desligados da UFF, entre 2022 e 2024, com razão"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_desligados.csv",
            xColumn: "Razão",
            valueColumns: ["Feminino", "Masculino"],
            groupMode: "grouped",
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos ativos que pediram prorrogação"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_prorrogacao.csv",
            xColumn: "Razão",
            valueColumns: ["Feminino", "Masculino"],
            groupMode: "grouped",
          }}
        />
      </div>
      <div className="flex-item">
        <ChartCard
          title="Alunos ativos por tipo de matrícula"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado/mestrado_tipo_matricula.csv",
            xColumn: "Tipo",
            valueColumns: ["Feminino", "Masculino"],
            groupMode: "grouped",
          }}
        />
      </div>
    </>
  );

  const cards = (
    <>
      <InfoCard title="Total de alunos Ativos" value={169} />
      <InfoCard title="Alunas Ativas" value={27} />
      <InfoCard title="Alunos Ativos" value={142} />
    </>
  );

  return (
    <DashboardLayout
      titulo="Dashboard do Mestrado"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
