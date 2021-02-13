import { Amount } from '../../../presentation/protocols'
import { getDataAmountCalculatedPresenter } from '../../../presentation/presenter/get-data-amount-calculated'
import { getEmailsDataFactory } from '../usecases/get-emails-data-factory'
import { getItemsDataFactory } from '../usecases/get-items-data-factory'
import { errorHandlerDecoratorFactory } from '../decorators/error-handler-decorator-factory'

export const getDataAmountCalculatedFactory = (): () => Amount => {
  const getEmailsDataBuilt = getEmailsDataFactory()
  const getItemsDataBuilt = getItemsDataFactory()
  const getDataAmountCalculatedBuilt = (): Amount => {
    return getDataAmountCalculatedPresenter(
      getEmailsDataBuilt,
      getItemsDataBuilt
    )
  }
  return errorHandlerDecoratorFactory<Amount>(getDataAmountCalculatedBuilt)
}
