import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import BarChart from "../components/Charts/BarChart";
import InfoCard from "../components/InfoCard";

export default function DashboardMestrado() {
  const dados_prorrogacao = [
    { Razao: "Prorrogacao Extraordinaria", Feminino: 5, Masculino: 10 },
    { Razao: "Prorrogacao Regular", Feminino: 9, Masculino: 17 },
  ];
  const dados_matricula = [
    { Tipo: "Avulso", Feminino: 1, Masculino: 33 },
    { Tipo: "Especial", Feminino: 0, Masculino: 0 },
    { Tipo: "Regular", Feminino: 25, Masculino: 109 },
    { Tipo: "Sanduíche", Feminino: 1, Masculino: 0 },
  ];

  const charts = (
    <>
      {/* <div className="flex-item">
        <ChartCard
          title="Alunos inscritos por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado_inscritos_ano.csv",
            xColumn: "Ano",
            valueColumns: ["Feminino", "Masculino", "Total"],
            tickRotation: -90,
            legendOffset: 50,
          }}
        />
      </div> */}
      {/* <div className="flex-item">
        <ChartCard
          title="Alunos formados por ano"
          ChartComponent={BarChart}
          chartProps={{
            csvFileName: "mestrado_formados_ano.csv",
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
            csvFileName: "mestrado_rendimento_ano.csv",
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
            csvFileName: "mestrado_desistentes_ano.csv",
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
            csvFileName: "mestrado_desistentes_ano.csv",
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
            csvFileName: "mestrado_trancados_ano.csv",
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
            csvFileName: "mestrado_desligados.csv",
            xColumn: "Razao",
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
            data: dados_prorrogacao,
            xColumn: "Razao",
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
            data: dados_matricula,
            xColumn: "Tipo",
            valueColumns: ["Feminino", "Masculino"],
            groupMode: "grouped",
          }}
        />
      </div> */}
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
      curso="do Mestrado"
      cards={cards}
      charts={charts}
    ></DashboardLayout>
  );
}
