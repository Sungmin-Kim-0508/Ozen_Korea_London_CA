import React, { Component } from "react";
import OzenKoreaRouter from "./OzenKoreaRouter";
import { Helmet } from "react-helmet";

class OzenKoreaMain extends Component {
  render() {
    const {
      match: { url }
    } = this.props;
    return (
      <>
        <Helmet>
          <link
            rel="shortcut icon"
            href={`${process.env.PUBLIC_URL}/Icon_ozen_korea.ico`}
            sizes="16x16"
          />
        </Helmet>
        <OzenKoreaRouter url={url} />
      </>
    );
  }
}

export default OzenKoreaMain;
