/**
 * @param {number}      totalAmount       The total amount by items.
 * @param {number}      customersAmount   The total number of customers.
 * @param {function}    roundingFn        Function to round the value as an integer.
 */
export const getAmountByCostumer = (totalAmount: number, customersAmount: number, roundingFn: (value: number) => number): number =>
  roundingFn(totalAmount / customersAmount)
