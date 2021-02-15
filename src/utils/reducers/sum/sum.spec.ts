import { sumReducer } from './sum'

type SutType = (acc: number, cur: number) => number

const makeSut = (): SutType => (acc: number, cur: number) => sumReducer(acc, cur)

describe('Utils: sumReducer function', () => {
  test('Should return the sum of 10 and 2', () => {
    const sut = makeSut()
    expect(sut(10, 2)).toBe(12)
  })

  test('Should return the sum of 10 and -2', () => {
    const sut = makeSut()
    expect(sut(10, -2)).toBe(8)
  })

  test('Should return the sum of -10 and -2', () => {
    const sut = makeSut()
    expect(sut(-10, -2)).toBe(-12)
  })
})
