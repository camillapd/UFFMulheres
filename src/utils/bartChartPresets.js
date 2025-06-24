const barChartPresets = ({ desligadosPos }) => {
  return {
    defaultFilter: {
      marginBottom: 85,
      marginBottomMobile: desligadosPos ? 150 : 75,
      marginLeft: 48,
      marginLeftMobile: 50,
      legendOffsetLeft: -40,
      legendOffsetLeftMobile: -42,
      legendOffsetBottom: 40,
      legendOffsetBottomMobile: desligadosPos ? 100 : 35,
      tickPaddingBottom: 5,
      tickRotationBottom: 0,
      tickRotationBottomMobile: desligadosPos ? -90 : 0,
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
      tickPaddingBottom: 5,
      tickRotationBottom: -90,
    },
  };
};

export default barChartPresets;
