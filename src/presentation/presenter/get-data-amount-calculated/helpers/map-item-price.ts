import { Item } from '../../../protocols'

/**
 * @param {Item}    item   A item type.
 */
export const mapItemPrice = (item: Item): number => item.price * item.quantity
