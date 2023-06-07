import { useContext } from 'react'
import { CartContext, UseCartContextType } from '../contexts/CartProvider'

const useCart = (): UseCartContextType => {
  return useContext(CartContext)
}

export default useCart
