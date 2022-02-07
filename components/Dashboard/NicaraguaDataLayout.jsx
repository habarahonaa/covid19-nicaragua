import React, { useState, useEffect } from "react";
// Next routing
import Link from "next/link";
// Material
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
// API Functions
import { fetchNicaraguaCaseData } from "../../pages/api/disease";
// Components
import { CardActive, CardDeaths, CardRecovered, CardTotal } from "../Cards";
import { CaseChart } from "../Charts/NicaraguaChart";

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

export function NicaraguaDashboardLayout() {
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
      const data = await fetchNicaraguaCaseData();
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
          <Link href="/">
            <ListItem button key="Mundial">
              <ListItemIcon>
                <PublicRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Mundial" />
            </ListItem>
          </Link>
          <Link href="/casos-nicaragua">
            <ListItem button selected key="Nicaragua">
              <ListItemIcon>
                <FlagRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Casos Nicaragua" />
            </ListItem>
          </Link>
          <Link href="/vacunacion-nicaragua">
            <ListItem button key="Nicaragua">
              <ListItemIcon>
                <VaccinesRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Vacunacion Nicaragua" />
            </ListItem>
          </Link>
        </List>
        <Divider variant="middle" />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ pt: 12, pb: 6 }}>
          <Typography variant="h4">
            Estos son los datos para el dia de hoy:
          </Typography>
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
            <CaseChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
