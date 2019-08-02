import React from "react";
import MenuCarousel from "./MenuCarousel";
import style from "../../../../assets/styles/partial/ozen_korea_menu.module.scss";
import styled from "styled-components";
import { Modal } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { ozen_korea_menu_board } from "./MenuInfo";

const OzenKoreaMenuPresenter = ({
  photoIndex,
  isMenuModalOpened,
  handleOpenMenuModal,
  handleCloseMenuModal
}) => {
  return (
    <>
      <Helmet>
        <title>Menu | Ozen Korea</title>
      </Helmet>
      <section className={style.section_1}>
        <div className={style.title}>Menu</div>
        <div className={style.moreMenu} onClick={handleOpenMenuModal}>
          <span className="font_roboto">See the Menu Board</span>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isMenuModalOpened}
          onClose={handleCloseMenuModal}
        >
          <OzenMenuBoardStepperWrapper>
            <MenuCarousel
              menuObj={ozen_korea_menu_board}
              photoIndex={photoIndex}
            />
          </OzenMenuBoardStepperWrapper>
        </Modal>
      </section>
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
    height: 30rem;
  }
`;

export default OzenKoreaMenuPresenter;
