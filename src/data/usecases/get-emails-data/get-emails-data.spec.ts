import { getEmailsData } from './get-emails-data'

const makePathGeneratorStub = (): (s: string) => string => {
  return jest.fn((relativePath: string) => 'stub-path')
}

const makeReadJSONFileStub = (): <T>(s: string) => T => {
  const fn = jest.fn((relativePath: string): any => [
    'stub-emails'
  ])
  return fn
}

type SutType = () => string[]

const makeSut = (
  pathGeneratorStub: (s: string) => string,
  readJSONFileStub: <T>(s: string) => T
): SutType => {
  return (): string[] => getEmailsData(
    pathGeneratorStub,
    readJSONFileStub
  )
}

describe('UseCase: getEmailsData', () => {
  test('Should throw if pathGenerator throws', () => {
    const sut = makeSut(
      jest.fn((s: string) => { throw new Error('path_generator_error') }),
      makeReadJSONFileStub()
    )

    try {
      sut()
      fail('it should not reach here')
    } catch (error) {
      expect(error).not.toBeNull()
      expect(error.message).toEqual('path_generator_error')
    }
  })

  test('Should throw if readJSONFile throws', () => {
    const sut = makeSut(
      makePathGeneratorStub(),
      jest.fn((s: string) => { throw new Error('read_json_file_error') })
    )

    try {
      sut()
      fail('it should not reach here')
    } catch (error) {
      expect(error).not.toBeNull()
      expect(error.message).toEqual('read_json_file_error')
    }
  })

  test('Should returns the emails on success', () => {
    const sut = makeSut(
      makePathGeneratorStub(),
      makeReadJSONFileStub()
    )
    expect(sut()).toEqual([
      'stub-emails'
    ])
  })
})
