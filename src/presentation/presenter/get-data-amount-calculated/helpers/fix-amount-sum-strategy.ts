/**
 * @param {number[]}  arr   Array to be fixed.
 * @param {number}    idx   The index of arr that should be added 1.
 */
export const fixAmountSumStrategy = (arr: number[], idx: number): number[] => {
  const newArr = [...arr]
  newArr[idx] += 1
  return newArr
}
