import fs from 'fs'

const fsReadJSONFileSync = (
  readFileSync: (path: string, options: { encoding: BufferEncoding, flag?: string }) => string,
  jsonParser: (text: string) => Object,
  path: string
): Object => {
  return jsonParser(readFileSync(path, { encoding: 'utf-8' }))
}

export const fsReadJSONFileSyncAdapter = <T>(path: string): T => {
  return fsReadJSONFileSync(fs.readFileSync, JSON.parse, path) as T
}
