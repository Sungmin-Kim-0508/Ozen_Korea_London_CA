import React from "react";
import MenuCarousel from "./MenuCarousel";
import style from "../../../../assets/styles/partial/ozen_korea_menu.module.scss";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ozen_korea_menu_board } from "./MenuInfo";

const OzenKoreaMenuPresenter = ({ photoIndex }) => {
  return (
    <>
      <Helmet>
        <title>Menu | Ozen Korea</title>
      </Helmet>
      <section className={style.section_1}>
        <div className={style.title}>Menu</div>

        <OzenMenuBoardStepperWrapper>
          <MenuCarousel
            menuObj={ozen_korea_menu_board}
            photoIndex={photoIndex}
          />
        </OzenMenuBoardStepperWrapper>
      </section>
    </>
  );
};

const OzenMenuBoardStepperWrapper = styled.div`
  display: block;
  margin: 0 auto 1rem auto;
  max-width: 500px;
  height: 40rem;
  overflow-y: auto;
  color: white;
  box-shadow: 2px 3px 25px 4px rgba(0, 0, 0, 0.46);
  > img {
    height: 35rem;
  }

  @media (max-width: 500px) {
    /* margin: 1rem; */
    height: 70vh;
    > img {
      height: 60vh;
    }
  }
`;

export default OzenKoreaMenuPresenter;
