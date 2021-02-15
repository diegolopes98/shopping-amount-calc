import { Item } from '../../protocols'

/**
 * @param {function} pathGeneratorAdapter           Function to generate the path, receives a string as a
 * relative path and return an absolute path in the current os.
 * @param {function} fsReadJSONFileSyncAdapter      Function to import json, receive an absolute path and
 * returns a json, generic type must by infered when used.
 */
export const getItemsData = (
  pathGeneratorAdapter: (relativePath: string, dirname: string) => string,
  fsReadJSONFileSyncAdapter: <T>(path: string) => T
): Item[] => {
  const itemsPath = pathGeneratorAdapter('../../../resources/items.json', __dirname)
  return fsReadJSONFileSyncAdapter<Item []>(itemsPath)
}
