/**
 * ## Description ##
 * - Rendering the photos of the menu with the business logic
 *   of react-router-dom library
 * - This current file is imported in MenuPresenter.js
 */
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import MenuCarousel from "./MenuCarousel";
import Modal from "@material-ui/core/Modal";
import {
  appetizers,
  rollSets,
  mainMenu,
  sushiOrSashimiSets,
  sashimiAndSushi,
  rolls,
  udons,
  okonomiyakis
} from "./MenuInfo";

const MenuRouter = ({
  photoIndex,
  handleOpenModal,
  isModalOpened,
  handleCloseModal
}) => {
  const baseUrl = "/ozen_sushi/menu";
  const routes = [
    {
      path: `${baseUrl}`,
      exact: true,
      renderedImage: () => (
        <>
          {appetizers.map((appetizer, index) => (
            <Image
              key={appetizer.id}
              imageUrl={appetizer.imageUrl}
              id={index}
              // append the event where modal is opened when clicked.
              // handleOpenModal comes from MenuContainer.js
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={appetizers} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/roll_sets`,
      renderedImage: () => (
        <>
          {rollSets.map((rollSet, index) => (
            <Image
              key={rollSet.id}
              id={index}
              imageUrl={rollSet.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={rollSets} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/main_menu`,
      renderedImage: () => (
        <>
          {mainMenu.map((item, index) => (
            <Image
              key={item.id}
              id={index}
              imageUrl={item.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={mainMenu} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/sushi_or_sashimi_sets`,
      renderedImage: () => (
        <>
          {sushiOrSashimiSets.map((item, index) => (
            <Image
              key={item.id}
              id={index}
              imageUrl={item.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel
                menuObj={sushiOrSashimiSets}
                photoIndex={photoIndex}
              />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/sashimi_and_sushi`,
      renderedImage: () => (
        <>
          {sashimiAndSushi.map((item, index) => (
            <Image
              key={item.id}
              id={index}
              imageUrl={item.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={sashimiAndSushi} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/rolls`,
      renderedImage: () => (
        <>
          {rolls.map((item, index) => (
            <Image
              key={item.id}
              id={index}
              imageUrl={item.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={rolls} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/udons`,
      renderedImage: () => (
        <>
          {udons.map((item, index) => (
            <Image
              key={item.id}
              id={index}
              imageUrl={item.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={udons} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    },
    {
      path: `${baseUrl}/okonomiyakis`,
      renderedImage: () => (
        <>
          {okonomiyakis.map((item, index) => (
            <Image
              key={item.id}
              id={index}
              imageUrl={item.imageUrl}
              onClick={handleOpenModal}
            />
          ))}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={isModalOpened}
            onClose={handleCloseModal}
          >
            <OzenStepperWrapper>
              <MenuCarousel menuObj={okonomiyakis} photoIndex={photoIndex} />
            </OzenStepperWrapper>
          </Modal>
        </>
      )
    }
  ];
  return (
    <>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.renderedImage}
          />
        );
      })}
    </>
  );
};

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 17px 11px 28px -15px rgba(0, 0, 0, 0.45);
  cursor: pointer;
`;

const OzenStepperWrapper = styled.div`
  display: block;
  margin: 5rem auto 8rem auto;
  max-width: 600px;
  height: 22rem;

  color: white;

  @media (max-width: 500px) {
    margin: 4rem 1rem 3rem 1rem;
    height: 18rem;
  }
`;

export default MenuRouter;
