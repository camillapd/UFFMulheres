import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsivePie } from "@nivo/pie";

const PieChart = ({
  csvFileName,
  xColumn,
  valueColumns,
  data: propData,
  translateY = 170,
  translateX = 100,
  marginBottom = 40,
  startAngle,
}) => {
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
                  acc.push({ id: `${id}`, value });
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
      margin={{ top: 30, right: 100, bottom: marginBottom, left: 20 }}
      startAngle={startAngle}
      innerRadius={0.5}
      padAngle={1.5}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsTextOffset={0}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsDiagonalLength={10}
      arcLinkLabelsStraightLength={16}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 3]] }}
      colors={{ scheme: "set2" }}
      animate={true}
      motionConfig="gentle"
      legends={[
        {
          anchor: "right",
          direction: "column",
          translateY: translateY,
          translateX: translateX,
          itemWidth: 100,
          itemHeight: 20,
          symbolShape: "circle",
          itemDirection: "right-to-left",
        },
      ]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(128,128,128,0.3)",
          size: 6,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(128,128,128,0.3)",
          rotation: 45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "squares",
          type: "patternSquares",
          background: "inherit",
          color: "rgba(128,128,128,0.3)",
          size: 6,
          padding: 1,
          stagger: true,
        },
      ]}
      fill={data.slice(0, -1).map((item, index) => {
        const patternIds = ["dots", "lines", "squares"];
        const pattern = patternIds[index % patternIds.length];
        return {
          match: { id: item.id },
          id: pattern,
        };
      })}
    />
  );
};

export default PieChart;
