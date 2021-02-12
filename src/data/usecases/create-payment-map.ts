
export const createPaymentMap = (emails: string[], amounts: number[]): Object => {
  const paymentMap = { ...emails.keys() }
  emails.forEach((email: string, idx: number): void => {
    paymentMap[email] = amounts[idx]
  })
  return paymentMap
}
