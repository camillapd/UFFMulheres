import SidebarHeader from "../components/Sidebar/SidebarHeader";
import "../components/Layouts/Layout.css";
import "../styles/pages/ContentSections.css";

export default function About() {
  return (
    <div className="content-layout content-section">
      <div className="mobile-header">
        <SidebarHeader />
      </div>
      <header className="content-header">
        <div className="header-title">
          <h2>Sobre o UFF Mulheres</h2>
        </div>
      </header>

      <section className="about-section about-intro">
        <p>
          O site UFF Mulheres tem o objetivo de analisar a participação feminina
          nos cursos de graduação e pós-graduação da área de computação na
          Universidade Federal Fluminense, e fazer comparações com a
          participação masculina no mesmo curso. Ele está organizado em três
          seções distintas: graduação e pós-graduação com sub-seções dedicadas a
          cada curso e a homepage com informações gerais de todos os cursos.
        </p>

        <p>
          Os dados de alunos ativos de todos os gráficos e cards mencionados no
          site foram coletados no semestre de 2024.2.
        </p>
      </section>

      <section className="about-section about-home">
        <h3>Sobre a Home</h3>

        <p>
          A homepage possui informações sobre o total de alunos ativos por
          graduação, pós-graduação e por sexo e possui gráficos. Da graduação os
          gráficos são: comparativo da quantidade total de alunas ativos por
          curso e de alunas ativas por ano de inscrição, comparativo de alunas
          inscritas, formadas e desistentes por curso e por ano. Da
          pós-graduação os gráficos são: comparativo da quantidade total de
          alunas ativas por programa de pós-graduação, comparativo de alunas
          inscritas, formadas, desistentes e desligadas por rendimento por curso
          e ano, e comparação de alunos por sexo e curso com instituição dos
          alunos ativos que declararam formação em graduação e mestrado.
        </p>

        <p>
          O gráfico dos alunos que declararam formação em graduação e mestrado
          são dados dos alunos ativos.
        </p>
      </section>

      <section className="about-section about-grad">
        <h3>Sobre as páginas da Graduação</h3>

        <p>
          No menu da graduação há páginas para os três cursos de graduação do
          Instituto de Computação e para Ciência da Computação em Rio das
          Ostras. Cada página possui dados sobre total de alunos ativos do
          curso, separado por sexo e gráficos. Todos os gráficos tem filtro por
          sexo e total e são sobre alunos ativos: comparativo por situação,
          forma de ingresso e ano de ingresso e sobre dados históricos dos
          alunos: comparativo de alunos inscritos, formados, desistentes e
          alunos ativos através dos anos.
        </p>

        <p>
          O dados de alunos ativos correspondem a todos os alunos ativos
          inscritos até 2024.2 (exceto no curso de Tecnologia em Sistemas de
          Computação em que vai até 2024.1). O período de tempo dos dados
          históricos variam por curso: em Ciência da Computação o período é de
          2010 a 2024 (o histórico de alunos ativos é de 2001.1 até 2024.2), em
          Sistemas de Informação o período é de 2011 a 2024,em Ciência da
          Computação em Rio das Ostras o período é de 2010 a 2024 (o histórico
          de alunos ativos é de 2008.1 até 2024.2) e em Tecnologia em Sistemas
          de Computação o período é de 2010 a 2024 (o histórico de alunos ativos
          é de 2003.2 até 2024.2).
        </p>
      </section>

      <section className="about-section about-pos">
        <h3>Sobre as páginas da Pós-Graduação</h3>

        <p>
          No menu da pós-graduação há páginas para os cursos de mestrado e
          doutorado do Instituto de Computação. Cada página possui dados sobre
          total de alunos ativos do curso, separado por sexo e gráficos. Todos
          os gráficos tem filtro por sexo e total e são sobre alunos ativos:
          comparativo por tipo de matrícula e comparativo de alunos que pediram
          prorrogação, e sobre dados históricos dos alunos: alunos desligados
          por razão de desligamento, alunos inscritos, formados, desligados por
          rendimento e trancados por ano.
        </p>

        <p>
          Os dados dos alunos ativos correspondem aos alunos ativos do semestre
          de 2022.2 2024.2. Os dados de alunos desligados correspondem ao
          período de até 2024.2 e demais dados históricos correspondem ao
          período de 2004 a 2024 para o mestrado e 2007 a 2024 para o doutorado.
          Além disso, os dados de alunos inscritos por ano não incluem
          matrículas avulsas.
        </p>
      </section>

      <section className="about-section about-source">
        <h3>Fontes de dados</h3>
        <p>
          Os dados do site foram retirados dos sitemas próprios da UFF, e
          coletados entre Outubro e Dezembro de 2024:
        </p>
        <ul>
          <li>
            <a
              href="https://analytics.uff.br/superset/dashboard/27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Painel de Indicadores da Graduação
            </a>
          </li>
          <li>
            <a
              href="https://www.ibge.gov.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAPOS - Sistema de Apoio a Pós-Graduação
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
