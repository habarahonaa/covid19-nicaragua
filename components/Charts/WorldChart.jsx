import React, { useEffect, useState } from "react";
import { fetchHistoricalData } from "../../pages/api/disease";
import { Line, Bar } from "react-chartjs-2";
import CircularProgress from "@mui/material/CircularProgress";
import _ from "underscore";
import { Chart as ChartJS } from "chart.js/auto";

export const CaseChart = () => {
  const [dailyData, setDailyData] = useState({});
  const [labels, setLabels] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistoricalData();
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
          {
            label: "Recuperados",
            data: Object.values(dailyData.recovered),
            borderColor: "rgb(136, 234, 129)",
            backgroundColor: "rgba(136, 234, 129,0.5)",
          },
        ],
      }}
    />
  ) : (
    <CircularProgress />
  );

  return <div>{lineChart}</div>;
};
