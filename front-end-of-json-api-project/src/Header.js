import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './Header.css';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core/';
import {Route, Link, Redirect} from 'react-router-dom';



class Header extends Component {
    render(){
        return (<AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="primary" aria-label="menu">
          </IconButton>
          <Link to='/'>
            <Typography variant="h6">
            💣   Recipes
            </Typography>
          </Link>
          <Link to='/update'>
            <Button color="secondary">Update Recipe</Button>
          </Link>
          <Link to='/delete'>
            <Button color="secondary">Delete Recipe</Button>
          </Link>
          <Link to='/new'>
            <Button color="secondary">Create Recipe</Button>
          </Link>
        </Toolbar>
      </AppBar>

        )
    }
}

export default Header;


