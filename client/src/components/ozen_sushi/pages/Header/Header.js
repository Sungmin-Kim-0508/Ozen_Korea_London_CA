import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "../../../../assets/styles/partial/ozen_sushi_header.module.scss";
import styled from "styled-components";
import logo from "../../../../assets/images/Ozen_sushi_Logo.jpg";
import { routes } from "../../../routes";

const Item = styled.li`
  border-bottom: 3px solid
    ${props => (props.current ? "#debe07" : "transparent")};
  transition: border-bottom;
`;

const Header = ({ ozen_sushi, location: { pathname } }) => {
  // Fire to toggle the menu
  const toggleMenu = () => {
    let liTagNodes = document.querySelectorAll(
      "nav > ul#mobile > div#listItem"
    );
    if (liTagNodes[0].style.display === "grid") {
      liTagNodes[0].style.display = "none";
    } else {
      liTagNodes[0].style.display = "grid";
    }
  };

  const foldMenu = () => {
    let liTagNodes = document.querySelectorAll(
      "nav > ul#mobile > div#listItem"
    );
    liTagNodes[0].style.display = "none";
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      {/* Scroll To the Top */}
      {window.scrollTo(0, 0)}
      {/*     Mobile     */}
      <ul id="mobile" className={style.header__nav__ul_mobile}>
        <div className={style.header__nav__ul_mobile__logo_toggleBtn}>
          <NavLink
            id={style.logo}
            to={`${routes.ozen_sushi_root}${routes.home}`}
            className={style.header__nav__ul_mobile__logo_toggleBtn__logo}
            onClick={foldMenu}
          >
            <img src={logo} alt="ozen sushi logo" />
          </NavLink>

          <button
            className={style.header__nav__ul_mobile__logo_toggleBtn__toggleBtn}
            onClick={toggleMenu}
          >
            <i className="fas fa-bars" />
          </button>
        </div>
        <div id="listItem" className={style.header__nav__ul_mobile__li}>
          <Item
            current={pathname === `${routes.ozen_sushi_root}${routes.home}`}
            className={style.home}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${routes.ozen_sushi_root}${routes.home}`}
              onClick={foldMenu}
            >
              Home
            </NavLink>
          </Item>
          <Item
            current={pathname === `${routes.ozen_sushi_root}${routes.about}`}
            className={style.about}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${routes.ozen_sushi_root}${routes.about}`}
              onClick={foldMenu}
            >
              About
            </NavLink>
          </Item>
          <Item
            current={pathname === `${routes.ozen_sushi_root}${routes.menu}`}
            className={style.menu}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${routes.ozen_sushi_root}${routes.menu}`}
              onClick={foldMenu}
            >
              Menu
            </NavLink>
          </Item>
          <Item
            current={pathname === `${routes.ozen_sushi_root}${routes.contact}`}
            className={style.contact_us}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${routes.ozen_sushi_root}${routes.contact}`}
              onClick={foldMenu}
            >
              Contact Us
            </NavLink>
          </Item>
        </div>
      </ul>

      {/*      Desktop      */}
      <ul className={style.header__nav__ul}>
        <Item id="logo" className={style.logo}>
          <NavLink
            id={style.logo}
            to={`${routes.ozen_sushi_root}${routes.home}`}
          >
            <img
              className={style.ozen_sushi_logo}
              src={logo}
              alt="ozen sushi logo"
            />
          </NavLink>
        </Item>
        <Item
          current={pathname === `${routes.ozen_sushi_root}${routes.home}`}
          className={style.home}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${routes.ozen_sushi_root}${routes.home}`}
          >
            Home
          </NavLink>
        </Item>
        <Item
          current={pathname === `${routes.ozen_sushi_root}${routes.about}`}
          className={style.about}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${routes.ozen_sushi_root}${routes.about}`}
          >
            About
          </NavLink>
        </Item>
        <Item
          current={pathname === `${routes.ozen_sushi_root}${routes.menu}`}
          className={style.menu}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${routes.ozen_sushi_root}${routes.menu}`}
          >
            Menu
          </NavLink>
        </Item>
        <Item
          current={pathname === `${routes.ozen_sushi_root}${routes.contact}`}
          className={style.contact_us}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${routes.ozen_sushi_root}${routes.contact}`}
          >
            Contact Us
          </NavLink>
        </Item>
      </ul>
    </nav>
  );
};

export default withRouter(Header);
