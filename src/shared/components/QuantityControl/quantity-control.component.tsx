import { Plus, Minus } from 'phosphor-react'
import { QuantityControlContainer } from './quantity-control.styles'
import useCart from '../../../hooks/useCart'
import { CartItemType } from '../../../contexts/CartProvider'

type CartItemQtyControlProps = {
  item: CartItemType
}

type CatalogProductQtyControlProps = {
  productId: string
  qtyState: number
  // eslint-disable-next-line no-undef
  setQtyState: React.Dispatch<React.SetStateAction<number>>
}

const maxQty = 20

const content = (
  qty: number,
  decreaseQty: () => void,
  increaseQty: () => void,
  inCart?: boolean,
) => {
  return (
    <QuantityControlContainer>
      <button type="button" onClick={decreaseQty}>
        <Minus size={14} weight="bold" />
      </button>

      <span className={inCart ? 'in-cart' : ''}>{qty}</span>

      <button type="button" onClick={increaseQty}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityControlContainer>
  )
}

export function CartItemQtyControl({ item }: CartItemQtyControlProps) {
  const { dispatch, REDUCER_ACTIONS } = useCart()

  const setQuantity = (qty: number) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty },
    })
  }

  const decreaseQty = () => {
    if (item.qty > 0) setQuantity(item.qty - 1)
  }

  const increaseQty = () => {
    if (item.qty < maxQty) setQuantity(item.qty + 1)
  }

  return content(item.qty, decreaseQty, increaseQty)
}

export function CatalogProductQtyControl({
  productId,
  qtyState,
  setQtyState,
}: CatalogProductQtyControlProps) {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()

  const cartItem: CartItemType | undefined = cart.find(
    (item) => item.id === productId,
  )

  const setQuantity = (qty: number, item: CartItemType) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty },
    })
  }

  const decreaseQty = () => {
    if (cartItem) {
      const { qty } = cartItem
      if (qty > 1) setQuantity(qty - 1, cartItem)
    } else {
      if (qtyState > 1) setQtyState(qtyState - 1)
    }
  }

  const increaseQty = () => {
    if (cartItem) {
      const { qty } = cartItem
      if (qty < maxQty) setQuantity(qty + 1, cartItem)
    } else {
      if (qtyState < maxQty) setQtyState(qtyState + 1)
    }
  }

  return content(
    cartItem ? cartItem.qty : qtyState,
    decreaseQty,
    increaseQty,
    !!cartItem,
  )
}
