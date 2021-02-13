import { showResults } from '../cli/showResults'
import { intro } from '../cli/intro'
import { getDataAmountCalculatedFactory } from '../factories/presenter/get-data-amount-calculated-factory'

export const run = (): void => {
  intro()
  showResults(getDataAmountCalculatedFactory())
}
