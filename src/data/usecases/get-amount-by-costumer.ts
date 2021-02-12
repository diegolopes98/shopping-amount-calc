export const getAmountByCostumer = (totalAmount: number, customersAmount: number, roundingFn: (value: number) => number): number =>
  roundingFn(totalAmount / customersAmount)
