import { Item } from '../../../protocols'

export const mapItemPrice = (item: Item): number => item.price * item.quantity
