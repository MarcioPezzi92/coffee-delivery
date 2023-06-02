// import { ReactNode, useReducer } from 'react'

// interface ContextProviderProps {
//   children: ReactNode
// }

interface Product {
  id: string
  name: string
  types: string[]
  description: string
  price: number
}

interface Order {
  products: string[]
  total: number
}

// export function ProductsContextProvider({ children }: ContextProviderProps) {
//   const [products, dispatch] = useReducer(productsReducer)
// }
