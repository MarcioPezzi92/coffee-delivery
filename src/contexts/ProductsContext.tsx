import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addProduct,
  removeProduct,
  setProductAmount,
} from '../reducers/cart/actions'
export interface SelectedProduct {
  id: string
  name: string
  price: number
  quantity: number
}
interface CartContextProps {
  cart: SelectedProduct[]
  addNewProduct: (product: SelectedProduct) => void
  setQuantity: (productId: string, quantity: number) => void
  removeProductById: (productId: string) => void
}
interface ContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: ContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addNewProduct(product: SelectedProduct) {
    dispatch(addProduct(product))
  }

  function setQuantity(productId: string, quantity: number) {
    dispatch(setProductAmount(productId, quantity))
  }

  function removeProductById(productId: string) {
    dispatch(removeProduct(productId))
  }

  const { cart } = cartState

  return (
    <CartContext.Provider
      value={{ cart, addNewProduct, setQuantity, removeProductById }}
    >
      {children}
    </CartContext.Provider>
  )
}
