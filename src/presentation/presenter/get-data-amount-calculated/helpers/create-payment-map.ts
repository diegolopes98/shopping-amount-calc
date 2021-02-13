import { Amount } from '../../../protocols'

export const createPaymentMap = (emails: string[], amounts: number[]): Amount => {
  const paymentMap: Amount = {}
  emails.forEach((email: string, idx: number): void => {
    paymentMap[email] = amounts[idx]
  })
  return paymentMap
}
