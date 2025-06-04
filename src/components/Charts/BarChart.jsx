import React, { useEffect, useState } from "react";
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
  const [rawData, setRawData] = useState([]);
  const [filters, setFilters] = useState({ sexo: "Todos" });
  const [isLongFormat, setIsLongFormat] = useState(false);

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
    } else {
      return item[xColumn];
    }
  };

  useEffect(() => {
    const csvPath = `/assets/data/${csvFileName}`;
    Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,

      complete: (result) => {
        const processedRawData = result.data.map((item) => ({
          ...item,
          index: getIndexValue(item),
        }));
        setRawData(processedRawData);

        const isLong = result.meta.fields.includes("Sexo");
        setIsLongFormat(isLong);

        if (isLong) {
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
  }, [propData, csvFileName, xColumn, valueColumns, xMode]);

  useEffect(() => {
    if (!rawData || rawData.length === 0) return;

    let filtered = [...rawData];

    if (isLongFormat) {
      if (filters.sexo !== "Todos") {
        filtered = filtered.filter((item) =>
          filters.sexo === "Masculino" ? item.Sexo === "M" : item.Sexo === "F"
        );
      }

      const grouped = {};
      filtered.forEach((item) => {
        const indexValue = item.index;

        if (!grouped[indexValue]) grouped[indexValue] = { index: indexValue };
        if (item.Sexo === "M") grouped[indexValue].Masculino = item.Total;
        if (item.Sexo === "F") grouped[indexValue].Feminino = item.Total;
      });
      setData(Object.values(grouped));
    } else {

      let wideFiltered = [...rawData];
      if (filters.sexo !== "Todos") {
        if (filters.sexo === "Masculino") {
          wideFiltered = wideFiltered.map((item) => ({
            ...item,
            Feminino: 0,
          }));
        } else if (filters.sexo === "Feminino") {
          wideFiltered = wideFiltered.map((item) => ({
            ...item,
            Masculino: 0,
          }));
        }
      }
      setData(wideFiltered);
    }
  }, [filters, rawData, isLongFormat]);

  const keysToShow = React.useMemo(() => {
    if (isLongFormat) {
      return ["Feminino", "Masculino"];
    }
    if (filters.sexo === "Todos") {
      return valueColumns;
    } else if (filters.sexo === "Feminino") {
      return ["Feminino"];
    } else if (filters.sexo === "Masculino") {
      return ["Masculino"];
    }
    return valueColumns;
  }, [filters.sexo, valueColumns, isLongFormat]);

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
    <>
      <div className="filter-container">
        <label>
          Filtrar alunos: {" "}
          <select
            value={filters.sexo}
            onChange={(e) =>
              setFilters((f) => ({ ...f, sexo: e.target.value }))
            }
          >
            <option value="Todos">Todos</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </label>
      </div>

      <ResponsiveBar
        data={data}
        keys={keysToShow}
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
    </>
  );
};

export default BarChart;
