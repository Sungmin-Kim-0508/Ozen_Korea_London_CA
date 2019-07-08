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
        {/* <section className={style.section_1} /> */}
        <section className={style.section_2}>
          <div className={style.title}>Contact Us</div>
          <div className={`${style.phone_number} font_roboto`}>
            <i className="fas fa-phone-alt" /> 519-642-2558
          </div>
          <div className={style.location}>
            <div className={style.googleMap}>map</div>
            <div className={style.address}>
              <span className={style.pinpoint_img} />
              <div>
                <i className="fas fa-map-marker-alt" /> 103-541, Oxford St W,
                London,
              </div>
              <div>ON N6H 0H9, CA</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
