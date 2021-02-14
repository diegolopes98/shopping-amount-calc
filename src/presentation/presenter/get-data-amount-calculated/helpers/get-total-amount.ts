import { Item } from '../../../protocols'

/**
 * @param {Item[]}      items       Array of Item type.
 * @param {function}    mapFn       Function to map the Item price of items.
 * @param {function}    reducerFn   Function to reduce each item's price of items into a total value.
 */
export const getTotalAmount = (
  items: Item[],
  mapFn: (value: any, idx: number) => number,
  reducerFn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number
): number =>
  items.map(mapFn)
    .reduce(reducerFn)
