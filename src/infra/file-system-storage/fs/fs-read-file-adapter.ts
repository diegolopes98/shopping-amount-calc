import fs from 'fs'

/**
 * @param {function} readFileSync   Function to import a file, receives an absolute path and an encoding type,
 * returns the file content as string
 * @param {function} jsonParser     Function to parse to Json, receives an string  and returns an generic type
 * Json.
 * @param {string}   path           Absolute path of the file you want to import.
 */
const fsReadJSONFileSync = (
  readFileSync: (path: string, options: { encoding: BufferEncoding, flag?: string }) => string,
  jsonParser: (text: string) => Object,
  path: string
): Object => {
  return jsonParser(readFileSync(path, { encoding: 'utf-8' }))
}

/**
 * @param {string}   path           Absolute path of the file you want to import.
 */
export const fsReadJSONFileSyncAdapter = <T>(path: string): T => {
  return fsReadJSONFileSync(fs.readFileSync, JSON.parse, path) as T
}
