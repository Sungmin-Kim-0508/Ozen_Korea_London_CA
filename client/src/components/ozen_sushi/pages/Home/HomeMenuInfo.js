import { routes } from "../../../routes";
const baseURL = `${process.env.PUBLIC_URL}/images/Ozen_Sushi`;
// const menuURL = "ozen_sushi/menu";
const menuURL = `${routes.ozen_sushi_root}${routes.menu}`;

export const homeMenuInfo = [
  {
    menuName: "Seafood U-don",
    menuDesc: "Mssel, squid, shrimp with noodels.",
    price: "11.50",
    to: `${menuURL}/udons`,
    imageUrl: `${baseURL}/Udon/Seafood_Udon.jpg`,
    alt: "seafood udon"
  },
  {
    menuName: "Teriyaki Combo",
    menuDesc: "Miso soup, garden salad, 2ps of gyoza & steamed rice.",
    price: "9.50",
    to: `${menuURL}/main_menu`,
    imageUrl: `${baseURL}/Main/Teriyaki_Combo.jpg`,
    alt: "Teriyaki combo"
  },
  {
    menuName: "Ni Sashimi Set",
    menuDesc: "18pcs daily fresh chef's choice of dish",
    price: "17",
    to: `${menuURL}/sushi_or_sashimi_sets`,
    imageUrl: `${baseURL}/SushiOrSashimi_Set/Sashimi_Set.jpg`,
    alt: "Ni Sashimi Set"
  },
  {
    menuName: "Rocket Roll #1",
    menuDesc: `8 pieces. Spicy salmon, cream cheese, avocado, topped with "torched" salmon and sweet onion. `,
    price: "13.00",
    to: `${menuURL}/rolls`,
    imageUrl: `${baseURL}/Roll/Rocket_Roll_1.JPG`,
    alt: "rocket roll"
  }
];
