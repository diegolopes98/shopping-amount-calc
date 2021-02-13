import { createPaymentMap, fixAmountByCustomer, fixAmountSumStrategy, getAmountByCostumer, getCustomersAmount, getTotalAmount, mapItemAmount } from './helpers'
import { Amount } from '../../protocols'
import { roundingFloor } from '../../../utils/math/roundings/floor'
import { sumReducer } from '../../../utils/reducers'

export const getDataAmountCalculatedPresenter = (
  getEmailsData,
  getItemsData
): Amount => {
  const emails = getEmailsData()
  const items = getItemsData()
  const customersAmount = getCustomersAmount(emails)
  const totalAmount = getTotalAmount(items, mapItemAmount, sumReducer)
  const amountByCustomer = getAmountByCostumer(totalAmount, customersAmount, roundingFloor)
  const amountByCustomerFixed = fixAmountByCustomer(amountByCustomer, customersAmount, totalAmount, sumReducer, fixAmountSumStrategy)
  return createPaymentMap(emails, amountByCustomerFixed)
}
