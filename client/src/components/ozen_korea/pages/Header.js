import React from "react";
import style from "../../../assets/styles/partial/ozen_korea_header.module.scss";

import { Link } from "react-router-dom";

const Header = ({ ozen_korea }) => {
  const logoImageUrl = `${
    process.env.PUBLIC_URL
  }/images/Ozen_Korea/ozen_korea_logo.png`;

  const toggleMenu = () => {
    let menuList = document.querySelector(
      "header > nav > ul#mobile_ul > div#mobile_li"
    );
    if (menuList.style.display === "grid") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "grid";
    }
  };

  const foldMenu = () => {
    let menuList = document.querySelector(
      "header > nav > ul#mobile_ul > div#mobile_li"
    );
    menuList.style.display = "none";
  };

  return (
    <header id="navbar" className={style.header}>
      {window.scrollTo(0, 0)}
      <nav className={style.header__nav}>
        {/*       Mobile       */}
        <ul id="mobile_ul" className={style.header__nav__ul_mobile}>
          <div className={style.header__nav__ul_mobile__logo_toggleBtn}>
            {/* Logo */}
            <span className={style.header__nav__ul_mobile__logo_toggleBtn_logo}>
              <Link to={ozen_korea}>
                <img src={logoImageUrl} alt="ozen korea" id={style.logoImage} />
              </Link>
            </span>
            {/* Toggle Button (Mobile) */}
            <button
              className={style.header__nav__ul_mobile__logo_toggleBtn_toggleBtn}
              onClick={toggleMenu}
            >
              <i className="fas fa-bars" />
            </button>
          </div>

          {/* List Item */}
          <div id="mobile_li" className={style.header__nav__mobile_listItems}>
            <li className={style.header__nav__ul__li}>
              <Link to={ozen_korea} onClick={foldMenu}>
                Home
              </Link>
            </li>
            <li className={style.header__nav__ul__li}>
              <Link to={`${ozen_korea}/about`} onClick={foldMenu}>
                About
              </Link>
            </li>
            <li className={style.header__nav__ul__li}>
              <Link to={`${ozen_korea}/menu`} onClick={foldMenu}>
                Menu
              </Link>
            </li>
            <li className={style.header__nav__ul__li}>
              <Link to={`${ozen_korea}/contact`} onClick={foldMenu}>
                Contact Us
              </Link>
            </li>
            <li className={style.header__nav__ul__li} id={style.ozen_sushi}>
              <a href="/ozen_sushi">Go to Ozen Sushi</a>
            </li>
          </div>
        </ul>

        {/* Desktop */}
        <ul className={style.header__nav__ul}>
          {/* Logo */}
          <li
            className={`${style.header__nav__ul__li} ${
              style.header__nav__ul__li_logoImage
            } logoImage`}
          >
            <Link to={ozen_korea}>
              <img src={logoImageUrl} alt="ozen korea" id={style.logoImage} />
            </Link>
          </li>
          <li className={style.header__nav__ul__li}>
            <Link to={ozen_korea}>Home</Link>
          </li>
          <li className={style.header__nav__ul__li}>
            <Link to={`${ozen_korea}/about`}>About</Link>
          </li>
          <li className={style.header__nav__ul__li}>
            <Link to={`${ozen_korea}/menu`}>Menu</Link>
          </li>
          <li className={style.header__nav__ul__li}>
            <Link to={`${ozen_korea}/contact`}>Contact Us</Link>
          </li>
          <li className={style.header__nav__ul__li} id={style.ozen_sushi}>
            <a href="/ozen_sushi">Go to Ozen Sushi</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
