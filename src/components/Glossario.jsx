import "./Glossario.css";

const Glossario = () => (
  <section className="glossary-card" aria-label="Glossário de termos">
    <h2>Glossário</h2>
    <dl>
      <dt>Aluno Ativo</dt>
      <dd>Aluno regularmente matriculado e inscrito em disciplinas.</dd>
      <dt>Aluno Trancado</dt>
      <dd>
        Alunos que pediu trancamento da matrícula por um semestre letivo ou
        obteve trancamento automático (em dado período, não se inscrever em
        disciplinas ou atividades acadêmicas dentro dos prazos)
      </dd>
      <dt>Aluno Desligado</dt>
      <dd>Aluno que não está mais devidamente matriculado na instituição.</dd>
      <dt>Aluno Desligado por Rendimento</dt>
      <dd>
        Aluno que em um período obteve CD inferior a 6,0 ou em cada um de dois
        períodos letivos consecutivos, obteve CD inferior a 7,0 ou for reprovado
        por duas vezes em disciplinas ou por duas vezes na mesma atividade
        acadêmica;.
      </dd>
      <dt>Coeficiente de Desempenho (CD)</dt>
      <dd>
        É a média dos graus finais obtidos em todas as disciplinas cursadas
        durante o período letivo, ponderados pelos créditos de cada disciplina.
      </dd>
      <dt>Alunos Desligado por Titulação</dt>
      <dd>Aluno que se formarou e obteve a titulação.</dd>
      <dt>Alunos Desligado por Prazo</dt>
      <dd>
        Aluno que deixou de cumprir qualquer atividade acadêmica nos prazos
        estipulados pelo Regimento da Pós Graduação em Computação do Instituto
        de Computação.
      </dd>
      <dt>Alunos Desistente</dt>
      <dd>
        Aluno que 
      </dd>
    </dl>
  </section>
);

export default Glossario;
