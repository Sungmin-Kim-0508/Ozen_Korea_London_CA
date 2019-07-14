import React from "react";
import style from "../../../../assets/styles/partial/ozen_sushi_menu.module.scss";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import MenuRouter from "./MenuRouter";

const MenuPresenter = props => {
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
                <Link key={index} to={menu.to}>
                  {menu.name}
                </Link>
              ))}
            </div>

            <div className={style.photos}>
              <MenuRouter />
            </div>
          </section>
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
