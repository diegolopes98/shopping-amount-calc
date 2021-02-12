export const getTotalByCostumer = (totalAmount: number, customersAmount: number): number =>
  Math.floor(totalAmount / customersAmount)
