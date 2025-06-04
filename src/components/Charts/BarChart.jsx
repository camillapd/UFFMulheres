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

  const getIndexValue = (item) => {
    const hasUniversity = "Instituição" in item;
    const hasMajor = "Curso" in item;

    if (hasUniversity && hasMajor) {
      return `${item.Instituição} - ${item.Curso}`;
    }
    if (xMode === "anoSemestre") {
      if (item.Ano !== undefined && item.Semestre !== undefined) {
        return `${item.Ano}.${item.Semestre}`;
      }
      return item.Ano ?? item[xColumn];
    } else if (xMode === "ano") {
      return item.Ano ?? item[xColumn];
    } else if (xMode === "semestre") {
      return item.Semestre ?? item[xColumn];
    } else {
      return item[xColumn];
    }
  };

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
          if (result.meta.fields.includes("Sexo")) {
            const grouped = {};
            result.data.forEach((item) => {
              const indexValue = getIndexValue(item);
              if (!grouped[indexValue])
                grouped[indexValue] = { index: indexValue };

              if (item.Sexo === "M") grouped[indexValue].Masculino = item.Total;
              if (item.Sexo === "F") grouped[indexValue].Feminino = item.Total;
            });

            setData(Object.values(grouped));
          } else {
            const formattedData = result.data.map((item) => {
              const indexValue = getIndexValue(item);
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
          }
        },
      });
    }
  }, [propData, csvFileName, xColumn, valueColumns, xMode]);

  const bottomLegend =
    legendBtText || (layout === "vertical" ? xColumn : "Quantidade de alunos");

  const leftLegend =
    legendLeftText ||
    (layout === "vertical" ? "Quantidade de alunos" : xColumn);

  const getBarChartAxes = () => {
    const isHorizontal = layout === "horizontal";

    const axisLeft = isHorizontal
      ? {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: leftLegend,
          legendPosition: "middle",
          legendOffset: legendOffsetLeft,
          truncateTickAt: 0,
        }
      : {
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: leftLegend,
          legendPosition: "middle",
          legendOffset: legendOffsetLeft,
          truncateTickAt: 0,
          format: (value) => (Number.isInteger(value) ? value : ""),
        };

    return { axisLeft };
  };

  const { axisLeft } = getBarChartAxes();

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
      axisLeft={axisLeft}
      labelSkipWidth={18}
      labelSkipHeight={10}
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
          color: "rgba(128,128,128,0.3)",
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
