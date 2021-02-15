import { isFloat } from './float'

type SutType = (n: number) => boolean

const makeSut = (): SutType => (n: number) => isFloat(n)

describe('Utils: isFloat Function', () => {
  test('Should return true if pass a float number', () => {
    const sut = makeSut()
    expect(sut(0.1)).toBeTruthy()
  })

  test('Should return false if pass an integer number', () => {
    const sut = makeSut()
    expect(sut(1)).toBeFalsy()
  })
})
