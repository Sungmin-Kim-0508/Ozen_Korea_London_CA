import uuid from "uuid/v4";
const menuBoardUrl = `${process.env.PUBLIC_URL}/images/Ozen_Korea/menu_board`;

export const ozen_korea_menu_board = [
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/1_Appetizer.jpg`,
    name: "appetizer"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/2_Korean_Soup.jpg`,
    name: "Korean Soup"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/4_A_La_Carte.jpg`,
    name: "A La Carte"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/5_Hot_Plate_And_Noodle.jpg`,
    name: "Hot Plate & Noodle"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/6_Hot_Pot.jpg`,
    name: "Hot Pot"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/7_BBQ.jpg`,
    name: "BBQ"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/8_Beverage.jpg`,
    name: "Beverage"
  }
];
