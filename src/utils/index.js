/**
 * @param {array}
 * @return
 */
export const getCurrentYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

/**
 * Returns the total order price
 * @param {array} products array
 * @return {number} summary of products price
 */
export const getTotalCost = (products) => {
  const totalCost = products.reduce((total, product) => product.price + total, 0);

  return totalCost;
};
