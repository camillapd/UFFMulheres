export const filterLongFormat = (data, sexo) => {
  let filtered = [...data];

  if (sexo !== "Todos") {
    filtered = filtered.filter((item) =>
      sexo === "Masculino" ? item.Sexo === "M" : item.Sexo === "F"
    );
  }

  const grouped = {};
  filtered.forEach((item) => {
    const indexValue = item.index;

    if (!grouped[indexValue]) grouped[indexValue] = { index: indexValue };
    if (item.Sexo === "M") grouped[indexValue].Masculino = item.Total;
    if (item.Sexo === "F") grouped[indexValue].Feminino = item.Total;
  });

  return Object.values(grouped);
};

export const filterWideFormat = (data, sexo) => {
  if (sexo === "Todos") return data;

  return data.map((item) => {
    if (sexo === "Masculino") {
      return { ...item, Feminino: 0 };
    } else if (sexo === "Feminino") {
      return { ...item, Masculino: 0 };
    }
    return item;
  });
};
