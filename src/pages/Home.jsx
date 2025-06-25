import DashboardLayout from "../components/Layouts/DashboardLayout";
import ChartCard from "../components/Cards/ChartCard";
import InfoCardGroup from "../components/Cards/InfoCardGroup";
import PieChart from "../components/Charts/PieChart";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";

export default function Home() {
  const charts = (
    <>
      <ChartCard
        title="Total de alunas ativas da graduação por curso"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "graduacao/alunos_ativos_geral.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino"],
          startAngle: -50,
          marginRight: 150,
          marginLeft: 75,
          translateX: 120,
          ariaLabel:
            "Gráfico de pizza do total de alunas ativas da graduação por curso. Dados também disponíveis na tabela textual acima.",
        }}
      />

      <ChartCard
        title="Alunas ativas por ano de inscrição e curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "cc_ano_ingresso",
              folder: "/assets/data/graduacao/computacao",
              displayName: "CC",
            },
            {
              name: "si_ano_ingresso",
              folder: "/assets/data/graduacao/informacao",
              displayName: "SI",
            },
            {
              name: "ro_ano_ingresso",
              folder: "/assets/data/graduacao/computacao(ro)",
              displayName: "CC (RO)",
            },
            {
              name: "sc_ano_ingresso",
              folder: "/assets/data/graduacao/sistemas",
              displayName: "TSC",
            },
          ],
          tickRotation: -90,
          marginBottom: 65,
          legendOffsetBottom: 60,
          xMode: "anoSemestre",
          ariaLabel:
            "Gráfico de linha de alunas ativas inscritas por ano e curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas inscritas na graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "cc_inscritos_ano",
              folder: "/assets/data/graduacao/computacao",
              displayName: "CC",
            },
            {
              name: "si_inscritos_ano",
              folder: "/assets/data/graduacao/informacao",
              displayName: "SI",
            },
            {
              name: "ro_inscritos_ano",
              folder: "/assets/data/graduacao/computacao(ro)",
              displayName: "CC (RO)",
            },
            {
              name: "sc_inscritos_ano",
              folder: "/assets/data/graduacao/sistemas",
              displayName: "TSC",
            },
          ],
          ariaLabel:
            "Gráfico de linha do histórico de alunas inscritas na graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas formadas na graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "cc_formados_ano",
              folder: "/assets/data/graduacao/computacao",
              displayName: "CC",
            },
            {
              name: "si_formados_ano",
              folder: "/assets/data/graduacao/informacao",
              displayName: "SI",
            },
            {
              name: "ro_formados_ano",
              folder: "/assets/data/graduacao/computacao(ro)",
              displayName: "CC (RO)",
            },
            {
              name: "sc_formados_ano",
              folder: "/assets/data/graduacao/sistemas",
              displayName: "TSC",
            },
          ],
          ariaLabel:
            "Gráfico de linha do histórico de alunas formadas na graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas desistentes na graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "cc_desistentes_ano",
              folder: "/assets/data/graduacao/computacao",
              displayName: "CC",
            },
            {
              name: "si_desistentes_ano",
              folder: "/assets/data/graduacao/informacao",
              displayName: "SI",
            },
            {
              name: "ro_desistentes_ano",
              folder: "/assets/data/graduacao/computacao(ro)",
              displayName: "CC (RO)",
            },
            {
              name: "sc_desistentes_ano",
              folder: "/assets/data/graduacao/sistemas",
              displayName: "TSC",
            },
          ],
          ariaLabel:
            "Gráfico de linha do histórico de alunas desistentes na graduação por curso",
        }}
      />

      <ChartCard
        title="Total de alunas ativas da pós-graduação por curso"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "posgrad/alunos_ativos_geral.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino"],
          startAngle: 0,
          marginRight: 80,
          marginLeft: 80,
          ariaLabel:
            "Gráfico de pizza do total de alunas ativas da pós-graduação por curso. Dados também disponíveis na tabela textual acima.",
        }}
      />

      <ChartCard
        title="Histórico de alunas inscritas na pós-graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "mestrado_inscritos_ano",
              folder: "/assets/data/posgrad/mestrado",
              displayName: "Mestrado",
            },
            {
              name: "doutorado_inscritos_ano",
              folder: "/assets/data/posgrad/doutorado",
              displayName: "Doutorado",
            },
          ],
          tickRotation: -90,
          marginBottom: 60,
          legendOffsetBottom: 50,
          ariaLabel:
            "Gráfico de linha do histórico de alunas inscritas na graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas formadas na pós-graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "mestrado_formados_ano",
              folder: "/assets/data/posgrad/mestrado",
              displayName: "Mestrado",
            },
            {
              name: "doutorado_formados_ano",
              folder: "/assets/data/posgrad/doutorado",
              displayName: "Doutorado",
            },
          ],
          tickRotation: -90,
          marginBottom: 60,
          legendOffsetBottom: 50,
          ariaLabel:
            "Gráfico de linha do histórico de alunas formadas na graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas desistentes na pós-graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "mestrado_desistentes_ano",
              folder: "/assets/data/posgrad/mestrado",
              displayName: "Mestrado",
            },
            {
              name: "doutorado_desistentes_ano",
              folder: "/assets/data/posgrad/doutorado",
              displayName: "Doutorado",
            },
          ],
          ariaLabel:
            "Gráfico de linha do histórico de alunas desistentes na pós-graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas desligadas por rendimento na pós-graduação por curso"
        ChartComponent={LineChart}
        chartProps={{
          majors: [
            {
              name: "mestrado_rendimento_ano",
              folder: "/assets/data/posgrad/mestrado",
              displayName: "Mestrado",
            },
            {
              name: "doutorado_rendimento_ano",
              folder: "/assets/data/posgrad/doutorado",
              displayName: "Doutorado",
            },
          ],
          marginBottom: 50,
          ariaLabel:
            "Gráfico de linha do histórico de alunas desligadas por rendimento na pós-graduação por curso",
        }}
      />

      <ChartCard
        title="Alunos da pós que declararam sua formação em graduação"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/formacao_em_graduacao.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino", "Masculino"],
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras dos alunos da pós que declararam sua formação em graduação",
        }}
      />
      <ChartCard
        title="Alunos pós que declararam sua formação em mestrado"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/formacao_em_mestrado.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino", "Masculino"],
          layout: "horizontal",
          preset: "defaultHorizontal",
          ariaLabel:
            "Gráfico de barras dos alunos da pós que declararam sua formação em mestrado",
        }}
      />
    </>
  );

  const cards = (
    <>
      <InfoCardGroup
        csvPath="/assets/data/graduacao/alunos_ativos_geral.csv"
        selectedMajor="all"
        cardTitle="Total de alunos ativos da Graduação"
      />

      <InfoCardGroup
        csvPath="/assets/data/posgrad/alunos_ativos_geral.csv"
        selectedMajor="all"
        cardTitle="Total de alunos ativos da Pós-Graduação"
      />
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
