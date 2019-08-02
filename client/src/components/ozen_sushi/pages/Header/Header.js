import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "../../../../assets/styles/partial/ozen_sushi_header.module.scss";
import styled from "styled-components";
import logo from "../../../../assets/images/Ozen_sushi_Logo.jpg";

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
            to={ozen_sushi}
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
          <Item current={pathname === `${ozen_sushi}`} className={style.home}>
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={ozen_sushi}
              onClick={foldMenu}
            >
              Home
            </NavLink>
          </Item>
          <Item
            current={pathname === `${ozen_sushi}/about`}
            className={style.about}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${ozen_sushi}/about`}
              onClick={foldMenu}
            >
              About
            </NavLink>
          </Item>
          <Item
            current={pathname === `${ozen_sushi}/menu`}
            className={style.menu}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${ozen_sushi}/menu`}
              onClick={foldMenu}
            >
              Menu
            </NavLink>
          </Item>
          <Item
            current={pathname === `${ozen_sushi}/contact`}
            className={style.contact_us}
          >
            <NavLink
              className={style.container_sushi_header__ul__li__a}
              to={`${ozen_sushi}/contact`}
              onClick={foldMenu}
            >
              Contact Us
            </NavLink>
          </Item>
          <Item>
            <a className={style.ozen_korea} href={`/ozen_korea`}>
              Go to Ozen Korea
            </a>
          </Item>
        </div>
      </ul>

      {/*      Desktop      */}
      <ul className={style.header__nav__ul}>
        <Item id="logo" className={style.logo}>
          <NavLink id={style.logo} to={ozen_sushi}>
            <img
              className={style.ozen_sushi_logo}
              src={logo}
              alt="ozen sushi logo"
            />
          </NavLink>
        </Item>
        <Item current={pathname === `${ozen_sushi}`} className={style.home}>
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={ozen_sushi}
          >
            Home
          </NavLink>
        </Item>
        <Item
          current={pathname === `${ozen_sushi}/about`}
          className={style.about}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/about`}
          >
            About
          </NavLink>
        </Item>
        <Item
          current={pathname === `${ozen_sushi}/menu`}
          className={style.menu}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/menu`}
          >
            Menu
          </NavLink>
        </Item>
        <Item
          current={pathname === `${ozen_sushi}/contact`}
          className={style.contact_us}
        >
          <NavLink
            className={style.container_sushi_header__ul__li__a}
            to={`${ozen_sushi}/contact`}
          >
            Contact Us
          </NavLink>
        </Item>
        <Item>
          <a className={style.ozen_korea} href={`/ozen_korea`}>
            Go to Ozen Korea
          </a>
        </Item>
      </ul>
    </nav>
  );
};

export default withRouter(Header);
