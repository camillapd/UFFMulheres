import DashboardLayout from "../components/DashboardLayout";
import ChartCard from "../components/ChartCard";
import InfoCardGroup from "../components/InfoCardGroup";
import PieChart from "../components/Charts/PieChart";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import Glossary from "../components/Glossary";
import { glossaryHome } from "../glossaries/glossaryHome";
import { formatGlossary } from "../utils/formatGlossary";

export default function Home() {
  const charts = (
    <>
      <ChartCard
        title="Total de alunas ativas da Graduação por curso"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "graduacao/alunos_ativos_geral.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino"],
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
          legendOffsetBt: 55,
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
        title="Total de alunas ativas da Pós Graduação por curso"
        ChartComponent={PieChart}
        chartProps={{
          csvFileName: "posgrad/alunos_ativos_geral.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino"],
          translateX: 40,
        }}
      />

      <ChartCard
        title="Histórico de alunas inscritas na pós graduação por curso"
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
          legendOffsetBt: 50,
          ariaLabel:
            "Gráfico de linha do histórico de alunas inscritas na graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas formadas na pós graduação por curso"
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
          legendOffsetBt: 50,
          ariaLabel:
            "Gráfico de linha do histórico de alunas formadas na graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas desistentes na pós graduação por curso"
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
            "Gráfico de linha do histórico de alunas desistentes na pós graduação por curso",
        }}
      />

      <ChartCard
        title="Histórico de alunas desligadas por rendimento na pós graduação por curso"
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
          ariaLabel:
            "Gráfico de linha do histórico de alunas desligadas por rendimento na pós graduação por curso",
        }}
      />

      <ChartCard
        title="Alunos da pós que declararam sua formação em Graduação"
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
          ariaLabel:
            "Gráfico de barras dos alunos da pós que declararam sua formação em Graduação",
        }}
      />
      <ChartCard
        title="Alunos pós que declararam sua formação em Mestrado"
        ChartComponent={BarChart}
        chartProps={{
          csvFileName: "posgrad/formacao_em_mestrado.csv",
          xColumn: "Curso",
          valueColumns: ["Feminino", "Masculino"],
          ariaLabel:
            "Gráfico de barras dos alunos da pós que declararam sua formação em Mestrado",
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
        cardTitle="Total de alunos ativos da Pós Graduação"
      />
    </>
  );

  const glossary = (
    <>
      <Glossary content={formatGlossary(glossaryHome)} />
    </>
  );

  return (
    <DashboardLayout
      title="Home"
      cards={cards}
      charts={charts}
      glossary={glossary}
    ></DashboardLayout>
  );
}
