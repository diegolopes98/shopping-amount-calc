import { roundingFloor } from './floor'

type SutType = (value: number) => number

const makeSut = (): SutType => (value: number) => roundingFloor(value)

describe('Utils: roundingFloor Function', () => {
  test('Should return an integer if pass an integer', () => {
    const sut = makeSut()
    expect(sut(1)).toBe(1)
  })

  test('Should return an integer floor if pass a float', () => {
    const sut = makeSut()
    expect(sut(1.1)).toBe(1)
  })
})
