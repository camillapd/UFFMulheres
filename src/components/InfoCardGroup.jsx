import InfoCard from "./InfoCard";
import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function InfoCardGroup({
  csvPath,
  selectedMajor = "all",
  cardTitle,
}) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: ({ data }) => {
        const validRows = data.filter(
          (row) => row.Feminino != null && row.Masculino != null
        );

        if (selectedMajor === "all") {
          const totalF = validRows.reduce((acc, row) => acc + row.Feminino, 0);
          const totalM = validRows.reduce((acc, row) => acc + row.Masculino, 0);
          setDados({ feminino: totalF, masculino: totalM });
        } else {
          const major = validRows.find((row) => row.Curso === selectedMajor);
          if (major) {
            setDados({ feminino: major.Feminino, masculino: major.Masculino });
          }
        }
      },
    });
  }, [csvPath, selectedMajor]);

  if (!dados) return null;

  const total = dados.feminino + dados.masculino;

  return (
    <div>
      <InfoCard title={cardTitle} value={total} />
      <InfoCard title="Alunas Ativas" value={dados.feminino} />
      <InfoCard title="Alunos Ativos" value={dados.masculino} />
    </div>
  );
}
