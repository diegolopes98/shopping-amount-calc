import { errorHandlerDecorator } from '../../../presentation/decorators/error-handler-decorator'

/**
 * @param {function}  fnToCall   Function that it's going to be called by the decorator.
 */
export const errorHandlerDecoratorFactory = <T>(fnToCall: (...args) => T): () => T => {
  return () => {
    return errorHandlerDecorator(fnToCall)
  }
}
