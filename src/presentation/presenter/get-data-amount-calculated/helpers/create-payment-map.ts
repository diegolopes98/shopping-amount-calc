import { Amount } from '../../../protocols'

/**
 * @param {string[]}  emails    The emails list
 * @param {number[]}  amounts   The amounts by customers fixed
 */
export const createPaymentMap = (emails: string[], amounts: number[]): Amount => {
  const paymentMap: Amount = {}
  emails.forEach((email: string, idx: number): void => {
    paymentMap[email] = amounts[idx]
  })
  return paymentMap
}
