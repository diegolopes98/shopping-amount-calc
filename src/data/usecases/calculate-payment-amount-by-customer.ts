import { fsReadJSONFileSyncAdapter } from '../../infra/file-system-storage/fs/fs-read-file-adapter'
import { roundingFloor } from '../../utils/math/roundings/floor'
import { sumReducer } from '../../utils/reducers'
import { createPaymentMap } from './create-payment-map'
import { fixAmountByCustomer } from './fix-amount-by-customer'
import { fixAmountSumStrategy } from './fix-amount-sum-strategy'
import { getAmountByCostumer } from './get-amount-by-costumer'
import { getCustomersAmount } from './get-customers-amount'
import { getTotalAmount } from './get-total-amount'
import { mapItemAmount } from './map-item-amount'
import { Item } from '../../domain/models'
import { pathGeneratorAdapter } from '../../infra/file-system-storage/path/path-generator-adapter'

export const calculatePaymentAmountByCustomer = (): Object => {
  const emailsPath = pathGeneratorAdapter('../../../data/emails.json', __dirname)
  const emails = fsReadJSONFileSyncAdapter<string []>(emailsPath)
  const itemsPath = pathGeneratorAdapter('../../../data/items.json', __dirname)
  const items = fsReadJSONFileSyncAdapter<Item []>(itemsPath)
  const customersAmount = getCustomersAmount(emails)
  const totalAmount = getTotalAmount(items, mapItemAmount, sumReducer)
  const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount, roundingFloor)
  const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount, sumReducer, fixAmountSumStrategy)
  return createPaymentMap(emails, amountByCustomerFixed)
}
