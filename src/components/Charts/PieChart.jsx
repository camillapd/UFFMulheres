import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ csvFileName, xColumn, valueColumns, data: propData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (propData) {
      setData(propData);
    } else if (csvFileName) {
      const csvPath = `/assets/data/${csvFileName}`;
      Papa.parse(csvPath, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const parsed = result.data;
          const formatted = valueColumns
            .map((col) => {
              return parsed.reduce((acc, item) => {
                const id = item[xColumn];
                const value = Number(item[col]);
                if (!isNaN(value)) {
                  acc.push({ id: `${id} (${col})`, value });
                }
                return acc;
              }, []);
            })
            .flat();

          setData(formatted);
        },
      });
    }
  }, [propData, csvFileName, xColumn, valueColumns]);

  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      colors={{ scheme: "nivo" }}
      animate={true}
      motionConfig="gentle"
    />
  );
};

export default PieChart;
