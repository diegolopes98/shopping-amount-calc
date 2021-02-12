export const getAmountByCostumer = (totalAmount: number, customersAmount: number): number =>
  Math.floor(totalAmount / customersAmount)
