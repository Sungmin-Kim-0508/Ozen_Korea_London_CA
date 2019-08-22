import React from "react";
import style from "../../../assets/styles/partial/ozen_sushi_footer.module.scss";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.information}>
        {/* Section 1 (Navigation List) */}
        <section className={style.navList}>
          <span className={style.OZen}>O"Zen</span>
          <ul className={`${style.navList__ul} font_roboto`}>
            {NavigationList.map((item, index) => (
              <NavLink key={index} className={item.className} to={item.to}>
                <li>{item.navName}</li>
              </NavLink>
            ))}
          </ul>
        </section>

        {/* Section 2 (Opening Hours) */}
        <section className={style.openingHours}>
          <div className={style.title}>Opening Hours</div>
          <div className={style.daysOfWeek}>Mon - Thur</div>
          <div className={style.operationTime}>12 PM - 9 PM</div>
          <div className={style.daysOfWeek}>Fri - Sat</div>
          <div className={style.operationTime}>12 PM - 9:30 PM</div>
          <div className={style.daysOfWeek}>Sun</div>
          <div className={style.operationTime}>12 PM - 8:30 PM</div>
        </section>
      </div>
      <div className={`${style.copyRight} font_roboto`}>
        &copy; copyright {new Date().getFullYear()} | Privacy Policy
      </div>
    </div>
  );
};

const NavigationList = [
  {
    className: style.navList__ul__li,
    to: `${routes.ozen_sushi_root}${routes.home}`,
    navName: "Home"
  },
  {
    className: style.navList__ul__li,
    to: `${routes.ozen_sushi_root}${routes.about}`,

    navName: "About Us"
  },
  {
    className: style.navList__ul__li,
    to: `${routes.ozen_sushi_root}${routes.menu}`,
    navName: "Menu"
  },
  {
    className: style.navList__ul__li,
    to: `${routes.ozen_sushi_root}${routes.contact}`,
    navName: "Contact Us"
  }
];

export default Footer;
