import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchDailyData } from "../../pages/api/disease";

export const DGCountries = () => {
  const [dailyData, setDailyData] = useState([]);
  const [columns, setColumns] = useState([
    {
      field: "country",
      headerName: "Pais",
      width: 300,
      editable: false,
    },
    {
      field: "cases",
      headerName: "Casos totales",
      width: 250,
      editable: false,
    },
    {
      field: "active",
      headerName: "Casos activos",
      width: 250,
      editable: false,
    },
    {
      field: "recovered",
      headerName: "Recuperados (total)",
      width: 250,
      editable: false,
    },
    {
      field: "deaths",
      headerName: "Muertes totales",
      width: 250,
      editable: false,
    },
  ]);

  useEffect(() => {
    const fetchAPI = async () => {
      const daily = await fetchDailyData();
      setDailyData(daily);
    };
    fetchAPI();
  }, []);

  return (
    <div style={{ height: 630, width: "100%" }}>
      <DataGrid
        rows={dailyData}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};
