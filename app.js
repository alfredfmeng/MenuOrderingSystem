const { breakfast, lunch, dinner } = require("./menu");
const { breakfastLogic, lunchLogic, dinnerLogic } = require("./mealLogic");

const orderingSystem = (meal, items = []) => {
  // Check if main or side is missing
  if (items.length === 0) {
    console.log("Unable to process: Main is missing, side is missing");
    return;
  }

  if (items.length === 1) {
    console.log("Unable to process: Side is missing");
    return;
  }

  // Sort the menu items so that they are returned in the correct order
  items.sort((a, b) => a - b);

  // Check if main is ordered multiple times
  if (items[0] === items[1]) {
    console.log(
      `Unable to process: ${meal[items[0]]} cannot be ordered more than once`
    );
    return;
  }

  // Use hash table to keep track of item quantity
  const qtyOfItems = {};
  for (const item of items) {
    if (!qtyOfItems[item]) qtyOfItems[item] = 1;
    else qtyOfItems[item]++;
  }

  // Use Object.entries() to build array of menu items
  const orderedFood = [];
  for (const [key, value] of Object.entries(qtyOfItems)) {
    value > 1
      ? orderedFood.push(meal[key] + `(${value})`)
      : orderedFood.push(meal[key]);
  }

  // Passes array of menu items to appropriate function which will return items as strings
  if (meal === breakfast) breakfastLogic(orderedFood);
  if (meal === lunch) lunchLogic(orderedFood);
  if (meal === dinner) dinnerLogic(orderedFood);
};

// TEST CASES
// orderingSystem(breakfast, [1, 2, 3]);
// orderingSystem(breakfast, [2, 3, 1]);
// orderingSystem(breakfast, [1, 2, 3, 3, 3]);
// orderingSystem(breakfast, [1]);
// orderingSystem(lunch, [1, 2, 3]);
// orderingSystem(lunch, [1, 2]);
// orderingSystem(lunch, [1, 1, 2, 3]);
// orderingSystem(lunch, [1, 2, 2]);
// orderingSystem(lunch);
// orderingSystem(dinner, [1, 2, 3, 4]);
// orderingSystem(dinner, [1, 2, 3]);
