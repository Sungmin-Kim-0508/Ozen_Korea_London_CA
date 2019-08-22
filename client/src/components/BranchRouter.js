import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import OzenSushiMain from "./ozen_sushi/OzenSushiMain";
import { routes } from "./routes";

export default () => (
  <Router>
    <Switch>
      <Route path={routes.ozen_sushi_root} component={OzenSushiMain} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
