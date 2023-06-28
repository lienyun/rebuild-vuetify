export default {
  colors: [
    "#7cb5ec",
    "#434348",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1"
  ],
  symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
  lang: {
    loading: "Loading...",
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    weekdays: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    decimalPoint: ".",
    numericSymbols: ["k", "M", "G", "T", "P", "E"],
    resetZoom: "Reset zoom",
    resetZoomTitle: "Reset zoom level 1:1",
    thousandsSep: " "
  },
  global: {},
  time: { timezoneOffset: 0, useUTC: true },
  chart: {
    styledMode: false,
    borderRadius: 0,
    colorCount: 10,
    defaultSeriesType: "line",
    ignoreHiddenSeries: true,
    spacing: [10, 10, 15, 10],
    resetZoomButton: {
      theme: { zIndex: 6 },
      position: { align: "right", x: -10, y: 10 }
    },
    width: null,
    height: null,
    borderColor: "#335cad",
    backgroundColor: "#ffffff",
    plotBorderColor: "#cccccc",
    style: {
      fontFamily:
        '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif'
    }
  },
  title: {
    text: "Chart title",
    align: "center",
    margin: 15,
    widthAdjust: -44,
    style: {
      color: "#333333",
      textTransform: "",
      fontSize: "18px"
    }
  },
  subtitle: { text: "", align: "center", widthAdjust: -44 },
  caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" },
  plotOptions: {
    line: {
      lineWidth: 2,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: true },
          hover: {
            animation: { duration: 50 },
            enabled: true,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
        }
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 }
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: true,
      turboThreshold: 1000,
      findNearestPointBy: "x"
    },
    area: {
      lineWidth: 2,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: true },
          hover: {
            animation: { duration: 50 },
            enabled: true,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
        }
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 }
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: true,
      turboThreshold: 1000,
      findNearestPointBy: "x",
      threshold: 0
    },
    spline: {
      lineWidth: 2,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: true },
          hover: {
            animation: { duration: 50 },
            enabled: true,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
        }
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 }
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: true,
      turboThreshold: 1000,
      findNearestPointBy: "x"
    },
    areaspline: {
      lineWidth: 2,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: true },
          hover: {
            animation: { duration: 50 },
            enabled: true,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
        }
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 }
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: true,
      turboThreshold: 1000,
      findNearestPointBy: "x",
      threshold: 0
    },
    column: {
      lineWidth: 2,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: null,
      point: { events: {} },
      dataLabels: {
        animation: {},
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        x: 0
      },
      cropThreshold: 50,
      opacity: 1,
      pointRange: null,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: false,
          brightness: 0.1
        },
        select: {
          animation: { duration: 0 },
          color: "#cccccc",
          borderColor: "#000000"
        },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: false,
      turboThreshold: 1000,
      findNearestPointBy: "x",
      borderRadius: 0,
      centerInCategory: false,
      groupPadding: 0.2,
      pointPadding: 0.1,
      minPointLength: 0,
      startFromThreshold: true,
      tooltip: { distance: 6 },
      threshold: 0,
      borderColor: "#ffffff"
    },
    bar: {
      lineWidth: 2,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: null,
      point: { events: {} },
      dataLabels: {
        animation: {},
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        x: 0
      },
      cropThreshold: 50,
      opacity: 1,
      pointRange: null,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: false,
          brightness: 0.1
        },
        select: {
          animation: { duration: 0 },
          color: "#cccccc",
          borderColor: "#000000"
        },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: false,
      turboThreshold: 1000,
      findNearestPointBy: "x",
      borderRadius: 0,
      centerInCategory: false,
      groupPadding: 0.2,
      pointPadding: 0.1,
      minPointLength: 0,
      startFromThreshold: true,
      tooltip: { distance: 6 },
      threshold: 0,
      borderColor: "#ffffff"
    },
    scatter: {
      lineWidth: 0,
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: {
        enabledThreshold: 2,
        lineColor: "#ffffff",
        lineWidth: 0,
        radius: 4,
        states: {
          normal: { animation: true },
          hover: {
            animation: { duration: 50 },
            enabled: true,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
        },
        enabled: true
      },
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 }
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: true,
      turboThreshold: 1000,
      findNearestPointBy: "xy",
      jitter: { x: 0, y: 0 },
      tooltip: {
        headerFormat:
          '<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',
        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
      }
    },
    pie: {
      allowPointSelect: false,
      crisp: true,
      showCheckbox: false,
      animation: { duration: 1000 },
      events: {},
      marker: null,
      point: { events: {} },
      dataLabels: {
        animation: {},
        align: "center",
        defer: true,
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        allowOverlap: true,
        connectorPadding: 5,
        connectorShape: "fixedOffset",
        crookDistance: "70%",
        distance: 30,
        enabled: true,
        softConnector: true
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: true,
      states: {
        normal: { animation: true },
        hover: {
          animation: { duration: 50 },
          lineWidthPlus: 1,
          marker: {},
          halo: { size: 10, opacity: 0.25 },
          brightness: 0.1
        },
        select: { animation: { duration: 0 } },
        inactive: { animation: { duration: 50 }, opacity: 0.2 }
      },
      stickyTracking: false,
      turboThreshold: 1000,
      findNearestPointBy: "x",
      center: [null, null],
      clip: false,
      colorByPoint: true,
      ignoreHiddenPoint: true,
      inactiveOtherPoints: true,
      legendType: "point",
      size: null,
      showInLegend: false,
      slicedOffset: 10,
      tooltip: { followPointer: true },
      borderColor: "#ffffff",
      borderWidth: 1
    }
  },
  labels: { style: { position: "absolute", color: "#333333" } },
  legend: {
    enabled: true,
    align: "center",
    alignColumns: true,
    layout: "horizontal",
    borderColor: "#999999",
    backgroundColor: "#ffffff",
    borderRadius: 0,
    navigation: { activeColor: "#003399", inactiveColor: "#cccccc" },
    itemStyle: {
      color: "#333333",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "bold",
      textOverflow: "ellipsis"
    },
    itemHoverStyle: { color: "#000000" },
    itemHiddenStyle: { color: "#cccccc" },
    shadow: false,
    itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
    squareSymbol: true,
    symbolPadding: 5,
    verticalAlign: "bottom",
    x: 0,
    y: 0,
    title: { style: { fontWeight: "bold" } }
  },
  loading: {
    labelStyle: { fontWeight: "bold", position: "relative", top: "45%" },
    style: {
      position: "absolute",
      backgroundColor: "#ffffff",
      opacity: 0.5,
      textAlign: "center"
    }
  },
  tooltip: {
    enabled: true,
    animation: true,
    borderRadius: 3,
    dateTimeLabelFormats: {
      millisecond: "%A, %b %e, %H:%M:%S.%L",
      second: "%A, %b %e, %H:%M:%S",
      minute: "%A, %b %e, %H:%M",
      hour: "%A, %b %e, %H:%M",
      day: "%A, %b %e, %Y",
      week: "Week from %A, %b %e, %Y",
      month: "%B %Y",
      year: "%Y"
    },
    footerFormat: "",
    padding: 8,
    snap: 10,
    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
    pointFormat:
      '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
    backgroundColor: "rgba(247,247,247,0.85)",
    borderWidth: 1,
    shadow: true,
    style: {
      color: "#333333",
      cursor: "default",
      fontSize: "12px",
      whiteSpace: "nowrap"
    }
  },
  credits: {
    enabled: true,
    href: "https://www.highcharts.com?credits",
    position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 },
    style: { cursor: "pointer", color: "#999999", fontSize: "9px" },
    text: "Highcharts.com"
  },

  // It'e needed to set additional options from out of the default theme,
  // because Dark theme is adding the new properties not included within
  // default theme

  xAxis: {
    gridLineColor: "#D8D8D8",
    labels: {
      style: {
        color: "#606060"
      }
    },
    lineColor: "#C0D0E0",
    minorGridLineColor: "#e0e0e0",
    tickColor: "#C0D0E0",
    title: {
      style: {
        color: "#707070"
      }
    }
  },
  yAxis: {
    gridLineColor: "#D8D8D8",
    labels: {
      style: {
        color: "#606060"
      }
    },
    lineColor: "#C0D0E0",
    minorGridLineColor: "#e0e0e0",
    tickColor: "#C0D0E0",
    tickWidth: 0,
    title: {
      style: {
        color: "#707070"
      }
    }
  }
};
