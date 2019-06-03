import React, { Component } from "react";
import OzenSushiRouter from "./OzenSushiRouter";

class OzenSushiMain extends Component {
  render() {
    const { match: url } = this.props;
    return (
      <>
        <OzenSushiRouter url={url} />
      </>
    );
  }
}

export default OzenSushiMain;
