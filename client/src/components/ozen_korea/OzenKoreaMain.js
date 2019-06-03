import React, { Component } from "react";
import OzenKoreaRouter from "./OzenKoreaRouter";

class OzenKoreaMain extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    return (
      <>
        <OzenKoreaRouter url={url} />
      </>
    );
  }
}

export default OzenKoreaMain;
