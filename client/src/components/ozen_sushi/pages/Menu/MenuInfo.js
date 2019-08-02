import uuid from "uuid/v4";
const baseUrl = `${process.env.PUBLIC_URL}/images/Ozen_Sushi`;
const menuBoardUrl = `${process.env.PUBLIC_URL}/images/Ozen_Sushi/_menu_board`;
export const appetizers = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Agedashi_Tofu.JPG`,
    food_name: "Agedashi Tofu",
    price: 6.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Chicken_Karahi.jpg`,
    food_name: "Chicken Karahi Yaki",
    price: 8.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Edamame.JPG`,
    food_name: "Edamame",
    price: 4.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Gyoza.JPG`,
    food_name: "Gyoza",
    price: 5.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Gyoza_Soup.JPG`,
    food_name: "Gyoza Soup",
    price: 4.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/OYSTER1.jpg`,
    food_name: "Oyster1",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/OYSTERSHOOTER2.jpg`,
    food_name: "Oyster Shooter",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Oyster2.jpg`,
    food_name: "Oyster2",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Sashimi_Ceveiche.JPG`,
    food_name: "Sashimi Ceveiche",
    price: 9.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Shirimp_Karahi.jpg`,
    food_name: "Shirimp Karahi",
    price: 9.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Shirimp_Tempura.JPG`,
    food_name: "Shirimp Tempura",
    price: 8.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Sunomono_Salad.JPG`,
    food_name: "Snomono Salad",
    price: 6.99
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Sushi_Pizza.jpg`,
    food_name: "Tuna and Fish Eggs Sushi Pizza",
    price: 9.45
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Yakitori.jpeg`,
    food_name: "Yakitori",
    price: 5.45
  }
];

export const mainMenu = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Main/Bibimbob.jpg`,
    food_name: "Bibimbob",
    price: 10
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Main/Bulgogi.jpg`,
    food_name: "Bulgogi Combo",
    price: 13.95
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Main/Pork_Katsu.jpg`,
    food_name: "Pork Katsu Combo",
    price: 13.95
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Main/Teriyaki_Combo.jpg`,
    food_name: "Teriyaki Combo",
    price: 10
  }
];

export const rolls = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll/Ozen_roll.jpg`,
    food_name: "O Zen Roll",
    price: 15
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll/Revolution_roll.jpg`,
    food_name: "Revolution roll",
    price: 14
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll/Rocket_Roll_1.JPG`,
    food_name: "Rocket Roll 1",
    price: 13
  }
];

export const rollSets = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll_Set/Roll_Set.jpg`,
    food_name: "Roll Set",
    price: 10
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll_Set/Roll_Set.jpg`,
    food_name: "Roll Set",
    price: 10
  }
];

export const sashimiAndSushi = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Salmon_Sashimi.jpg`,
    food_name: "Salmon Sashimi",
    price: 5
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Salmon_Sushi.JPG`,
    food_name: "Salmon Sushi",
    price: 4.5
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Tuna_Sashimi.JPG`,
    food_name: "Tuna Sashimi",
    price: 6
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Tuna_Sushi.JPG`,
    food_name: "Tuna Sushi",
    price: 5
  }
];

export const sushiOrSashimiSets = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SushiOrSashimi_Set/Chirashi_Set.jpg`,
    food_name: "Chirashi Sushi Set",
    price: 18
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SushiOrSashimi_Set/Sashimi_Set_2.JPG`,
    food_name: "Sashimi_Set_2",
    price: 14
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SushiOrSashimi_Set/Sashimi_Set.jpg`,
    food_name: "Sashimi Set",
    price: 14
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SushiOrSashimi_Set/Sushi_Set_2.jpg`,
    food_name: "Sushi_Set_2",
    price: 14
  }
];

export const udons = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Udon/Seafood_Udon.jpg`,
    food_name: "Seafood Udon",
    price: 11.5
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Udon/Seafood_Yaki_Udon.jpg`,
    food_name: "Seafood Yaki Udon",
    price: 12.5
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Udon/Spicy_Seafood_Udon.jpg`,
    food_name: "Spicy Seafood Udon",
    price: 11.95
  }
];

export const okonomiyakis = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Okonomiyaki/OkonomiYaki.JPG`,
    food_name: "OkonomiYaki",
    price: 14
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Okonomiyaki/OkonomiYaki.JPG`,
    food_name: "Seafood Okonomi Yaki",
    price: 14.95
  }
];

export const ozen_sushi_menu_board = [
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/ozen_sushi_menu_page_1.jpg`,
    name: "appetizer"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/ozen_sushi_menu_page_2.jpg`,
    name: "korean_soup"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/ozen_sushi_menu_page_3.jpg`,
    name: "lacarte"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/ozen_sushi_menu_page_4.jpg`,
    name: "bbq"
  },
  {
    id: uuid(),
    imageUrl: `${menuBoardUrl}/ozen_sushi_menu_page_5.jpg`,
    name: "hotpot"
  }
];
