import React, { Component } from "react";
import OzenSushiRouter from "./OzenSushiRouter";
import { Helmet } from "react-helmet";

class OzenSushiMain extends Component {
  render() {
    const { match: url } = this.props;
    return (
      <>
        <Helmet>
          <link
            rel="shortcut icon"
            href={`${process.env.PUBLIC_URL}/Icon_ozen_sushi.ico`}
            sizes="16x16"
          />
        </Helmet>
        <OzenSushiRouter url={url} />
      </>
    );
  }
}

export default OzenSushiMain;
