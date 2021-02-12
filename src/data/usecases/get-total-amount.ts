import { Item } from '../../domain/models'

export const getTotalAmount = (
  items: Item[],
  reducerFn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number
): number =>
  items.map(item => item.amount * item.quantity)
    .reduce(reducerFn)
