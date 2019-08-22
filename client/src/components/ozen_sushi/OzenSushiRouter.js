import React, { Component } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./pages/Header/Header";
import About from "../ozen_sushi/pages/About";
import Contact from "../ozen_sushi/pages/Contact";
import Footer from "./pages/Footer";
import Menu from "./pages/Menu/";
import { routes } from "../routes";

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
            <Route
              exact
              path={`${routes.ozen_sushi_root}${routes.home}`}
              component={Home}
            />
            <Route
              path={`${routes.ozen_sushi_root}${routes.about}`}
              component={About}
            />
            <Route
              path={`${routes.ozen_sushi_root}${routes.menu}`}
              component={Menu}
            />
            <Route
              path={`${routes.ozen_sushi_root}${routes.contact}`}
              component={Contact}
            />
            {/* <Route path={`${routes.ozen_sushi_root}${routes.about}`} component={About} />
            <Route path={`${routes.ozen_sushi_root}${routes.menu}`} component={Menu} />
            <Route path={`${routes.ozen_sushi_root}${routes.contact}`} component={Contact} /> */}
            <Footer />
          </Router>
        </Switch>
      </>
    );
  }
}

export default OzenSushiRouter;
