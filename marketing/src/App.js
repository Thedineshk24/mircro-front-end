import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

// components
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <StylesProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/pricing">
              <Pricing />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </>
  );
};

export default App;
