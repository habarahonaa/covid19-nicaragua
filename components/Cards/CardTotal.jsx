import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export const CardTotal = (props) => {
  const lastUpdated = new Date(props.updated).toLocaleString("es-ES");

  return (
    <Grid item component={Card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Totales
        </Typography>
        <Typography variant="h5">
          {Intl.NumberFormat().format(props.total)}
        </Typography>
        <Typography color="textSecondary">
          Ultima actualizacion: {lastUpdated}
        </Typography>
        <Typography variant="body2">
          Total de casos de COVID-19 desde 2019
        </Typography>
      </CardContent>
    </Grid>
  );
};
