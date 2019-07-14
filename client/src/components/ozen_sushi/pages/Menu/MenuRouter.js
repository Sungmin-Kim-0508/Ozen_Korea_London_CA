/**
 * ## Description ##
 * - Rendering the photos of the menu with the business logic
 *   of react-router-dom library
 * - This current file is imported in MenuPresenter.js
 */
import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
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

const MenuRouter = () => {
  return (
    <>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.renderedImage}
        />
      ))}
    </>
  );
};

const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const baseUrl = "/ozen_sushi/menu";
const routes = [
  {
    path: `${baseUrl}`,
    exact: true,
    renderedImage: () =>
      appetizers.map(appetizer => (
        <Image key={appetizer.id} imageUrl={appetizer.imageUrl} />
      ))
  },
  {
    path: `${baseUrl}/appetizers`,
    renderedImage: () =>
      appetizers.map(appetizer => (
        <Image key={appetizer.id} imageUrl={appetizer.imageUrl} />
      ))
  },
  {
    path: `${baseUrl}/roll_sets`,
    renderedImage: () =>
      rollSets.map(rollSet => (
        <Image key={rollSet.id} imageUrl={rollSet.imageUrl} />
      ))
  },
  {
    path: `${baseUrl}/main_menu`,
    renderedImage: () =>
      mainMenu.map(item => <Image key={item.id} imageUrl={item.imageUrl} />)
  },
  {
    path: `${baseUrl}/sushi_or_sashimi_sets`,
    renderedImage: () =>
      sushiOrSashimiSets.map(item => (
        <Image key={item.id} imageUrl={item.imageUrl} />
      ))
  },
  {
    path: `${baseUrl}/sashimi_and_sushi`,
    renderedImage: () =>
      sashimiAndSushi.map(item => (
        <Image key={item.id} imageUrl={item.imageUrl} />
      ))
  },
  {
    path: `${baseUrl}/rolls`,
    renderedImage: () =>
      rolls.map(roll => <Image key={roll.id} imageUrl={roll.imageUrl} />)
  },
  {
    path: `${baseUrl}/udons`,
    renderedImage: () =>
      udons.map(udon => <Image key={udon.id} imageUrl={udon.imageUrl} />)
  },
  {
    path: `${baseUrl}/okonomiyakis`,
    renderedImage: () =>
      okonomiyakis.map(okonomiyaki => (
        <Image key={okonomiyaki.id} imageUrl={okonomiyaki.imageUrl} />
      ))
  }
];

export default MenuRouter;
