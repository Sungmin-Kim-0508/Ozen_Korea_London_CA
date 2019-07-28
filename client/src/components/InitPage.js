import React, { PureComponent, Fragment, Component } from "react";
import { Helmet } from "react-helmet";
import style from "../assets/styles/partial/initPage.module.scss";

class InitPage extends Component {
  render() {
    return (
      <Fragment>

        <body>
          <section className={style.container_initPage}>

            <div className={style.leftside}>
              <article>
                <h1>Ozen Sushi</h1><a className={style.ozenSushi_button}>Enter</a>
              </article>

            </div>

            <div className={style.rightside}>
              <article>
                <h1>Ozen Korea</h1><a className={style.ozenSushi_button}>Enter</a>
              </article>

            </div>
          </section>
        </body>
      </Fragment>

    );
  }
}

export default InitPage;
