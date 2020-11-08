import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
