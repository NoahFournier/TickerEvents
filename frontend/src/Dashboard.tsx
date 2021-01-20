import {
  Container,
  createMuiTheme,
  createStyles,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  Paper,
  Theme,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import React, { useState } from "react";
import Chart from "./Chart";
import SearchBar from "./SearchBar";

const useStyles = makeStyles((themeObject: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      padding: themeObject.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    searchBar: {
      zIndex: themeObject.zIndex.drawer + 1,
    },
    fixedHeight: {
      height: 840,
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();
  const [isDarkMode, setDarkMode] = useState(true);
  const [stock, setStock] = useState("");
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <SearchBar
            onSubmit={setStock}
            isDarkMode={isDarkMode}
            setDarkMode={setDarkMode}
          />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Dashboard;
