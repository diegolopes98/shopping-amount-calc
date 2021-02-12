import { Item } from '../../domain/models'

export const getTotalAmount = (items: Item[]): number =>
  items.map(item => item.amount * item.quantity)
    .reduce((acc: number , cur: number) => acc + cur)
