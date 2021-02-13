import { Item } from '../../../protocols'

export const mapItemAmount = (item: Item): number => item.amount * item.quantity
