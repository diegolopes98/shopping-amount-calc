export const fixAmountByCustomer = (
  amountPerCustomer: number,
  customersAmount: number,
  targetAmount: number,
  reducerFn: (previousValue: number, currentValue: number) => number
): number[] => {
  const amountArray = [...Array(customersAmount)].fill(amountPerCustomer)
  if (amountPerCustomer * customersAmount === targetAmount) return amountArray
  return fix(targetAmount, amountArray, reducerFn)
}

const fix = (
  targetAmount: number,
  amountArray: number[],
  reducerFn: (previousValue: number, currentValue: number) => number,
  idx: number = amountArray.length - 1
): number[] => {
  if (amountArray.reduce(reducerFn) === targetAmount) return amountArray
  const newAmountArray = [...amountArray]
  newAmountArray[idx] += 1
  const newIdx = idx < 0 ? newAmountArray.length - 1 : idx - 1
  return fix(targetAmount, newAmountArray, reducerFn, newIdx)
}
