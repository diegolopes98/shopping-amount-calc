import { getDataAmountCalculated } from '../presenter/get-data-amount-calculated'

export const calculate = (): void => {
  console.log('The results are:')
  console.log(getDataAmountCalculated())
}
