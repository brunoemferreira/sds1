import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Header from "./components/Header/index";
import Records from "./pages/Records/index";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/records">
        <Records />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
