import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './Header.css';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

class Header extends Component {
    render(){
        return (<div>
            <div className = "header">💣   Recipes</div>
        </div>

        )
    }
}

export default Header;