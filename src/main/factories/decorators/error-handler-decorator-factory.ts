import { errorHandlerDecorator } from '../../../presentation/decorators/error-handler-decorator'

export const errorHandlerDecoratorFactory = <T>(fnToCall: (...args) => T): () => T => {
  return () => {
    return errorHandlerDecorator(fnToCall)
  }
}
