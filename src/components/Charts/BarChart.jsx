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
  tickPaddingBt = 5,
  legendOffsetBt = 50,
  legendOffsetLeft = -35,
  legendBtText,
  legendLeftText,
  tickTextAnchor = "middle",
  marginLeft = 40,
  ariaLabel,
  xMode = "ano",
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
            let indexValue;

            if (xMode === "anoSemestre") {
              if (item.Ano !== undefined && item.Semestre !== undefined) {
                indexValue = `${item.Ano}.${item.Semestre}`;
              } else {
                indexValue = item[xColumn];
              }
            } else if (xMode === "semestre") {
              indexValue = item.Semestre ?? item[xColumn];
            } else if (xMode === "ano") {
              indexValue = item.Ano ?? item[xColumn];
            } else {
              indexValue = item[xColumn];
            }

            const formattedItem = { index: indexValue };
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
  }, [propData, csvFileName, xColumn, valueColumns, xMode]);

  const bottomLegend =
    legendBtText || (layout === "vertical" ? xColumn : "Quantidade de alunos");

  const leftLegend =
    legendLeftText ||
    (layout === "vertical" ? "Quantidade de alunos" : xColumn);

  return (
    <ResponsiveBar
      data={data}
      keys={valueColumns}
      indexBy="index"
      margin={{ top: 30, right: 0, bottom: 55, left: marginLeft }}
      groupMode={groupMode}
      layout={layout}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true, padding: 0.5 }}
      colors={({ id }) => {
        const colorMap = {
          Feminino: "#e78ac3", // rosa
          Masculino: "#66c2a5", // verde-azulado
        };
        return colorMap[id];
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: tickPaddingBt,
        tickRotation,
        legend: bottomLegend,
        legendPosition: "middle",
        legendOffset: legendOffsetBt,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: leftLegend,
        legendPosition: "middle",
        legendOffset: legendOffsetLeft,
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
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#a6d854",
          size: 6,
          padding: 1,
          stagger: true,
        },
      ]}
      fill={[
        {
          match: { id: "Masculino" },
          id: "dots",
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
      ariaLabel={ariaLabel}
      isFocusable={true}
      enableLabel={true}
      barAriaLabel={(e) =>
        e.indexValue + " - " + e.id + e.formattedValue + ": alunos"
      }
      theme={{
        axis: {
          ticks: {
            text: {
              textAnchor: tickTextAnchor,
              dx:
                tickTextAnchor === "start"
                  ? -5
                  : tickTextAnchor === "end"
                  ? 5
                  : 0,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
