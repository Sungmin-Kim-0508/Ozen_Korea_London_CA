import React from "react";
import style from "../../../../assets/styles/partial/ozen_sushi_menu.module.scss";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MenuRouter from "./MenuRouter";

import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Collapse from "@material-ui/core/Collapse";

const MenuPresenter = props => {
  const { checked, handleToggleCollapse, changeCheckedToFalse } = props;
  const arrowBtn = checked ? (
    <ArrowUpwardIcon fontSize="inherit" />
  ) : (
    <ArrowDownwardIcon fontSize="inherit" />
  );
  return (
    <>
      <Switch>
        <Router>
          <Helmet>
            <title>Menu | Ozen Sushi</title>
          </Helmet>
          <section className={style.section_2}>
            <div className={style.title}>Menu</div>
            <div className={style.category}>
              {menuLinks.map((menu, index) => (
                <Link key={index} to={menu.to} onClick={changeCheckedToFalse}>
                  {menu.name}
                </Link>
              ))}
            </div>

            <Collapse in={checked} collapsedHeight="300px">
              <div className={style.photos}>
                <MenuRouter />
              </div>
            </Collapse>
          </section>
          <IconButton size="medium" onClick={handleToggleCollapse}>
            {arrowBtn}
          </IconButton>
        </Router>
      </Switch>
    </>
  );
};

const baseUrl = "/ozen_sushi/menu";
const menuLinks = [
  {
    name: "Appetizers",
    to: `${baseUrl}/appetizers`
  },
  {
    name: "Roll Sets",
    to: `${baseUrl}/roll_sets`
  },
  {
    name: "Main",
    to: `${baseUrl}/main_menu`
  },
  {
    name: "Sushi or Sashimi Sets",
    to: `${baseUrl}/sushi_or_sashimi_sets`
  },
  {
    name: "Sushi & Sashimi",
    to: `${baseUrl}/sashimi_and_sushi`
  },
  {
    name: "Roll",
    to: `${baseUrl}/rolls`
  },
  {
    name: "Udon",
    to: `${baseUrl}/udons`
  },
  {
    name: "Okonomiyaki",
    to: `${baseUrl}/okonomiyakis`
  }
];

export default MenuPresenter;
