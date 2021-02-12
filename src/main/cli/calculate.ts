import { calculatePaymentAmountByCustomer } from '../../data/usecases/calculate-payment-amount-by-customer'

export const calculate = (): void => {
  console.log('The results are:')
  console.log(calculatePaymentAmountByCustomer())
}
