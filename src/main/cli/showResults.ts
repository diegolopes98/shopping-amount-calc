export const showResults = (resultsFn: () => any): void => {
  console.log('The results are:')
  console.log(resultsFn())
}
