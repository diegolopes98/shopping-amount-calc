import { createPaymentMap, fixAmountByCustomer, fixAmountSumStrategy, getAmountByCostumer, getTotalAmount, mapItemPrice } from './helpers'
import { Amount, Item } from '../../protocols'
import { roundingFloor } from '../../../utils/math/roundings'
import { sumReducer } from '../../../utils/reducers'
import { isFloat } from '../../../utils/math/check-types'
import { getLength } from '../../../utils/array/get-length'

/**
 * @param {function}  getEmailsData   UseCase Function that returns the emails in the resource folder.
 * @param {function}  getItemsData    UseCase Function that returns the items in the resource folder.
 */
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

  const hasFloat = items.map((item: Item) => item.price).findIndex(isFloat) > 0

  if (hasFloat) {
    console.error('Items list has float numbers in price...')
    return null
  }

  const customersAmount = getLength(emails)
  const totalAmount = getTotalAmount(items, mapItemPrice, sumReducer)
  const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount, roundingFloor)
  const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount, sumReducer, fixAmountSumStrategy)
  return createPaymentMap(emails, amountByCustomerFixed)
}
