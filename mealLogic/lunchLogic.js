module.exports = lunchLogic = (orderedFood) => {
  if (!orderedFood.includes("Soda")) {
    console.log(orderedFood.join(", ") + ", Water");
  }
};
