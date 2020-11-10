export const adapter = (value) => {
  const data = {
    "Все": "all",
    "Мясные": "meat",
    "Вегетарианская": "veg",
    "Гриль": "gril",
    "Острые": "spicy",
    "Закрытые": "close",
    "цене": "price",
    "популярности": "rating",
    "алфавиту": "name",
  };
  return data[value];
};
