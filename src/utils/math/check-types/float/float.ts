/**
 * @param {number}    n   A number.
 */
export const isFloat = (n: number): boolean => Number(n) === n && n % 1 !== 0
