import { calculate } from './cli/calculate'
import { intro } from './cli/intro'

export const run = (): void => {
  intro(calculate)
}
