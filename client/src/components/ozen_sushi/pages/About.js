import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";

class About extends PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>About | Ozen Sushi</title>
        </Helmet>
        <p>This is Ozen_Sushi_About</p>
      </div>
    );
  }
}

export default About;
