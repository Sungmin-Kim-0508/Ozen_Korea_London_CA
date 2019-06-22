import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/partial/initPage.module.scss";

class InitPage extends Component {
  render() {
    return (
      <div className={style.container_initPage}>
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
