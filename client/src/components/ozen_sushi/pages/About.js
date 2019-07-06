import React, { PureComponent } from "react";
import style from "../../../assets/styles/partial/ozen_sushi_about.module.scss";
import { Helmet } from "react-helmet";

class About extends PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>About | Ozen Sushi</title>
        </Helmet>
        <div className={style.container}>
          <div className={style.section_1}>
            <span />
          </div>
          <div className={style.section_2}>
            <div className={style.wrapper}>
              <div className={style.title}>
                <span className={style.OZen}>O"Zen</span>
                <span className={`${style.korean_japanese} font_roboto`}>
                  Korean & Japanese
                </span>
              </div>
              <div className={style.photo}>
                <span />
              </div>
              <div className={`${style.paragraphs} font_roboto`}>
                <p>
                  Ozen brings authentic Korean cuisine as well as
                  fusion-inspired Japanese favourites.
                </p>
                <p>
                  Ozen first opened the doors in late June in 2008 and with
                  success.
                </p>
                <p>
                  The innovative flavours and style foods from the fingertips of
                  the owner Shawn Ham has influenced people in London to dine at
                  one of the most popular Japanese Korean restaurants in the
                  south western region.
                </p>
                <p>The restaurant located at the heart of downtown.</p>
                <p>
                  Our belief in customer service and quality will entice you to
                  come and dine with us daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
