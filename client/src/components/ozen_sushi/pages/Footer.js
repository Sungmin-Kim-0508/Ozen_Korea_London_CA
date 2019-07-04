import React, { PureComponent } from "react";
import style from "../../../assets/styles/partial/ozen_sushi_footer.module.scss";

class Footer extends PureComponent {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.information}>
          {/* Section 1 (Navigation List) */}
          <section className={style.navList}>
            <span className={style.OZen}>O"Zen</span>
            <ul className={`${style.navList__ul} font_roboto`}>
              <li className={style.li}>Home</li>
              <li className={style.li}>About Us</li>
              <li className={style.li}>Menu</li>
              <li className={style.li}>Contact Us</li>
            </ul>
          </section>
          {/* Section 2 (Map, Location) */}
          <section className={style.location}>
            <div className={style.googleMap}>map</div>
            <div className={style.address}>
              <span className={style.pinpoint_img} />
              <div>103-541, Oxford St W, London,</div>
              <div>ON N6H 0H9, CA</div>
            </div>
          </section>
          {/* Section 3 (Opening Hours) */}
          <section className={style.openingHours}>
            <div className={style.title}>Hours of Operation</div>
            <div className={style.daysOfWeek}>Mon. - Thur. :</div>
            <div className={style.operationTime}>12 p.m - 9 p.m</div>
            <div className={style.daysOfWeek}>Fri. - Sat. : </div>
            <div className={style.operationTime}>12 p.m - 9 p.m</div>
            <div className={style.daysOfWeek}>Sun. : </div>
            <div className={style.operationTime}>12 p.m - 9 p.m</div>
          </section>
        </div>
        <div className={style.copyRight}>
          &copy; copyright {new Date().getFullYear()} | Privacy Policy
        </div>
      </div>
    );
  }
}

export default Footer;
