import { getEmailsData } from '../../../data/usecases/get-emails-data/get-emails-data'
import { fsReadJSONFileSyncAdapter } from '../../../infra/file-system-storage/fs/fs-read-file-adapter'
import { pathGeneratorAdapter } from '../../../infra/file-system-storage/path/path-generator-adapter'

export const getEmailsDataFactory = (): () => string[] => {
  return (): string[] => getEmailsData(
    pathGeneratorAdapter,
    fsReadJSONFileSyncAdapter
  )
}
