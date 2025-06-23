import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsiveLine } from "@nivo/line";
import useIsMobile from "../../hooks/useIsMobile";

const LineChart = ({
  majors,
  ariaLabel,
  tickRotation,
  legendOffsetBottom = 40,
  tickPaddingBt = 5,
  marginBottom = 50,
  xMode = "ano",
}) => {
  const [data, setData] = useState([]);

  const getIndexValue = (item) => {
    if (xMode === "anoSemestre") {
      if (item.Ano !== undefined && item.Semestre !== undefined) {
        return `${item.Ano}.${item.Semestre}`;
      }
      return item.Ano;
    }

    return item.Ano;
  };

  useEffect(() => {
    const promises = majors.map((major) => {
      const csvPath = `${major.folder}/${major.name}.csv`;

      return new Promise((resolve) => {
        Papa.parse(csvPath, {
          download: true,
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            const rows = result.data;

            const points = rows
              .filter(
                (row) =>
                  row.Feminino !== undefined && row.Feminino !== null && row.Ano
              )
              .map((row) => ({
                x: getIndexValue(row),
                y: row.Feminino,
              }))
              .sort((a, b) => String(a.x).localeCompare(String(b.x)));

            resolve([
              {
                id: major.displayName,
                data: points,
              },
            ]);
          },
        });
      });
    });

    Promise.all(promises).then((results) => {
      setData(results.flat());
    });
  }, [majors, xMode]);

  const isMobile = useIsMobile();

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 25, bottom: marginBottom, left: 45 }}
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
        tickRotation: isMobile? -90 : tickRotation,
        legend: "Ano",
        legendOffset: legendOffsetBottom,
        tickPadding: tickPaddingBt,
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
          itemsSpacing: 15,
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
      tooltip={({ point }) => {
        let title;

        if (point.seriesId == "CC") title = "Ciência da Computação";
        else if (point.seriesId == "SI") title = "Sistemas de Informação";
        else if (point.seriesId == "CC (RO)")
          title = "Ciência da Computação (RO)";
        else if (point.seriesId == "TSC")
          title = "Tecnologia em Sistemas de Computação";
        else title = point.seriesId;

        return (
          <div
            style={{
              background: "white",
              padding: "8px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <strong>{title}</strong>
            <br />
            Ano: {point.data.xFormatted}
            <br />
            Alunas: {point.data.yFormatted}
          </div>
        );
      }}
    />
  );
};

export default LineChart;
