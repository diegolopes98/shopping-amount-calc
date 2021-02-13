import { createPaymentMap, fixAmountByCustomer, fixAmountSumStrategy, getAmountByCostumer, getCustomersAmount, getTotalAmount, mapItemAmount } from './helpers'
import { Amount } from '../../protocols'
import { roundingFloor } from '../../../utils/math/roundings/floor'
import { sumReducer } from '../../../utils/reducers'

export const getDataAmountCalculatedPresenter = (
  getEmailsData: () => string[],
  getItemsData: () => any[]
): Amount => {
  const emails = getEmailsData()
  if (!emails || emails.length === 0) {
    console.error('Emails file was empty...')
    return null
  }
  const items = getItemsData()
  if (!items || items.length === 0) {
    console.error('Items file was empty...')
    return null
  }
  const customersAmount = getCustomersAmount(emails)
  const totalAmount = getTotalAmount(items, mapItemAmount, sumReducer)
  const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount, roundingFloor)
  const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount, sumReducer, fixAmountSumStrategy)
  return createPaymentMap(emails, amountByCustomerFixed)
}
