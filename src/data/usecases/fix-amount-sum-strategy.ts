export const fixAmountSumStrategy = (arr: number[], idx: number): number[] => {
  const newArr = [...arr]
  newArr[idx] += 1
  return newArr
}
