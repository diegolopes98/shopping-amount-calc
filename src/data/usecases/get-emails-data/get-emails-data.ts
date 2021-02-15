/**
 * @param {function} pathGeneratorAdapter           Function to generate the path, receives a string as a
 * relative path and return an absolute path in the current os.
 * @param {function} fsReadJSONFileSyncAdapter      Function to import json, receive an absolute path and
 * returns a json, generic type must by infered when used.
 */
export const getEmailsData = (
  pathGeneratorAdapter: (relativePath: string, dirname: string) => string,
  fsReadJSONFileSyncAdapter: <T>(path: string) => T
): string[] => {
  const emailsPath = pathGeneratorAdapter('../../../../resources/emails.json', __dirname)
  return fsReadJSONFileSyncAdapter<string []>(emailsPath)
}
