import React, { useEffect, useState } from "react";
import { fetchNicaraguaHistoricalData } from "../../pages/api/disease";
import { Line, Bar } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import _ from "underscore";
import { Chart as ChartJS } from "chart.js/auto";

export const CaseChart = () => {
  const [dailyData, setDailyData] = useState({});
  const [labels, setLabels] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNicaraguaHistoricalData();
      setDailyData(data);
      setLabels(_.keys(data.cases));
      _.size(data) > 0 ? setLoaded(true) : setLoaded(false);
    };
    fetchData();
  }, []);

  const lineChart = isLoaded ? (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Casos",
            data: Object.values(dailyData.cases),
            borderColor: "rgb(6, 136, 211)",
            backgroundColor: "rgba(6, 136, 211, 0.5)",
          },
          {
            label: "Muertes",
            data: Object.values(dailyData.deaths),
            borderColor: "rgb(178, 52, 14)",
            backgroundColor: "rgba(178, 52, 14,0.5)",
          },
        ],
      }}
    />
  ) : (
    <CircularProgress />
  );

  return (
    <Card>
      <CardHeader title="Grafico de casos (ultimos 200 dias)" />
      <Box sx={{ p: 2, px: 4 }}>{lineChart}</Box>
    </Card>
  );
};
