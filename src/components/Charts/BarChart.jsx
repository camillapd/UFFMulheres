import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsiveBar } from "@nivo/bar";
import useIsMobile from "../../hooks/useIsMobile";

const BarChart = ({
  csvFileName,
  xColumn,
  valueColumns,
  groupMode,
  layout = "vertical",
  legendBtText,
  legendLeftText,
  tickTextAnchor = "end",
  ariaLabel,
  xMode = "ano",
  preset = "defaultFilter",
  forceHorizontalOnMobile = false,
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
  }, [csvFileName, xColumn, valueColumns, xMode]);

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

  const isMobile = useIsMobile();

  const presets = {
    defaultFilter: {
      marginBottom: 85,
      marginBottomMobile: 75,
      marginLeft: 48,
      marginLeftMobile: 50,
      legendOffsetLeft: -40,
      legendOffsetLeftMobile: -42,
      legendOffsetBottom: 40,
      legendOffsetBottomMobile: 35,
      tickPaddingBottom: 5,
    },
    defaultHorizontal: {
      marginBottom: 85,
      marginBottomMobile: 250,
      marginLeft: 220,
      marginLeftMobile: 48,
      legendOffsetLeft: -210,
      legendOffsetLeftMobile: -42,
      legendOffsetBottom: 40,
      legendOffsetBottomMobile: 200,
      tickPaddingBottom: 5,
      tickRotationBottom: 0,
      tickRotationBottomMobile: -90,
    },
    rotatedAxis: {
      marginBottom: 90,
      marginBottomMobile: 70,
      marginLeft: 48,
      marginLeftMobile: 65,
      legendOffsetLeft: -40,
      legendOffsetLeftMobile: -55,
      legendOffsetBottom: 50,
      legendOffsetBottomMobile: 50,
      tickPaddingBottom: 5,
      tickRotationBottom: -90,
    },
  };

  const selectedPreset = presets[preset] ?? presets.defaultFilter;

  const currentMarginBottom = isMobile
    ? selectedPreset.marginBottomMobile ?? selectedPreset.marginBottom
    : selectedPreset.marginBottom;

  const currentMarginLeft = isMobile
    ? selectedPreset.marginLeftMobile ?? selectedPreset.marginLeft
    : selectedPreset.marginLeft;

  const currentLegendOffsetLeft = isMobile
    ? selectedPreset.legendOffsetLeftMobile ?? selectedPreset.legendOffsetLeft
    : selectedPreset.legendOffsetLeft;

  const currentLegendOffsetBottom = isMobile
    ? selectedPreset.legendOffsetBottomMobile ??
      selectedPreset.legendOffsetBottom
    : selectedPreset.legendOffsetBottom;

  const currentTickRotationBottom = isMobile
    ? selectedPreset.tickRotationBottomMobile ??
      selectedPreset.tickRotationBottom
    : selectedPreset.tickRotationBottom;

  const currentTickPaddingBottom = selectedPreset.tickPaddingBottom;

  const finalLayout = isMobile
    ? forceHorizontalOnMobile
      ? "horizontal"
      : layout === "horizontal"
      ? "vertical"
      : layout
    : layout;

  const isHorizontal = finalLayout === "horizontal";

  const getAxisProps = () => {
    const categoryLegend = xColumn;
    const valueLegend = "Quantidade de alunos";

    const categoryAxisLegend = isHorizontal
      ? legendLeftText ?? categoryLegend
      : legendBtText ?? categoryLegend;

    const valueAxisLegend = isHorizontal
      ? legendBtText ?? valueLegend
      : legendLeftText ?? valueLegend;

    const axisBottom = {
      tickSize: 5,
      tickPadding: currentTickPaddingBottom,
      tickRotation: currentTickRotationBottom,
      legend: isHorizontal ? valueAxisLegend : categoryAxisLegend,
      legendPosition: "middle",
      legendOffset: currentLegendOffsetBottom,
      truncateTickAt: 0,
    };

    const axisLeft = {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: isHorizontal ? categoryAxisLegend : valueAxisLegend,
      legendPosition: "middle",
      legendOffset: currentLegendOffsetLeft,
      truncateTickAt: 0,
      format: !isHorizontal
        ? (value) => (Number.isInteger(value) ? value : "")
        : undefined,
    };

    return { axisBottom, axisLeft };
  };

  const { axisBottom, axisLeft } = getAxisProps();

  return (
    <>
      <div className="filter-container">
        <label>
          Filtrar alunos:{" "}
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
        margin={{
          top: 30,
          right: 0,
          bottom: currentMarginBottom,
          left: currentMarginLeft,
        }}
        groupMode={groupMode}
        layout={finalLayout}
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
        axisBottom={axisBottom}
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
