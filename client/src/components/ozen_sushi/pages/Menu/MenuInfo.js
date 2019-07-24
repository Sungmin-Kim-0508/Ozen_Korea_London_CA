import uuid from "uuid/v4";
const baseUrl = `${process.env.PUBLIC_URL}/images/Ozen_Sushi`;
const test = `${process.env.PUBLIC_URL}/images/Ozen_Korea/menu_board`;
export const appetizers = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Agedashi_Tofu.JPG`,
    food_name: "Agedashi Tofu",
    price: 11
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Chicken_Karahi.jpg`,
    food_name: "Chicken Karahi",
    price: 9
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Edamame.JPG`,
    food_name: "Edamame",
    price: 4
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Gyoza.JPG`,
    food_name: "Gyoza",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Gyoza_Soup.JPG`,
    food_name: "Gyoza Soup",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/OYSTER1.jpg`,
    food_name: "Oyester1",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/OYSTERSHOOTER2.jpg`,
    food_name: "Oyester2",
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
    food_name: "Sashimi_Ceveiche",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Shirimp_Karahi.jpg`,
    food_name: "Shirimp Karahi",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Shirimp_Tempura.JPG`,
    food_name: "Shirimp Tempura",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Sunomono_Salad.JPG`,
    food_name: "Sunomono Salad",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Sushi_Pizza.jpg`,
    food_name: "Sushi Pizza",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Yakitori_2.jpg`,
    food_name: "Yakitori",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Appetizer/Yakitori.jpeg`,
    food_name: "Yakitori",
    price: 8
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
    food_name: "Bulgogi",
    price: 10
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Main/Pork_Katsu.jpg`,
    food_name: "Pork Katsu",
    price: 10
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
    food_name: "Ozen Roll",
    price: 10
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll/Revolution_roll.jpg`,
    food_name: "Revolution roll",
    price: 10
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Roll/Rocket_Roll_1.JPG`,
    food_name: "Rocket Roll 1",
    price: 10
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
    price: 10
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Salmon_Sushi.JPG`,
    food_name: "Salmon Sushi",
    price: 8
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Tuna_Sashimi.JPG`,
    food_name: "Tuna Sashimi",
    price: 100
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SashimiAndSushi/Tuna_Sushi.JPG`,
    food_name: "Tuna Sushi",
    price: 14
  }
];

export const sushiOrSashimiSets = [
  {
    id: uuid(),
    imageUrl: `${baseUrl}/SushiOrSashimi_Set/Chirashi_Set.jpg`,
    food_name: "Chirashi Set",
    price: 14
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
    price: 14
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Udon/Seafood_Yaki_Udon.jpg`,
    food_name: "Seafood Yaki Udon",
    price: 14
  },
  {
    id: uuid(),
    imageUrl: `${baseUrl}/Udon/Spicy_Seafood_Udon.jpg`,
    food_name: "Spicy Seafood Udon",
    price: 14
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
    food_name: "OkonomiYaki",
    price: 14
  }
];

export const ozen_sushi_menu_board = [
  {
    id: uuid(),
    imageUrl: `${test}/1_Appetizer.jpg`,
    name: "appetizer"
  },
  {
    id: uuid(),
    imageUrl: `${test}/2_Korean_Soup.jpg`,
    name: "korean_soup"
  },
  {
    id: uuid(),
    imageUrl: `${test}/4_A_La_Carte.jpg`,
    name: "lacarte"
  },
  {
    id: uuid(),
    imageUrl: `${test}/5_BBQ.jpg`,
    name: "bbq"
  },
  {
    id: uuid(),
    imageUrl: `${test}/6_Hot_Pot.jpg`,
    name: "hotpot"
  },
  {
    id: uuid(),
    imageUrl: `${test}/7_BBQ.jpg`,
    name: "bbq"
  },
  {
    id: uuid(),
    imageUrl: `${test}/8_Beverage.jpg`,
    name: "appetizer"
  }
];
