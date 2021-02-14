
/**
 * @param {number}    targetAmount        The total amount of items.
 * @param {number[]}  amountArray         The Amount by each customer.
 * @param {function}  reducerFn           Function to reduce the array of customers amount into a total.
 * @param {function}  fixStrategy         Function to fix the array of customers amount untill it reduces the
 * @param {number}    idx                 The index to fix.
 * target value.
 */
const fix = (
  targetAmount: number,
  amountArray: number[],
  reducerFn: (previousValue: number, currentValue: number) => number,
  fixStrategy: (arr: number[], idx: number) => number[],
  idx: number = amountArray.length - 1
): number[] => {
  if (amountArray.reduce(reducerFn) === targetAmount) return amountArray
  const newAmountArray = fixStrategy([...amountArray], idx)
  const newIdx = idx < 0 ? newAmountArray.length - 1 : idx - 1
  return fix(targetAmount, newAmountArray, reducerFn, fixStrategy, newIdx)
}

/**
 * @param {number}    amountPerCustomer   Integer value that each customer should pay without repeating
 * decimal.
 * @param {number}    customersAmount     Total number of customers.
 * @param {number}    targetAmount        The total amount of items.
 * @param {function}  reducerFn           Function to reduce the array of customers amount into a total.
 * @param {function}  fixStrategy         Function to fix the array of customers amount untill it reduces the
 * target value.
 */
export const fixAmountByCustomer = (
  amountPerCustomer: number,
  customersAmount: number,
  targetAmount: number,
  reducerFn: (previousValue: number, currentValue: number) => number,
  fixStrategy: (arr: number[], idx: number) => number[]
): number[] => {
  const amountArray = [...Array(customersAmount)].fill(amountPerCustomer)
  if (amountPerCustomer * customersAmount === targetAmount) return amountArray
  return fix(targetAmount, amountArray, reducerFn, fixStrategy)
}
