/* eslint-disable no-unused-vars */
import { SelectedProduct } from '../../contexts/ProductsContext'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_NEW_PRODUCT',
  SET_PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function addProduct(product: SelectedProduct) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: { product },
  }
}

export function setProductAmount(productId: string, amount: number) {
  return {
    type: ActionTypes.SET_PRODUCT_AMOUNT,
    payload: { productId, amount },
  }
}

export function removeProduct(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: { productId },
  }
}
