export const fixAmountByCustomer = (amountPerCustomer: number, customersAmount: number, targetAmount: number): number[] => {
  const amountArray = [...Array(customersAmount)].fill(amountPerCustomer)
  if (amountPerCustomer * customersAmount === targetAmount) return amountArray
  return fix(targetAmount, amountArray)
}

const fix = (targetAmount: number, amountArray: number[], idx: number = amountArray.length - 1): number[] => {
  if (amountArray.reduce((acc: number , cur: number) => acc + cur) === targetAmount) return amountArray
  const newAmountArray = [...amountArray]
  newAmountArray[idx] += 1
  const newIdx = idx < 0 ? newAmountArray.length - 1 : idx - 1
  return fix(targetAmount, newAmountArray, newIdx)
}
