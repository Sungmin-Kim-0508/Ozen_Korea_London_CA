import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../../assets/styles/partial/ozen_sushi_header.module.scss";
import logo from "../../../assets/images/Ozen_sushi_Logo.jpg";

const Header = props => {
  const { ozen_sushi } = props;
  return (
    <nav>
      <ul className={style.header__nav__ul}>
        <li>
          <NavLink to={ozen_sushi}>
            <img className={style.ozen_sushi_logo} src={logo} />
          </NavLink>
        </li>
        <li className={style.home}>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={ozen_sushi}
          >
            Home
          </NavLink>
        </li>
        <li className={style.about}>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/about`}
          >
            About
          </NavLink>
        </li>
        <li className={style.menu}>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/menu`}
          >
            Menu
          </NavLink>
        </li>
        <li className={style.contact_us}>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/contact`}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
