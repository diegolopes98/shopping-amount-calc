import { emails, items } from './mocks'
import { getCustomersAmount } from './data/usecases/get-customers-amount'
import { getTotalAmount } from './data/usecases/get-total-amount'
import { getAmountByCostumer } from './data/usecases/get-amount-by-costumer'
import { fixAmountByCustomer } from './data/usecases/fix-amount-by-customer'
import { sumReducer } from './utils/reducers'
import { mapItemAmount } from './data/usecases/map-item-amount'
import { fixAmountSumStrategy } from './data/usecases/fix-amount-sum-strategy'
import { createPaymentMap } from './data/usecases/create-payment-map'

const customersAmount = getCustomersAmount(emails)
const totalAmount = getTotalAmount(items, mapItemAmount, sumReducer)
const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount)
const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount, sumReducer, fixAmountSumStrategy)
const paymentMap = createPaymentMap(emails, amountByCustomerFixed)

console.log(paymentMap)
