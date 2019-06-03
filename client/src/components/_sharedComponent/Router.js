import React from "react";
import About from "../ozen_sushi/pages/About";
import Home from "../ozen_sushi/pages/Home";
import Contact from "../ozen_sushi/pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => (
  <Router>
    <Route exact path="/" component={Home} />
    {/* <Route path="/menu" component={} /> */}
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>
);
