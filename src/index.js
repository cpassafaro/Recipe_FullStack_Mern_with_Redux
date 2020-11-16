import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './Testing/reportWebVitals';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { ThemeProvider} from '@material-ui/core/styles';
import Theme from './Theme'


ReactDOM.render(
  <Router>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
