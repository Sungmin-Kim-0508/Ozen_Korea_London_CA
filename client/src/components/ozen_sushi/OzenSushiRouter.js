import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../ozen_sushi/pages/Header";
import About from "../ozen_sushi/pages/About";
import Contact from "../ozen_sushi/pages/Contact";

class OzenSushiRouter extends Component {
  render() {
    const {
      url: { url }
    } = this.props;
    return (
      <>
        <Switch>
          <Router>
            <Header ozen_sushi={url} />
            <Route exact path={url} component={Home} />
            <Route path={`${url}/about`} component={About} />
            <Route path={`${url}/contact`} component={Contact} />
          </Router>
        </Switch>
      </>
    );
  }
}

export default OzenSushiRouter;
