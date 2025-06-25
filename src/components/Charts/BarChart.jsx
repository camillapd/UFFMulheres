import React, { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import { ResponsiveBar } from "@nivo/bar";
import useIsMobile from "../../hooks/useIsMobile";
import { useAccessibilityStore } from "../../store/accessibilityStore";
import barChartPresets from "../../utils/bartChartPresets";
import {
  filterLongFormat,
  filterWideFormat,
} from "../../utils/barChartFilters";

const BarChart = ({
  csvFileName,
  xColumn,
  valueColumns,
  groupMode,
  layout = "vertical",
  legendBottomText,
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

  const getIndexValue = React.useCallback(
    (item) => {
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
    },
    [xMode, xColumn]
  );

  const parseCsvData = (csvResultData, csvFields) => {
    const isLong = csvFields.includes("Sexo");

    if (isLong) {
      const grouped = {};
      csvResultData.forEach((item) => {
        const indexValue = getIndexValue(item);

        if (!grouped[indexValue]) grouped[indexValue] = { index: indexValue };

        if (item.Sexo === "M") grouped[indexValue].Masculino = item.Total;
        if (item.Sexo === "F") grouped[indexValue].Feminino = item.Total;
      });

      const parsedRawData = csvResultData.map((item) => ({
        ...item,
        index: getIndexValue(item),
      }));

      return {
        isLongFormat: true,
        rawData: parsedRawData,
        data: Object.values(grouped),
      };
    } else {
      const parsedRawData = csvResultData.map((item) => ({
        ...item,
        index: getIndexValue(item),
      }));

      const formattedData = parsedRawData.map((item) => {
        const formattedItem = { index: item.index };
        valueColumns.forEach((col) => {
          formattedItem[col] = item[col];
        });
        if (item.Total !== undefined) {
          formattedItem.Total = item.Total;
        }
        return formattedItem;
      });

      return {
        isLongFormat: false,
        rawData: parsedRawData,
        data: formattedData,
      };
    }
  };

  useEffect(() => {
    const csvPath = `/assets/data/${csvFileName}`;
    Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const { isLongFormat, rawData, data } = parseCsvData(
          result.data,
          result.meta.fields
        );
        setIsLongFormat(isLongFormat);
        setRawData(rawData);
        setData(data);
      },
    });
  }, [csvFileName, xColumn, valueColumns, xMode]);

  useEffect(() => {
    if (!rawData || rawData.length === 0) return;

    const filteredData = isLongFormat
      ? filterLongFormat(rawData, filters.sexo)
      : filterWideFormat(rawData, filters.sexo);

    setData(filteredData);
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
  const presets = barChartPresets();
  const selectedPreset = presets[preset] ?? presets.defaultFilter;

  const resolvePresetValue = (presetKey) => {
    return isMobile
      ? selectedPreset[`${presetKey}Mobile`] ?? selectedPreset[presetKey]
      : selectedPreset[presetKey];
  };

  const currentMarginBottom = resolvePresetValue("marginBottom");
  const currentMarginLeft = resolvePresetValue("marginLeft");
  const currentLegendOffsetLeft = resolvePresetValue("legendOffsetLeft");
  const currentLegendOffsetBottom = resolvePresetValue("legendOffsetBottom");
  const currentTickRotationBottom = resolvePresetValue("tickRotationBottom");
  const currentTickPaddingBottom = resolvePresetValue("tickPaddingBottom");

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
      : legendBottomText ?? categoryLegend;

    const valueAxisLegend = isHorizontal
      ? legendBottomText ?? valueLegend
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

  const CustomTooltip = ({ indexValue, data }) => {
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
          borderRadius: "20px",
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
  };

  const dynamicAriaLabel = useMemo(() => {
    const sexoFilter = filters.sexo;

    let label = ariaLabel;

    if (sexoFilter && sexoFilter !== "Todos") {
      label += `, filtrando alunos do sexo ${sexoFilter}`;
    } else {
      label += `, mostrando todos os alunos`;
    }

    return label;
  }, [csvFileName, filters.sexo]);

  const fontSize = useAccessibilityStore((state) => state.fontSize);
  const chartFontSize = (fontSize / 100) * 12;

  const theme = {
    axis: {
      ticks: {
        text: {
          textAnchor: tickTextAnchor,
          dx:
            tickTextAnchor === "start" ? -5 : tickTextAnchor === "end" ? 5 : 0,

          fontSize: chartFontSize,
        },
      },
    },
    legends: {
      text: {
        fontSize: chartFontSize,
      },
    },
    labels: {
      text: {
        fontSize: chartFontSize,
      },
    },
  };

  return (
    <>
      <div className="filter-container">
        <label>
          <label htmlFor="sexoFilter">Filtrar alunos: </label>
          <select
            id="sexoFilter"
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

      <div
        aria-live="polite"
        style={{
          position: "absolute",
          left: "-9999px",
          height: "1px",
          width: "1px",
          overflow: "hidden",
        }}
      >
        {`Gráfico de alunos com filtro de sexo: ${filters.sexo}. Contagem total por categoria:`}
        {data.map((item) => {
          const feminino = item.Feminino ?? 0;
          const masculino = item.Masculino ?? 0;
          return `${item.index}: Feminino ${feminino}, Masculino ${masculino}. `;
        })}
      </div>

      <ResponsiveBar
        data={data}
        keys={keysToShow}
        indexBy="index"
        margin={{
          top: 30,
          right: 10,
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
        tooltip={({ indexValue, data }) => (
          <CustomTooltip indexValue={indexValue} data={data} />
        )}
        role="application"
        ariaLabel={dynamicAriaLabel}
        isFocusable={true}
        enableLabel={true}
        barAriaLabel={(e) =>
          e.indexValue + " - " + e.id + e.formattedValue + ": alunos"
        }
        theme={theme}
      />
    </>
  );
};

export default BarChart;
