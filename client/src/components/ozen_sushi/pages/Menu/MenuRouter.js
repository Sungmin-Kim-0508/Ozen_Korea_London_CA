/**
 * ## Description ##
 * - Rendering the photos of the menu with the business logic
 *   of react-router-dom library
 * - This current file is imported in MenuPresenter.js
 */
import React from "react";
import { Route } from "react-router-dom";
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
import MenuImages from "./MenuImages";

const MenuRouter = ({
  photoIndex,
  handleOpenModal,
  isModalOpened,
  handleCloseModal
}) => {
  const baseUrl = "/menu";
  const routes = [
    {
      path: `${baseUrl}`,
      exact: true,
      renderedImage: () => (
        <>
          <MenuImages
            menu={appetizers}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/roll_sets`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={rollSets}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/main_menu`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={mainMenu}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/sushi_or_sashimi_sets`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={sushiOrSashimiSets}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/sashimi_and_sushi`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={sashimiAndSushi}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/rolls`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={rolls}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/udons`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={udons}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )
    },
    {
      path: `${baseUrl}/okonomiyakis`,
      renderedImage: () => (
        <>
          <MenuImages
            menu={okonomiyakis}
            photoIndex={photoIndex}
            isModalOpened={isModalOpened}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}
          />
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

export default MenuRouter;
