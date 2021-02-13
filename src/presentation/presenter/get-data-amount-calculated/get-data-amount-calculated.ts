import { createPaymentMap, fixAmountByCustomer, fixAmountSumStrategy, getAmountByCostumer, getCustomersAmount, getTotalAmount, mapItemAmount } from './helpers'
import { Amount, Item } from '../../protocols'
import { roundingFloor } from '../../../utils/math/roundings/floor'
import { sumReducer } from '../../../utils/reducers'
import { isFloat } from '../../../utils/math/check-types'

export const getDataAmountCalculatedPresenter = (
  getEmailsData: () => string[],
  getItemsData: () => Item[]
): Amount => {
  const emails = getEmailsData()
  if (!emails || emails.length === 0) {
    console.error('Emails list was empty...')
    return null
  }

  const items = getItemsData()
  if (!items || items.length === 0) {
    console.error('Items list was empty...')
    return null
  }

  const hasFloat = items.map((item: Item) => item.amount).findIndex(isFloat) > 0

  if (hasFloat) {
    console.error('Items list has float numbers in amount...')
    return null
  }

  const customersAmount = getCustomersAmount(emails)
  const totalAmount = getTotalAmount(items, mapItemAmount, sumReducer)
  const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount, roundingFloor)
  const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount, sumReducer, fixAmountSumStrategy)
  return createPaymentMap(emails, amountByCustomerFixed)
}
