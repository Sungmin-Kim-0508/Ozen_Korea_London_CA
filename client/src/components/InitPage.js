import React, { Component } from "react";
import { Link } from "react-router-dom";

class InitPage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="ozen_sushi">Ozen Sushi</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="ozen_korea">Ozen Korea</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default InitPage;
