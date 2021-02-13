import { Amount } from '../../../presentation/protocols'
import { getDataAmountCalculatedPresenter } from '../../../presentation/presenter/get-data-amount-calculated'
import { getEmailsDataFactory } from '../usecases/get-emails-data-factory'
import { getItemsDataFactory } from '../usecases/get-items-data-factory'

export const getDataAmountCalculatedFactory = (): () => Amount => {
  const getEmailsDataBuilt = getEmailsDataFactory()
  const getItemsDataBuilt = getItemsDataFactory()

  return () => {
    return getDataAmountCalculatedPresenter(
      getEmailsDataBuilt,
      getItemsDataBuilt
    )
  }
}
