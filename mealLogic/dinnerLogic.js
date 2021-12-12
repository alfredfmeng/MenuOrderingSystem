module.exports = dinnerLogic = (orderedFood) => {
  const startIdx = orderedFood.length - 1;

  if (!orderedFood.includes("Wine")) {
    orderedFood.splice(startIdx, 0, "Water");
    console.log(orderedFood.join(", "));
    return;
  }
  if (!orderedFood.includes("Cake")) {
    console.log("Unable to process: Dessert is missing");
    return;
  }
  console.log(orderedFood.join(", "));
};
