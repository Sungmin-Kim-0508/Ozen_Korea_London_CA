import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import OzenSushiMain from "./ozen_sushi/OzenSushiMain";
import OzenKoreaMain from "./ozen_korea/OzenKoreaMain";
import InitPage from "./InitPage";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={InitPage} />
      <Route path="/ozen_sushi" component={OzenSushiMain} />
      <Route path="/ozen_korea" component={OzenKoreaMain} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
