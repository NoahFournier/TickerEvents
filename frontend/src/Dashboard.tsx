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
      height: 240,
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();
  const [isDarkMode, setDarkMode] = useState(true);
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
          <SearchBar isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <p>CHART GOES HERE</p>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
};

export default Dashboard;
