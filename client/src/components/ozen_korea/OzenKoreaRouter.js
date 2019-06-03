import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./pages/Header";

class OzenKoreaRouter extends Component {
  render() {
    const { url } = this.props;
    return (
      <>
        <Switch>
          <Router>
            <Header url={url} />
            <Route exact path={url} component={Home} />
            <Route path={`${url}/about`} component={About} />
            <Route path={`${url}/contact`} component={Contact} />
          </Router>
        </Switch>
      </>
    );
  }
}

export default OzenKoreaRouter;
