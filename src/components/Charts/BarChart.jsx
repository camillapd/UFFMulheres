import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({
  csvFileName,
  xColumn,
  valueColumns,
  groupMode,
  layout,
  tickRotation,
  legendOffset=40,
  data: propData,
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
          const formattedData = result.data.map((item) => {
            const formattedItem = { [xColumn]: item[xColumn] };
            valueColumns.forEach((col) => {
              formattedItem[col] = item[col];
            });
            if (item.Total !== undefined) {
              formattedItem.Total = item.Total;
            }
            return formattedItem;
          });
          setData(formattedData);
        },
      });
    }
  }, [propData, csvFileName, xColumn, valueColumns]);

  return (
    <ResponsiveBar
      data={data}
      keys={valueColumns}
      indexBy={xColumn}
      margin={{ top: 20, right: 0, bottom: 55, left: 40 }}
      groupMode={groupMode}
      layout={layout}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true, padding: 0.5 }}
      colors={{ scheme: "nivo" }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation,
        legend: xColumn,
        legendPosition: "middle",
        legendOffset,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Quantidade de alunos",
        legendPosition: "middle",
        legendOffset: -35,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 10,
          translateY: -25,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({ indexValue, data }) => {
        const feminino = data["Feminino"] ?? 0;
        const masculino = data["Masculino"] ?? 0;
        const total = data["Total"];
        return (
          <div
            style={{
              padding: 12,
              background: "white",
              color: "#000",
              boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
            }}
          >
            <strong>{indexValue}</strong>
            <br />
            Feminino: {feminino}
            <br />
            Masculino: {masculino}
            {total !== undefined && (
              <>
                <br />
                <strong>Total: {total}</strong>
              </>
            )}
          </div>
        );
      }}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
