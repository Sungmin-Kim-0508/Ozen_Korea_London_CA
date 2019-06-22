import React from "react";
import { NavLink } from "react-router-dom";
import style from "../../../assets/styles/partial/ozen_sushi_header.module.scss";

const Header = props => {
  const { ozen_sushi } = props;
  return (
    <div className={style.container_sushi_header}>
      <ul>
        <li>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={ozen_sushi}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/about`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/contact`}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
