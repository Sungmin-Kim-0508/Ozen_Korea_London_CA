import React, { PureComponent } from "react";
import style from "../../../assets/styles/partial/ozen_sushi_footer.module.scss";

class Footer extends PureComponent {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.footer__information}>
          <div className={style.footer__information__navList}>
            <span className={style.OZen}>O"Zen</span>
            <ul>
              <li className={style.footer__information__navList__ul__li}>
                Home
              </li>
              <li className={style.footer__information__navList__ul__li}>
                About Us
              </li>
              <li className={style.footer__information__navList__ul__li}>
                Menu
              </li>
              <li className={style.footer__information__navList__ul__li}>
                Contact Us
              </li>
            </ul>
          </div>
          <div className={style.location}>
            <div className={style.googleMap}>map</div>
            <div className={style.address}>
              103-541, Oxford St W, London, ON N6H 0H9, CA
            </div>
          </div>
          <div className={style.openingHours}>
            <div className={style.title}>Hours of Operation</div>
            <div className={style.daysOfWeek}>Mon. - Thur. :</div>
            <div className={style.operationTime}>12 p.m - 9 p.m</div>
            <div className={style.daysOfWeek}>Fri. - Sat. :</div>
            <div className={style.operationTime}>12 p.m - 9 p.m</div>
            <div className={style.daysOfWeek}>Sun. :</div>
            <div className={style.operationTime}>12 p.m - 9 p.m</div>
          </div>
        </div>
        <div className={style.footer__information__copyRight}>
          &copy; copyright {new Date().getFullYear()} | Privacy Policy
        </div>
      </div>
    );
  }
}

export default Footer;
