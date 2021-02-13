import { calculate } from '../../presentation/cli/calculate'
import { intro } from '../../presentation/cli/intro'

export const run = (): void => {
  intro(calculate)
}
