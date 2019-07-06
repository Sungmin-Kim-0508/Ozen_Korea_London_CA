import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import style from "../assets/styles/partial/initPage.module.scss";
import 'bootstrap/dist/css/bootstrap.css';

class InitPage extends Component {
  render() {
    return (
      <Fragment>
        <div className={style.container_initPage}>

          <div>
            <div className={style.leftside}>
              Ozen Sushi
            </div>
          </div>

          <div>
            <div className={style.rightside}>
              Ozen Korea
            </div>
          </div>

        </div>
      </Fragment>
    );
  }
}

export default InitPage;
