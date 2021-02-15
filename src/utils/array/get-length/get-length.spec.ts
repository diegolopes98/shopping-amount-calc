import { getLength } from './get-length'

type SutType = (arr: any[]) => number

const makeSut = (): SutType => (arr: any[]) => getLength(arr)

describe('Utils: getLength Function', () => {
  test('Should return the array [] length 0', () => {
    const sut = makeSut()
    expect(sut([])).toBe(0)
  })

  test('Should return the array ["any"] length 1', () => {
    const sut = makeSut()
    expect(sut(['any'])).toBe(1)
  })
})
