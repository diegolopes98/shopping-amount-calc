import { Item } from '../../../protocols'

export const mapItemAmount = (item: Item): number => item.price * item.quantity
