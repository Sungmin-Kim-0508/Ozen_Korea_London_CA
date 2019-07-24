import React from "react";
import style from "../../../assets/styles/partial/ozen_sushi_footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const NavigationList = [
    {
      className: style.navList__ul__li,
      navName: "Home"
    },
    {
      className: style.navList__ul__li,
      navName: "About Us"
    },
    {
      className: style.navList__ul__li,
      navName: "Menu"
    },
    {
      className: style.navList__ul__li,
      navName: "Contact Us"
    }
  ];
  return (
    <div className={style.footer}>
      <div className={style.information}>
        {/* Section 1 (Navigation List) */}
        <section className={style.navList}>
          <span className={style.OZen}>O"Zen</span>
          <ul className={`${style.navList__ul} font_roboto`}>
            {NavigationList.map((item, index) => (
              <NavLink key={index} className={item.className}>
                <li>{item.navName}</li>
              </NavLink>
            ))}
            {/* <li className={style.li}>Home</li>
            <li className={style.li}>About Us</li>
            <li className={style.li}>Menu</li>
            <li className={style.li}>Contact Us</li> */}
          </ul>
        </section>

        {/* Section 2 (Opening Hours) */}
        <section className={style.openingHours}>
          <div className={style.title}>Opening Hours</div>
          <div className={style.daysOfWeek}>Mon. - Thur. :</div>
          <div className={style.operationTime}>12 p.m - 9 p.m</div>
          <div className={style.daysOfWeek}>Fri. - Sat. : </div>
          <div className={style.operationTime}>12 p.m - 9 p.m</div>
          <div className={style.daysOfWeek}>Sun. : </div>
          <div className={style.operationTime}>12 p.m - 9 p.m</div>
        </section>
      </div>
      <div className={`${style.copyRight} font_roboto`}>
        &copy; copyright {new Date().getFullYear()} | Privacy Policy
      </div>
    </div>
  );
};

export default Footer;
