"use client";

import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid2";
import * as echarts from "echarts/core";
import { LineChart, ScatterChart } from "echarts/charts";
import { TooltipComponent, DatasetComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { debounce } from "lodash-es";
import p3 from "@/assets/p3.json";
import { getData, drawChart } from "@/utils/chart";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";

interface Source {
  name: string;
  code: string;
  value: boolean;
}

const Chart: React.FC = () => {
  const [sources, setSources] = useState<Record<string, Source>>({
    formosa: {
      name: "Formosa",
      code: "美麗島",
      value: true,
    },
    cnews: {
      name: "CNews",
      code: "匯流",
      value: true,
    },
    newtalk: {
      name: "NewTalk",
      code: "新頭殼",
      value: true,
    },
    ettoday: {
      name: "ETtoday",
      code: "ETtoday",
      value: true,
    },
    tpof: {
      name: "TPOF",
      code: "台灣民意基金會",
      value: true,
    },
    tvbs: {
      name: "TVBS",
      code: "TVBS",
      value: true,
    },
  });

  const handleSourceToggle = (sourceKey: string) => {
    setSources((prevSources) => ({
      ...prevSources,
      [sourceKey]: {
        ...prevSources[sourceKey],
        value: !prevSources[sourceKey].value,
      },
    }));
  };

  const filter = Object.values(sources)
    .filter((source) => source.value)
    .map((source) => source.code);

  const chartData = getData(p3, filter);

  useEffect(() => {
    echarts.use([
      LineChart,
      ScatterChart,
      TooltipComponent,
      DatasetComponent,
      CanvasRenderer,
    ]);

    const chartContainer = document.getElementById("myChart");
    if (chartContainer) {
      const myChart = echarts.init(chartContainer);
      drawChart(myChart, chartData);

      const resizeObserver = new ResizeObserver(
        debounce(() => {
          myChart.resize();
        }, 300)
      );
      resizeObserver.observe(chartContainer);

      return () => {
        myChart.dispose();
        resizeObserver.disconnect();
      };
    }
  }, [chartData]);

  return (
    <>
      <Stack className="justify-center items-center text-center">
        <Typography variant="h5" className="text-xl font-medium py-4">
          Sources
        </Typography>

        <Grid className="md:w-4/6">
          <Grid container spacing={2}>
            {Object.entries(sources).map(([key, source]) => (
              <Grid key={key} size={{ xs: 12, sm: 6, md: 4 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={source.value}
                      onChange={() => handleSourceToggle(key)}
                    />
                  }
                  label={source.name}
                  className="flex items-center" // Add this for better alignment
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Stack>

      <Grid container>
        <div id="myChart" className="w-full h-96 overflow-x-scroll" />
      </Grid>
    </>
  );
};

export default Chart;
