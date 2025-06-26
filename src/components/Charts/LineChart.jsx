import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsiveLine } from "@nivo/line";
import useIsMobile from "../../hooks/useIsMobile";
import { useAccessibilityStore } from "../../store/accessibilityStore";

const LineChart = ({
  majors,
  ariaLabel,
  tickRotation,
  legendOffsetBottom = 40,
  marginBottom = 50,
  xMode = "ano",
}) => {
  const [data, setData] = useState([]);

  // usado somente no gráfico alunas ativas por ano de inscrição e curso
  // porque nos csvs (*curso*_ano_ingresso.csv) tem semestre separado do ano
  const getIndexValue = (item) => {
    if (xMode === "anoSemestre") {
      if (item.Ano !== undefined && item.Semestre !== undefined) {
        return `${item.Ano}.${item.Semestre}`;
      }
      return item.Ano;
    }

    return item.Ano;
  };

  // só está sendo usado nos gráficos do home então,
  // está ajustado somente para gráficos com feminino e ano
  const parseCsvData = (major) => {
    const csvPath = `${import.meta.env.BASE_URL}${major.folder}/${major.name}.csv`;

    return new Promise((resolve) => {
      Papa.parse(csvPath, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const rows = result.data;

          const points = rows
            .filter((row) => row.Feminino !== undefined && row.Ano)
            .map((row) => ({
              x: getIndexValue(row),
              y: row.Feminino,
            }))
            .sort((a, b) => String(a.x).localeCompare(String(b.x)));

          resolve({
            id: major.displayName,
            data: points,
          });
        },
      });
    });
  };

  useEffect(() => {
    Promise.all(majors.map(parseCsvData)).then(setData);
  }, [majors, xMode]);

  const isMobile = useIsMobile();

  // importante para deixar título da tooltip não abreviado
  const getSeriesTitle = (id) => {
    const map = {
      CC: "Ciência da Computação",
      SI: "Sistemas de Informação",
      "CC (RO)": "Ciência da Computação (RO)",
      TSC: "Tecnologia em Sistemas de Computação",
    };
    return map[id] || id;
  };

  // parte de acessibilidade início
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
        {data.map((serie) =>
          serie.data.map(
            (point) => `${serie.id}: ${point.x} - ${point.y} alunas. `
          )
        )}
      </div>
      {/* parte de acessibilidade fim */}

      <ResponsiveLine
        data={data}
        margin={{
          top: 30,
          right: 25,
          bottom: isMobile ? 82 : marginBottom,
          left: 45,
        }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickRotation: isMobile ? -90 : tickRotation,
          legend: "Ano",
          legendOffset: isMobile ? 55 : legendOffsetBottom,
          tickPadding: 5,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Quantidade de alunas",
          legendOffset: -40,
          legendPosition: "middle",
          format: (value) => (Number.isInteger(value) ? value : ""),
        }}
        colors={{ scheme: "set2" }}
        pointSize={6}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor", modifiers: [] }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "top",
            direction: "row",
            justify: false,
            translateX: 10,
            translateY: -40,
            itemsSpacing: 30,
            itemDirection: "left-to-right",
            itemWidth: 60,
            itemHeight: 40,
            itemOpacity: 0.9,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel={ariaLabel}
        isFocusable={true}
        tooltip={({ point }) => (
          <div
            style={{
              background: "white",
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <strong>{getSeriesTitle(point.seriesId)}</strong>
            {/* importante para deixar título da tooltip não abreviado */}
            <br />
            Ano: {point.data.xFormatted}
            <br />
            Alunas: {point.data.yFormatted}
          </div>
        )}
        theme={theme}
      />
    </>
  );
};

export default LineChart;
