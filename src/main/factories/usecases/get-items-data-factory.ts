import { Item } from '../../../domain/models'
import { getItemsData } from '../../../data/usecases/get-items-data'
import { fsReadJSONFileSyncAdapter } from '../../../infra/file-system-storage/fs/fs-read-file-adapter'
import { pathGeneratorAdapter } from '../../../infra/file-system-storage/path/path-generator-adapter'

export const getItemsDataFactory = (): () => Item[] => {
  return (): Item[] => getItemsData(
    pathGeneratorAdapter,
    fsReadJSONFileSyncAdapter
  )
}
