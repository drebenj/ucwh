/**
 * Copyright (c) 2020
 *
 * @summary Client app root that utlizes Redux + Axios for calling server
 * @author Josh Dreben (joshdreben@gmail.com)
 *
 * Created At: 07-04-2020
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

// custom components and screens
import * as Page from "./components";

// utilities + redux config
import store from "./store";
import { checkLoggedIn } from "./redux/utils";

checkLoggedIn();

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Page.Landing} />
            <Route exact path="/login" component={Page.Login} />
            <Route exact path="/register" component={Page.Register} />
            <Page.PrivateRoute exact path="/home" component={Page.Home} />
            <Page.PrivateRoute
              exact
              path="/student/:id"
              component={Page.StudentView}
            />
            <Page.PrivateRoute exact path="/apply" component={Page.ApplyPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
