export const errorHandlerDecorator = <T>(functionToCall: (...args: any[]) => T, ...args: any[]): T => {
  try {
    return functionToCall(...args)
  } catch (error) {
    console.error(`Error while executing ${functionToCall.name}\n\n`, error)
    return null
  }
}
