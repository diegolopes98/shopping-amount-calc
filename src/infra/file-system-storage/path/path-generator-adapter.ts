import { join } from 'path'

const pathGenerator = (joinFn: (...paths: string[]) => string, relativePath: string, dirname: string): string => {
  const pathAsArray: string[] = relativePath.split('/')
  return joinFn(dirname, ...pathAsArray)
}

export const pathGeneratorAdapter = (relativePath: string, dirname: string): string => pathGenerator(join, relativePath, dirname)
