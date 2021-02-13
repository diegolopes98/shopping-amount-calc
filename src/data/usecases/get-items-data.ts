import { Item } from '../protocols'

export const getItemsData = (
  pathGeneratorAdapter: (relativePath: string, dirname: string) => string,
  fsReadJSONFileSyncAdapter: <T>(path: string) => T
): Item[] => {
  const itemsPath = pathGeneratorAdapter('../../../resources/items.json', __dirname)
  return fsReadJSONFileSyncAdapter<Item []>(itemsPath)
}
