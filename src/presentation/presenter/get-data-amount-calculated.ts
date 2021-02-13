import { createPaymentMap, fixAmountByCustomer, fixAmountSumStrategy, getAmountByCostumer, getCustomersAmount, getTotalAmount, mapItemAmount } from '../../data/usecases'
import { Amount, Item } from '../../domain/models'
import { fsReadJSONFileSyncAdapter } from '../../infra/file-system-storage/fs/fs-read-file-adapter'
import { pathGeneratorAdapter } from '../../infra/file-system-storage/path/path-generator-adapter'
import { roundingFloor } from '../../utils/math/roundings/floor'
import { sumReducer } from '../../utils/reducers'

export const getDataAmountCalculated = (): Amount => {
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
