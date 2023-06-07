import { useContext } from 'react'
import ProductsContext, {
  UseProductsContextType,
} from '../contexts/ProductsProvider'

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext)
}

export default useProducts
