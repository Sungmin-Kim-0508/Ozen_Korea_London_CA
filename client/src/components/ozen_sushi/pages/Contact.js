import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";
import style from "../../../assets/styles/partial/ozen_sushi_contactUs.module.scss";

class Contact extends PureComponent {
  render() {
    return (
      <div className={style.container}>
        <Helmet>
          <title>Contact Us | Ozen Sushi </title>
        </Helmet>
        <section className={style.section_1}>
          <span />
        </section>
        <section className={style.section_2}>
          <div className={style.title}>Contact Us</div>
          <div className={`${style.phone_number} font_roboto`}>
            <i className="fas fa-phone-alt" /> 519-642-2558
          </div>
          <div className={style.map}>map</div>
        </section>
      </div>
    );
  }
}

export default Contact;
