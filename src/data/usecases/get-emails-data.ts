
export const getEmailsData = (
  pathGeneratorAdapter: (relativePath: string, dirname: string) => string,
  fsReadJSONFileSyncAdapter: <T>(path: string) => T
): string[] => {
  const emailsPath = pathGeneratorAdapter('../../../resources/emails.json', __dirname)
  return fsReadJSONFileSyncAdapter<string []>(emailsPath)
}
