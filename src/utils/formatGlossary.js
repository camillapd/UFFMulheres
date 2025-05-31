import React from "react";

export const formatGlossary = (itens) =>
  itens.map(({ term, meaning }) => (
    <React.Fragment key={term}>
      <dt>{term}</dt>
      <dd>{meaning}</dd>
    </React.Fragment>
  ));
