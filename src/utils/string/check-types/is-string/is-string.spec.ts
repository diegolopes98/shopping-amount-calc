import { isString } from './is-string'

type SutType = (value: any) => boolean

const makeSut = (): SutType => (value: any) => isString(value)

describe('Utils: isFloat Function', () => {
  test('Should return false if not pass a string', () => {
    const sut = makeSut()
    expect(sut(undefined)).toBeFalsy()
  })

  test('Should return true if pass a string', () => {
    const sut = makeSut()
    expect(sut('is a string')).toBeTruthy()
  })
})
