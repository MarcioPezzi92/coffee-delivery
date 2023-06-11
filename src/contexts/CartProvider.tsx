import { ReactElement, createContext, useMemo, useReducer } from 'react'

export type CartItemType = {
  id: string
  picture: string
  name: string
  price: number
  qty: number
}

type CartStateType = { cart: CartItemType[] }

const REDUCER_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANTITY: 'QUANTITY',
  SUBMIT: 'SUBMIT',
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string
  payload?: CartItemType
}

const reducer = (
  state: CartStateType,
  action: ReducerAction,
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error('action.payload missing in ADD action')
      }

      const { id, name, price, picture, qty } = action.payload
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id,
      )

      setCartToStorage([...filteredCart, { id, name, price, qty, picture }])

      return {
        ...state,
        cart: [...filteredCart, { id, name, price, qty, picture }],
      }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error('action.payload missing in REMOVE action')
      }

      const { id } = action.payload

      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id,
      )

      setCartToStorage([...filteredCart])

      return { ...state, cart: [...filteredCart] }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error('action.payload missing in QUANTITY action')
      }

      const { id, qty } = action.payload

      const updatedCart: CartItemType[] = state.cart.map((item) =>
        item.id === id ? { ...item, qty } : item,
      )

      return { ...state, cart: updatedCart }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      alert('Formulário enviado')
      return { ...state, cart: [] }
    }
    default:
      throw new Error('Unidentified reducer action type')
  }
}

function setCartToStorage(cart: CartItemType[]) {
  localStorage.removeItem('@coffee-delivery:cart-state-1.0.0')

  const stateJSON = JSON.stringify(cart)

  localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
}

function getCartFromLocalStorage(): CartItemType[] | undefined {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:cart-state-1.0.0',
  )
  if (storedStateAsJSON) {
    return JSON.parse(storedStateAsJSON)
  }
  else return undefined
}

const storedData = getCartFromLocalStorage()

console.log("From local storage", storedData)

const initialCartState: CartStateType = {cart: storedData || []}

const useCartContext = (initialState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const totalItems = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty
  }, 0)

  const deliveryFee: number = 8

  const totalPrice = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + deliveryFee + cartItem.qty * cartItem.price
  }, 0)

  const cart = state.cart

  return {
    dispatch,
    REDUCER_ACTIONS,
    totalItems,
    deliveryFee,
    totalPrice,
    cart,
  }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: 0,
  deliveryFee: 0,
  cart: [],
}

export const CartContext =
  createContext<UseCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initialCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
