const { breakfast, lunch, dinner } = require("./menu");

const qtyOfItems = {};

const orderingSystem = (meal, items) => {
  if (items.length < 2) {
    console.log("Unable to process: Side is missing");
    return;
  }

  items.sort((a, b) => a - b);

  for (const item of items) {
    if (!qtyOfItems[item]) qtyOfItems[item] = 1;
    else qtyOfItems[item]++;
  }

  const orderedFood = [];
  for (const [key, value] of Object.entries(qtyOfItems)) {
    value > 1
      ? orderedFood.push(meal[key] + `(${value})`)
      : orderedFood.push(meal[key]);
  }
  console.log(orderedFood.join(", "));
};

// orderingSystem(breakfast, [1, 2, 3]);
// orderingSystem(breakfast, [2, 3, 1]);
// orderingSystem(breakfast, [1, 2, 3, 3, 3]);
// orderingSystem(breakfast, [1]);
// orderingSystem(lunch, [1, 2, 3]);
// orderingSystem(lunch, [1, 2]);
// orderingSystem(lunch, [1, 1, 2, 3]);
// orderingSystem(lunch, [1, 2, 2]);
// orderingSystem(lunch, [1]);
// orderingSystem(dinner, [1, 2, 3, 4]);
// orderingSystem(dinner, [1, 2, 3]);
