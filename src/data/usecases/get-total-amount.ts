import { Item } from '../../domain/models'

export const getTotalAmount = (
  items: Item[],
  mapFn: (value: any, idx: number) => number,
  reducerFn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number
): number =>
  items.map(mapFn)
    .reduce(reducerFn)
