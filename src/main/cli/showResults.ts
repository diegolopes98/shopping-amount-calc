/**
 * @param {function}  resultsFn          Function that returns the results of the operation over the resources
 * in root resources folder.
 */
export const showResults = (resultsFn: () => any): void => {
  console.log('The results are:')
  console.log(resultsFn())
}
