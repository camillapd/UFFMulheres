import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({
  majors,
  ariaLabel,
  tickRotation,
  legendOffsetBt = 45,
  tickPaddingBt = 5
}) => {
  const [data, setData] = useState([]);

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
            const hasSemestre = rows.length > 0 && "Semestre" in rows[0];

            const points = rows
              .filter(
                (row) =>
                  row.Feminino !== undefined &&
                  row.Feminino !== null &&
                  row.Ano !== 2011
              )
              .map((row) => ({
                x: hasSemestre ? `${row.Ano}.${row.Semestre}` : row.Ano,
                y: row.Feminino,
              }))
              .sort((a, b) => Number(a.x) - Number(b.x));

            resolve({ id: major.displayName, data: points });
          },
        });
      });
    });

    Promise.all(promises).then((results) => setData(results));
  }, [majors]);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 45, bottom: 60, left: 45 }}
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
        tickRotation,
        legend: "Ano",
        legendOffset: legendOffsetBt,
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
      tooltip={({ point }) => (
        <div
          style={{
            background: "white",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <strong>{point.seriesId}</strong>
          <br />
          Ano: {point.data.xFormatted}
          <br />
          Alunas: {point.data.yFormatted}
        </div>
      )}
    />
  );
};

export default LineChart;
