import React, { PureComponent } from "react";
import style from "../assets/styles/partial/initPage.module.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class InitPage extends PureComponent {
  render() {
    return (
      <section className={style.container_initPage}>
        <Helmet>
          <link
            rel="shortcut icon"
            href={`${process.env.PUBLIC_URL}/Icon_ozen_sushi.ico`}
            sizes="16x16"
          />
        </Helmet>
        <Link to="/ozen_sushi">
          <div className={style.leftside}>
            <h1>Ozen Sushi</h1>
          </div>
        </Link>

        <Link to="/ozen_korea">
          <div className={style.rightside}>
            <h1>Ozen Korea</h1>
          </div>
        </Link>
      </section>
    );
  }
}

export default InitPage;
