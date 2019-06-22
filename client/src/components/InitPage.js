import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import style from "../assets/styles/partial/initPage.module.scss";

class InitPage extends Component {
  render() {
    return (
      <div className={style.container_initPage}>
        <ul>
          <li>
            <NavLink
              className={style.container_initPage__ul__li__a}
              to="ozen_sushi"
            >
              Ozen Sushi
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              className={style.container_initPage__ul__li__a}
              to="ozen_korea"
            >
              Ozen Korea
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default InitPage;
