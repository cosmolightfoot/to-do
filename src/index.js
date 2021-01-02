import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
