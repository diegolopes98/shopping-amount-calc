import { join } from 'path'

/**
 * @param {function}  joinFn          Function to join the path into the format of the current os, receives an
 * array of strings and return a string.
 * @param {string}    relativePath    Relative path as string, must use / (forward slash) to concatenate
 * directories.
 * @param {string}    dirname         The current dirname given by the os.
 */
const pathGenerator = (joinFn: (...paths: string[]) => string, relativePath: string, dirname: string): string => {
  const pathAsArray: string[] = relativePath.split('/')
  return joinFn(dirname, ...pathAsArray)
}

/**
 * @param {string}    relativePath    Relative path as string, must use / (forward slash) to concatenate
 * directories.
 * @param {string}    dirname         The current dirname given by the os.
 */
export const pathGeneratorAdapter = (
  relativePath: string,
  dirname: string
): string => pathGenerator(join, relativePath, dirname)
