import React, { Component } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Ozen_Korea_Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

class OzenKoreaRouter extends Component {
  render() {
    const { url: ozen_korea } = this.props;
    return (
      <>
        <Switch>
          <Router>
            <div className="font_ubuntu">
              <Header ozen_korea={ozen_korea} />
              <Route exact path={ozen_korea} component={Home} />
              <Route path={`${ozen_korea}/about`} component={About} />
              <Route path={`${ozen_korea}/menu`} component={Ozen_Korea_Menu} />
              <Route path={`${ozen_korea}/contact`} component={Contact} />
              <Footer />
            </div>
          </Router>
        </Switch>
      </>
    );
  }
}

export default OzenKoreaRouter;
