import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";

const linkBlue = "#2196f3";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {" "}
      {"Datos cortesia de "}
      <Link href="https://disease.sh/">
        <a style={{ color: linkBlue }}>disease.sh</a>
      </Link>
      {".  "}
      {"Copyright © "}
      <Link href="https://habarahonaa.tech/">
        <a style={{ color: linkBlue }}>habarahonaa</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
