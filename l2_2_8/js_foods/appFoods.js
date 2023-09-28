const init = () => {
  createList()
}

const createList = () => {
  let food1 = new FoodClass("Pasta",40,500);
  food1.render();

  let food2 = new FoodClass("Olives pizza",45,700);
  food2.render();
}


init();