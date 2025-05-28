import { useEffect, useState } from "react";
import Papa from "papaparse";
import { ResponsiveRadar } from "@nivo/radar";

const RadarChart = ({ csvFileName, xColumn, valueColumns, ariaLabel, data: propData  }) => {
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
            return formattedItem;
          });
          setData(formattedData);
        },
      });
    }
  }, [propData, csvFileName, xColumn, valueColumns]);

  return (
    <ResponsiveRadar
      data={data}
      keys={valueColumns}
      indexBy={xColumn}
      margin={{ top: 30, right: 40, bottom: 60, left: 50 }}
      valueFormat=">-.2f"
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      colors={{ scheme: "accent" }}
      blendMode="multiply"
      motionConfig="wobbly"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -90,
        legend: xColumn,
        legendPosition: "middle",
        legendOffset: 50,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Valor",
        legendPosition: "middle",
        legendOffset: -40,
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
      role="application"
      ariaLabel={ariaLabel}
    />
  );
};

export default RadarChart;
