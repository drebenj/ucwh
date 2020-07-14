/**
 * Copyright (c) 2020
 *
 * @summary Client index
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-04-2020
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import * as theme from "./config/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
