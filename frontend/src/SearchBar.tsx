import {
  AppBar,
  createStyles,
  fade,
  FormControl,
  FormControlLabel,
  InputBase,
  makeStyles,
  Switch,
  Theme,
  Toolbar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: "wrap",
    },
    grow: {
      flexGrow: 1,
    },
    search: {
      position: "relative",
      marginLeft: 0,
      marginRight: theme.spacing(2),
      width: "40%",
      backgroundColor: fade(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
    modeToggle: {
      marginLeft: "auto",
    },
  })
);

interface Props {
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ isDarkMode, setDarkMode }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <FormControl>
              <InputBase
                placeholder="Enter Stock Symbol..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </FormControl>
          </div>
          <div className={classes.modeToggle}>
            <FormControlLabel
              label={"Toggle Dark Mode"}
              control={<Switch onClick={() => setDarkMode(!isDarkMode)} />}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchBar;
