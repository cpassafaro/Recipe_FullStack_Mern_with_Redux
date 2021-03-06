import React from "react";
import "./Header.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from "@material-ui/core/";
import { Route, Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


//how you override the defaults of the material ui values
const useSytles = makeStyles({
  buttonStyle: {
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    textDecoration:'underline',
    // border:'none'
  },
  recipesStyle: {
    display: "flex",
    justifyContent: "flex-start",
    width: '300px',
    color: 'white',
    textDecoration:'underline'
  },
  container: {
    maxWidth:'300px',
    textDecoration:'none'
  }
});

export default function Header() {
  const classes = useSytles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="menu"></IconButton>
        <div className={classes.container}>
          <Link to="/">
            <Typography variant="h6" className={classes.recipesStyle}>
              💣 Recipes
            </Typography>
          </Link>
        </div>
        <Link to="/new">
          <Button className={classes.buttonStyle}>Create Recipe</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

// export default Header;
