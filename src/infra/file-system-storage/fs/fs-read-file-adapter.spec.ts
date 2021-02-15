import { fsReadJSONFileSyncAdapter } from './fs-read-file-adapter'
import fs from 'fs'
jest.mock('fs', () => ({
  readFileSync (): string {
    return '{content: "stub-file-content"}'
  }
}))

jest.spyOn(JSON, 'parse').mockImplementation(() => ({ content: 'stub-json-parse' }))

type SutType = (s: string) => Object

const makeSut = (): SutType => {
  const sut = fsReadJSONFileSyncAdapter
  return (path: string) => sut(path)
}

describe('Adapters: fsReadFileSyncAdapter', () => {
  test('Should return a json on success', () => {
    const sut = makeSut()
    expect(sut('test-path')).toEqual({ content: 'stub-json-parse' })
  })

  test('Should throw if fs.readFileSync throws', () => {
    const sut = makeSut()
    jest.spyOn(fs, 'readFileSync').mockImplementationOnce(() => { throw new Error('readFileSync-error') })
    try {
      sut('test-path')
      fail('it should not reach here')
    } catch (error) {
      expect(error).not.toBeNull()
      expect(error.message).toEqual('readFileSync-error')
    }
  })

  test('Should throw if JSON.parse throws', () => {
    const sut = makeSut()
    jest.spyOn(JSON, 'parse').mockImplementationOnce(() => { throw new Error('JSON.parse-error') })
    try {
      sut('test-path')
      fail('it should not reach here')
    } catch (error) {
      expect(error).not.toBeNull()
      expect(error.message).toEqual('JSON.parse-error')
    }
  })
})
