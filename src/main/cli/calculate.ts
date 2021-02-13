import { getDataAmountCalculated } from '../../presentation/presenter/get-data-amount-calculated'

export const calculate = (): void => {
  console.log('The results are:')
  console.log(getDataAmountCalculated())
}
