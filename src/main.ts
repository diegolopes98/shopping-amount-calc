import { emails, items } from './mocks'
import { getCustomersAmount } from './data/usecases/get-customers-amount'
import { getTotalAmount } from './data/usecases/get-total-amount'
import { getAmountByCostumer } from './data/usecases/get-amount-by-costumer'
import { fixAmountByCustomer } from './data/usecases/fix-amount-by-customer'

const customersAmount = getCustomersAmount(emails)
const totalAmount = getTotalAmount(items)
const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount)
const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount)

console.log(amountByCustomerFixed)
