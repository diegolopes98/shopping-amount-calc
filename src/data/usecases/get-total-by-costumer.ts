export const getTotalByCostumer = (totalAmount: number, numberOfCustomers: number): number =>
  Math.floor(totalAmount / numberOfCustomers)
