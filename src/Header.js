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
  },
  recipesStyle: {
    display: "flex",
    justifyContent: "flex-start",
    width: '300px',
    color: 'white'
  },
  container: {
    maxWidth:'300px'
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
        <Link to="/update">
          <Button className={classes.buttonStyle}>Update Recipe</Button>
        </Link>
        <Link to="/delete">
          <Button className={classes.buttonStyle}>Delete Recipe</Button>
        </Link>
        <Link to="/new">
          <Button className={classes.buttonStyle}>Create Recipe</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

// export default Header;
