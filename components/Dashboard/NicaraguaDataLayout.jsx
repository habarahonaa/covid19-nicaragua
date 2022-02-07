import React, { useState, useEffect } from "react";
import Link from "next/link";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { fetchData } from "../../pages/api/disease";
import { CardActive, CardDeaths, CardRecovered, CardTotal } from "../Cards";
import { CaseChart } from "../Charts/WorldChart";
import { DGCountries } from "../DGCountries/DGCountries";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function WorldDataLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [totalCases, setTotalCases] = useState("Loading...");
  const [activeCases, setActiveCases] = useState("Loading...");
  const [totalDeaths, setTotalDeaths] = useState("Loading...");
  const [totalRecovered, setTotalRecovered] = useState("Loading...");
  const [lastUpdate, setLastUpdate] = useState("Loading...");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchWorldData = async () => {
      const data = await fetchData();
      setTotalCases(data.cases);
      setActiveCases(data.active);
      setTotalDeaths(data.deaths);
      setTotalRecovered(data.recovered);
      setLastUpdate(data.updated);
    };
    fetchWorldData();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <GridViewRoundedIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            COVID-19 Nicaragua
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider variant="middle" />
        <List>
          {["Mundial", "Nicaragua/Casos", "Vacunacion"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <PublicRoundedIcon />
                ) : index === 1 ? (
                  <FlagRoundedIcon />
                ) : (
                  <VaccinesRoundedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ pt: 12, pb: 6 }}>
          <Typography variant="h4">Hola, bienvenido de nuevo!</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CardTotal updated={lastUpdate} total={totalCases} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardActive updated={lastUpdate} active={activeCases} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardRecovered updated={lastUpdate} recovered={totalRecovered} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardDeaths updated={lastUpdate} deaths={totalDeaths} />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardHeader
                title="Estadisticas mundiales"
                subheader={`TODO: Insertar formula para calcular variacion entre dias`}
              />
              <Box sx={{ p: 2, px: 4 }}>
                <CaseChart />
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardHeader
                title="Estadisticas por pais"
                subheader={`Puede filtrar por pais alfabeticamente o por totales (asc. o desc.)`}
              />
              <Box sx={{ p: 2, px: 4 }}>
                <DGCountries />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
