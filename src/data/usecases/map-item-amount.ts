import { Item } from '../../domain/models/item'

export const mapItemAmount = (item: Item): number => item.amount * item.quantity
