import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export const CardDeaths = (props) => {
  const lastUpdated = new Date(props.updated).toLocaleString("es-ES");

  return (
    <Grid item component={Card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Muertes
        </Typography>
        <Typography variant="h5">
          {Intl.NumberFormat().format(props.deaths)}
        </Typography>
        <Typography color="textSecondary">
          Ultima actualizacion: {lastUpdated}
        </Typography>
        <Typography variant="body2">
          Total de muertes ocasionadas por COVID-19 desde 2019
        </Typography>
      </CardContent>
    </Grid>
  );
};
