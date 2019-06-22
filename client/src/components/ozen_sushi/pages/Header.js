import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../../assets/styles/partial/ozen_sushi_header.module.scss";

const Header = props => {
  const { ozen_sushi } = props;
  return (
    <>
      <ul>
        <li className={style.ozen_sushi_logo}>
          <NavLink to={ozen_sushi} />
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
        <li className={style.contact_us}>
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
    </>
  );
};

export default Header;
