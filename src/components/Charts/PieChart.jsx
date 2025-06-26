import { useEffect, useState, useMemo } from "react";
import Papa from "papaparse";
import { ResponsivePie } from "@nivo/pie";
import useIsMobile from "../../hooks/useIsMobile";
import { useAccessibilityStore } from "../../store/accessibilityStore";

const PieChart = ({
  csvFileName,
  xColumn,
  valueColumns,
  translateY = 180,
  translateX = 70,
  marginRight,
  marginLeft,
  startAngle,
  ariaLabel,
}) => {
  const [data, setData] = useState([]);

  const parsePieCsvData = (csvData, xColumn, valueColumns) => {
    return valueColumns
      .map((col) => {
        return csvData.reduce((acc, item) => {
          const id = item[xColumn];
          const value = Number(item[col]);
          if (!isNaN(value)) {
            acc.push({ id: `${id}`, value });
          }
          return acc;
        }, []);
      })
      .flat();
  };

  useEffect(() => {
    const csvPath = `${import.meta.env.BASE_URL}assets/data/${csvFileName}`;
    Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const formatted = parsePieCsvData(result.data, xColumn, valueColumns);
        setData(formatted);
      },
    });
  }, [csvFileName, xColumn, valueColumns]);

  const isMobile = useIsMobile();

  // parte de acessibilidade início
  const patternFill = useMemo(() => {
    const patternIds = ["dots", "lines", "squares"];
    return data.slice(0, -1).map((item, index) => ({
      match: { id: item.id },
      id: patternIds[index % patternIds.length],
    }));
  }, [data]);

  const fontSize = useAccessibilityStore((state) => state.fontSize);
  const chartFontSize = (fontSize / 100) * 12;

  const theme = {
    axis: {
      ticks: {
        text: {
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
      <div                        
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          height: "1px",
          width: "1px",
          overflow: "hidden",
        }}
      >
        {data.map((item) => `${item.id}: ${item.value} alunos. `)}
      </div>
      {/* parte de acessibilidade fim */}

      <ResponsivePie
        data={data}
        margin={{
          top: isMobile ? 0 : 5,
          right: isMobile ? 10 : marginRight,
          bottom: isMobile ? 30 : 5,
          left: isMobile ? 10 : marginLeft,
        }}
        startAngle={startAngle}
        innerRadius={0.5}
        padAngle={1.5}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableArcLinkLabels={!isMobile}
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
        role="img"
        ariaLabel={ariaLabel}
        isFocusable={true}
        legends={[
          {
            anchor: isMobile ? "bottom" : "right",
            direction: "column",
            translateY: isMobile ? 5 : translateY,
            translateX: isMobile ? 0 : translateX,
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
        fill={patternFill}
        theme={theme}
      />
    </>
  );
};

export default PieChart;
