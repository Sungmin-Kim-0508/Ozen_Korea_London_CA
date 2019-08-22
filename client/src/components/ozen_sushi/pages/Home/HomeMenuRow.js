import React from "react";
import { NavLink } from "react-router-dom";
import style from "./homeMenuRow.module.scss";
const HomeMenuRow = ({ menuName, menuDesc, price, to, imageUrl, alt }) => {
  const imgComponent = (
    <div className={style.section_4__row__menu_photo}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
  const menuDescComponent = (
    <div className={style.section_4__row__menu}>
      <NavLink className={style.menu__link} to={to}>
        <span className={style.menu__name}>{menuName}</span>
        <span className={`${style.menu__detail} font_roboto`}>{menuDesc}</span>
        <span className={style.menu__price}>${price}</span>
      </NavLink>
    </div>
  );
  return (
    <>
      <div id={style.desktop} className={style.section_4__row}>
        {imgComponent}
        {menuDescComponent}
      </div>
    </>
  );
};

export default HomeMenuRow;
