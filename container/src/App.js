import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

// router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// MUI
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const genrateClassName = createGenerateClassName({
  productionPrefix : "co"
});

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <StylesProvider generateClassName={genrateClassName}>
            <MarketingApp />
          </StylesProvider>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
