import { pathGeneratorAdapter } from './path-generator-adapter'
import path from 'path'

jest.mock('path', () => ({
  join (): string {
    return 'absolute-stub-path'
  }
}))

type SutType = (s: string, s2: string) => string

const makeSut = (): SutType => {
  const sut = pathGeneratorAdapter
  return (path: string, dirname: string) => sut(path, dirname)
}

describe('Adapters: pathGeneratorAdapter', () => {
  test('Should return a json on success', () => {
    const sut = makeSut()
    expect(sut('test-path', __dirname)).toEqual('absolute-stub-path')
  })

  test('Should throw if path.join throws', () => {
    const sut = makeSut()
    jest.spyOn(path, 'join').mockImplementationOnce(() => { throw new Error('path.join-error') })
    try {
      sut('test-path', __dirname)
      fail('it should not reach here')
    } catch (error) {
      expect(error).not.toBeNull()
      expect(error.message).toEqual('path.join-error')
    }
  })
})
