import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import MenuCarousel from "./MenuCarousel";
import MenuRouter from "./MenuRouter";
import style from "../../../../assets/styles/partial/ozen_sushi_menu.module.scss";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Modal } from "@material-ui/core";
import { ozen_sushi_menu_board } from "./MenuInfo";

const MenuPresenter = props => {
  const {
    photoIndex,
    checked,
    isModalOpened,
    isMenuModalOpened,
    handleToggleCollapse,
    changeCheckedToFalse,
    handleChangeMenuInfo,
    handleOpenModal,
    handleOpenMenuModal,
    handleCloseMenuModal,
    handleCloseModal
  } = props;
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
          <section className={style.section_1}>
            <div className={style.title}>Menu</div>
            <div className={style.moreMenu} onClick={handleOpenMenuModal}>
              <span className="font_roboto">See More Menu</span>
            </div>
            <div className={style.category}>
              {menuLinks.map((menu, index) => (
                <Link key={index} to={menu.to} onClick={changeCheckedToFalse}>
                  {menu.name}
                </Link>
              ))}
            </div>

            <Collapse in={checked} collapsedHeight="300px">
              <div className={style.photos}>
                <MenuRouter
                  photoIndex={photoIndex}
                  handleOpenModal={handleOpenModal}
                  isModalOpened={isModalOpened}
                  handleCloseModal={handleCloseModal}
                  handleChangeMenuInfo={handleChangeMenuInfo}
                />
              </div>
            </Collapse>
          </section>
          <IconButton size="medium" onClick={handleToggleCollapse}>
            {arrowBtn}
          </IconButton>
        </Router>
      </Switch>
      {/* Modal for 'see more menu' */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isMenuModalOpened}
        onClose={handleCloseMenuModal}
      >
        <OzenMenuBoardStepperWrapper>
          <MenuCarousel
            menuObj={ozen_sushi_menu_board}
            photoIndex={photoIndex}
          />
        </OzenMenuBoardStepperWrapper>
      </Modal>
    </>
  );
};

const OzenMenuBoardStepperWrapper = styled.div`
  display: block;
  margin: 10px auto 8rem auto;
  max-width: 600px;
  height: 37rem;
  overflow-y: auto;
  color: white;

  @media (max-width: 500px) {
    margin: 4rem 1rem 3rem 1rem;
    height: 18rem;
  }
`;

const baseUrl = "/ozen_sushi/menu";
const menuLinks = [
  {
    name: "Appetizers",
    to: `${baseUrl}`
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

export default withRouter(MenuPresenter);
