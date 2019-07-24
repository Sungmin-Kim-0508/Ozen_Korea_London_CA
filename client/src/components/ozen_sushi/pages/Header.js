import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "../../../assets/styles/partial/ozen_sushi_header.module.scss";
import styled from "styled-components";
import logo from "../../../assets/images/Ozen_sushi_Logo.jpg";

const Item = styled.li`
  border-bottom: 3px solid
    ${props => (props.current ? "#debe07" : "transparent")};
  transition: border-bottom;
`;

const Header = ({ ozen_sushi, location: { pathname } }) => {
  return (
    <nav>
      <ul className={style.header__nav__ul}>
        <Item>
          <NavLink id="logo" to={ozen_sushi}>
            <img className={style.ozen_sushi_logo} src={logo} />
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
      </ul>
    </nav>
  );
};

export default withRouter(Header);
