import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export const CardActive = (props) => {
  const lastUpdated = new Date(props.updated).toLocaleString("es-ES");

  return (
    <Grid item component={Card}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Activos
        </Typography>
        <Typography variant="h5">
          {Intl.NumberFormat().format(props.active)}
        </Typography>
        <Typography color="textSecondary">
          Ultima actualizacion: {lastUpdated}
        </Typography>
        <Typography variant="body2">Casos activos de COVID-19</Typography>
      </CardContent>
    </Grid>
  );
};
